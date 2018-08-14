import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import Raid from '../components/raid';
import Manabar from '../components/manabar';
import SpellBtn from '../components/spellbtn';
import BossHealthbar from '../components/bosshealthbar';
import RaiderHealthbar from '../components/raiderhealthbar';
import Castbar from '../components/castbar';
import { JSONDeepCopy, deepClone } from '../lib/helpermethods';
import { raiderMaxHealth, bossMaxHealth, maxMana } from '../config/settings';

export default class EncounterScreen extends React.Component {
  constructor(props){
    super(props);
    let raiders = [];
    for(let i = 0; i < 10; i++){
      raiders.push({ hp: raiderMaxHealth, alive: true, effects: [], auras: [] });
    }
    this.state = {
      bossHp: bossMaxHealth,
      mana: maxMana,
      castCompletion: 0,
      amountOfRaidersAlive: 10,
      raiders: raiders,
    };

    //get navigation props
    this.spellOne = this.props.navigation.getParam('spells').spellOne;
    this.spellTwo = this.props.navigation.getParam('spells').spellTwo;
    this.bossLogic = this.props.navigation.getParam('boss');
  }

  componentDidMount(){
    //select spell number one as starting spell
    this.selectSpellOne();

    //interval that runs the game
    this._maininterval = setInterval(() => {
      if(this.state.bossHp <= 0 || this.state.amountOfRaidersAlive === 0){
        /*TODO: trigger fight over screen,
        for now go back to fight select screen*/
        this.props.navigation.navigate('FightSelect');

        //clear interval, stopping interval from running
        //this line might be unneccessary because of doing the same in componentWillUnmount()
        clearInterval(this._maininterval);
      }
      else{
        //boss attacks here
        this.runBossAction();

        //reduce boss hp
        let dmgPerRaider = 4;
        this.reduceBossHp(dmgPerRaider * this.state.amountOfRaidersAlive);
      }

    }, 3000);
  }



  componentWillUnmount() {
    //clear interval, stopping interval from running
    clearInterval(this._maininterval);
  }

  runBossAction(){
    //get bosslogic
    const bossLogic = this.bossLogic;
    //bosslogic decides action to be taken by boss and needs a random number to decide
    const roll = Math.floor(Math.random() * 100);
    //pass copy of raider array to bosslogic and modify health
    let raiders = bossLogic(deepClone(this.state.raiders), roll);
    //handle effects on raiders
    this.runEffectsAndCountAliveRaiders(raiders);
  }

  /*
  Call use() for every raiders effects. In addition, calculate amount of raiders alive,
  and change alive to false for those raiders that are dead.
  */
  runEffectsAndCountAliveRaiders(raiders){
    let amountOfRaidersAlive = 0;
    raiders.forEach((raider) => {
      if(raider.hp > 0){
        amountOfRaidersAlive++;
        raider.effects.forEach((effect) => {
          effect.use(raider);
        });
      }
      else{
        raider.alive = false;
      }
    });

    //update state
    this.setState({
      amountOfRaidersAlive: amountOfRaidersAlive,
      raiders: raiders,
    });
  }

  reduceBossHp = (dmg) => {
    const newHp = this.state.bossHp - dmg;
    this.setState({
      bossHp: newHp,
    });
  }

  //select first spell
  selectSpellOne(){
    this.selectedSpell = this.spellOne;
  }

  //select second spell
  selectSpellTwo(){
    this.selectedSpell = this.spellTwo;
  }

  //castbar animation
  castAnimation(casttimeMs){
    //TODO
    //try to do this with animation API
  }

  castSelectedSpell(i){
    const newMana = this.state.mana - this.selectedSpell.manaCost;
    if(newMana >= 0 && this.state.raiders[i].alive){
      //castbar animation
      this.castAnimation(this.selectedSpell.casttime);

      //run spell on a new copy of raider array(immutability)
      const raiders = this.selectedSpell.cast(deepClone(this.state.raiders), i);

      //update state
      this.setState({
        raiders: raiders,
        mana: newMana,
      });
    }
  }

  render() {
    return (
      <View style={style.encounterScreen}>
        <View style={style.bossNameContainer}>
          <Text style={style.bossName}>Example bossname</Text>
        </View>

        <View style={style.raidContainer}>

          <BossHealthbar
            fillPercent={(this.state.bossHp / bossMaxHealth) * 100}
            text="'Bossname here'"
          />

          <View style={style.raiderHealthbarContainer}>
            {
              this.state.raiders.map((raider, i) => {
                return(
                  <View key={i}>
                    <RaiderHealthbar
                      onpress={() => this.castSelectedSpell(i)}
                      fillPercent={(raider.hp / raiderMaxHealth) * 100}
                      effects={raider.effects}
                    />
                  </View>
                );
              })
            }
          </View>
        </View>

        <View>
          <Manabar
            fillPercent={(this.state.mana / maxMana) * 100}
          />
        </View>

        <View>
          <Castbar castCompletion={this.state.castCompletion} />
        </View>

        <View style={style.spellBtnsContainer}>
          <SpellBtn onpress={() => this.selectSpellOne()} text={this.spellOne.name}/>
          <SpellBtn onpress={() => this.selectSpellTwo()} text={this.spellTwo.name}/>
        </View>
      </View>
    );
  }
};
