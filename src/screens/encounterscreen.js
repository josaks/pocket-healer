
import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import Manabar from '../components/manabar';
import SpellBtn from '../components/spellbtn';
import BossHealthbar from '../components/bosshealthbar';
import Raider from '../components/raider';
import Castbar from '../components/castbar';
import { deepClone } from '../lib/helpermethods';
import { raiderMaxHealth, bossMaxHealth, maxMana } from '../config/settings';

export default class EncounterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.getParam('boss');

    return ({
      headerTitle: name,
      headerLeft: null,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '90%',
      },
    });
  };

  constructor(props) {
    super(props);
    const raiders = [];
    for (let i = 0; i < 10; i++) {
      raiders.push({ hp: raiderMaxHealth, alive: true, effects: [], auras: [] });
    }
    this.state = {
      raiders,
      bossHp: bossMaxHealth,
      mana: maxMana,
      castCompletion: 50,
      amountOfRaidersAlive: 10,
    };

    // get navigation props
    const { navigation } = props;
    this.spellOne = navigation.getParam('spells').spellOne;
    this.spellTwo = navigation.getParam('spells').spellTwo;
    this.bossLogic = navigation.getParam('boss').logic;
  }

  componentDidMount() {
    // select spell number one as starting spell
    this.selectSpell(this.spellOne);

    // interval that runs the game
    this.maininterval = setInterval(() => {
      const { bossHp, amountOfRaidersAlive } = this.state;

      if (bossHp <= 0 || amountOfRaidersAlive === 0) {
        // TODO: fix https://reactnavigation.org/docs/en/stack-actions.html#reset
        this.props.navigation.reset();

        // clear interval
        // this line might be unneccessary because of doing the same in componentWillUnmount()
        clearInterval(this.maininterval);
      }
      else {
        // boss attacks here
        this.runBossAction();

        // reduce boss hp
        const dmgPerRaider = 4;
        this.reduceBossHp(dmgPerRaider * amountOfRaidersAlive);
      }
    }, 3000);
  }

  componentWillUnmount() {
    // clear interval
    clearInterval(this.maininterval);
  }

  reduceBossHp = (dmg) => {
    this.setState(prevState => ({ bossHp: prevState.bossHp - dmg }));
  }

  /*
  Call use() for every raiders effects. In addition, calculate amount of raiders alive,
  and change alive to false for those raiders that are dead.
  */
  runEffectsAndCountAliveRaiders(raiders) {
    let amountOfRaidersAlive = 0;
    raiders.forEach((raider) => {
      if (raider.hp > 0) {
        amountOfRaidersAlive++;
        raider.effects.forEach((effect) => {
          effect.use(raider);
        });
      }
      else {
        raider.alive = false;
      }
    });

    // update state
    this.setState({
      amountOfRaidersAlive,
      raiders,
    });
  }

  runBossAction() {
    // get bosslogic
    const { bossLogic } = this;
    /*
    bosslogic decides action to be taken by boss and requires injection of a random number
    */
    const roll = Math.floor(Math.random() * 100);
    // pass copy of raider array to bosslogic and modify health
    const raiders = bossLogic(deepClone(this.state.raiders), roll);
    // handle effects on raiders
    this.runEffectsAndCountAliveRaiders(raiders);
  }

  // select spell
  selectSpell(spell) {
    this.selectedSpell = spell;
  }

  // castbar animation
  castAnimation(casttimeMs) {
    // TODO
    // try to do this with animation
  }

  castSelectedSpell(i) {
    const newMana = this.state.mana - this.selectedSpell.manaCost;
    if (newMana >= 0 && this.state.raiders[i].alive) {
      // castbar animation
      this.castAnimation(this.selectedSpell.casttime);

      // run spell on a new copy of raider array(immutability)
      const raiders = this.selectedSpell.cast(deepClone(this.state.raiders), i);

      // update state
      this.setState(prevState => ({
        mana: prevState.mana - this.selectedSpell.manaCost,
        raiders,
      }));
    }
  }

  render() {
    return (
      <View style={style.encounterScreen}>

        <View style={style.raidContainer}>
          <BossHealthbar
            fillPercent={(this.state.bossHp / bossMaxHealth) * 100}
            text="'Bossname here'"
          />

          <View style={style.raiderHealthbarContainer}>
            {
              this.state.raiders.map((raider, i) => (
                <Raider
                  key={i}
                  onpress={() => this.castSelectedSpell(i)}
                  hp={raider.hp}
                  effects={raider.effects}
                />
              ))
            }
          </View>
        </View>

        <Manabar
          fillPercent={(this.state.mana / maxMana) * 100}
        />

        <Castbar castCompletion={this.state.castCompletion} />

        <View style={style.spellBtnsContainer}>
          <SpellBtn onpress={() => this.selectSpell(this.spellOne)} text={this.spellOne.name} />
          <SpellBtn onpress={() => this.selectSpell(this.spellTwo)} text={this.spellTwo.name} />
        </View>
      </View>
    );
  }
}
