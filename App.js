import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from "./src/home";
// import About from "./src/about";
// import Items from "./src/item";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Home />
//         <Items />
//         <About />
//         <Text>Toolmarts&reg; app in React Native By Hammad Hassan&trade; &copy;</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import TabBarNavigation from './src/tabBar/views/TabBarNavigation';

class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('SampleNavigation', () => SampleNavigation)
