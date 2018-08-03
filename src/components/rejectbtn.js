import React from 'react';
import { TouchableOpacity } from 'react-native';
import style from '../config/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class RejectBtn extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onpress} style={[style.fightInfoBtn, style.rejectBtn]}>
        <FontAwesome name={'times'} size={35} />
      </TouchableOpacity>
    );
  }
};
