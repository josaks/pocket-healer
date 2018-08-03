import React from 'react';
import { TouchableOpacity } from 'react-native';
import style from '../config/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class AcceptBtn extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onpress} style={[style.fightInfoBtn, style.acceptBtn]}>
        <FontAwesome name={'check'} size={35} />
      </TouchableOpacity>
    );
  }
};
