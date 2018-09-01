import React from 'react';
import { Font, AppLoading } from 'expo';
import RootStack from './src';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <AppLoading />;
    }
    return (
      <RootStack />
    );
  }
}
