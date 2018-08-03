import React from 'react';
import { ScrollView } from 'react-native';
import style from '../config/style';


export default class SpellList extends React.Component{
  render(){
    return(
      <ScrollView style={style.spellList}>
        {this.props.children}
      </ScrollView>
    );
  }
};
