"Use Strict";

import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  mainContainer: {
    flex: 1
  },
   navbar: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2A3744',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row"
  },
  navbarTitle: {
      color: "#fefefe",
      textAlign: "center",
      flex: 1,
      fontWeight: "bold"
  },
  navbarButton: {
      width: 50,
      color: "#fefefe",
      textAlign: 'center'
  }
});