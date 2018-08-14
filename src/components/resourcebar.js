import React from 'react';
import { View } from 'react-native';
import style from '../config/style';

export default class ResourceBar extends React.Component{
  render(){
    //width of the bar, in the form of 'width%'.
    const widthString = this.props.fillPercent.toString() + '%';

    return (
      <View style={[style.barFrame, this.props.frameStyle]}>
        <View style={[style.barFill, this.props.fillColor, {width: widthString}]}>
          {!!this.props.content &&
            <View>
              {this.props.content()}
            </View>
          }
        </View>
      </View>
    );
  }
};
