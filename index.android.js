"use strict";
import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import Main from "./src/Main";
import { StackNavigator } from 'react-navigation';

// class ChatScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: `Chat with ${navigation.state.params.user}`,
//   });
//   render() {
//       const { params } = this.props.navigation.state;
//     return (
//       <View>
//         <Text>Chat with {params.user}</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//         <Text>Hello, Chat App!</Text>
//         <Button
//           onPress={() => navigate('Chat', { user: 'Hammad' })}
//           title="Chat with Hammad "
//         />
//       </View>
//     );
//   }
// }

// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: ChatScreen },
// });

AppRegistry.registerComponent('TMTNav', () => Main);
