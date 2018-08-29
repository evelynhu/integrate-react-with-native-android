import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class HelloWorld extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: props.greeting,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>{ this.state.greeting }</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);
