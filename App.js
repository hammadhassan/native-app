import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/home";
import About from "./src/about";
import Items from "./src/item";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
        <Items />
        <About />
        <Text>Toolmarts app in React Native By Hammad Hassan &copy;</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
