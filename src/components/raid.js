// import React from 'react';
// import { View, Dimensions } from 'react-native';
// import style from '../config/style';
// import BossHealthbar from './bosshealthbar';
// import RaiderHealthbar from './raiderhealthbar';
//
// export default class Raid extends React.Component{
//   constructor(props){
//     super(props);
//     let raiders = [];
//     for(let i = 0; i < 10; i++){
//       raiders.push({ hp: 1000, selected: false });
//     }
//     this.state = {
//       bossHp: 1000,
//       amountOfRaidersAlive: 10,
//       raiders: raiders,
//     };
//   }
//
//   componentDidMount(){
//     // this._interval = setInterval(() => {
//     //   if(this.state.bossHp <= 0){
//     //     //trigger fight over screen
//     //
//     //     clearInterval(this._interval);
//     //   }
//     //   else{
//     //     this.reduceHp(100);
//     //   }
//     // }, 1000);
//   }
//
//   componentWillUnmount() {
//     // clearInterval(this._interval);
//   }
//
//   //reduce boss hp by an amount
//   reduceBossHp = (hpReduction) => {
//     const newHp = this.state.bossHp - hpReduction;
//     this.setState({
//       bossHp: newHp,
//     });
//   }
//
//   //reduce raider index hp by an amount
//   reduceRaiderHp = (hpReduction, index) => {
//     const newHp = this.state.raiders[index].hp - hpReduction;
//     let raiders = [...this.state.raiders];
//     raiders[index].hp = newHp;
//     this.setState({
//       raiders: raiders,
//     });
//   }
//
//   //select a raider to cast a spell on
//   selectRaider(selectedIndex){
//     let raiders = this.state.raiders.map((raider, index) => {
//       return (selectedIndex === index) ? {...raider, selected: true} : {...raider, selected: false};
//     });
//     this.setState({
//       raiders: raiders,
//     });
//   }
//
//   render(){
//     return(
//       <View>
//         <BossHealthbar hp={this.state.bossHp}/>
//         <View style={style.raiderHealthbarContainer}>
//           {
//             this.state.raiders.map((raider, index) => {
//               return(
//                 <View key={index}>
//                   <RaiderHealthbar
//                     onpress={() => this.selectRaider(index)}
//                     hp={raider.hp}
//                     selected={raider.selected}
//                   />
//                 </View>
//               );
//             })
//           }
//         </View>
//       </View>
//     );
//   }
// };
