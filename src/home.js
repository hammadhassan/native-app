import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Home extends Component {
    render () {
        return (
    <View>
        <Image style={styles.stretch}
          source={require('../images/tmt-logo.png')}
        />
        <Text>Home Page of eToolmarts</Text>
    </View>
        )
    }
}
const styles = StyleSheet.create({
  stretch: {
    // width: 200,
    // height: 50,
    justifyContent: 'center',
    // flex: 1
  }
});

export default Home;