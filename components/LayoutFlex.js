import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LayoutFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.powderblue} />
      <View style={styles.skyblue} />
      <View style={styles.steelblue} />
    </View>
  );
};

export default LayoutFlex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // set elements horizontally`.
    alignItems: 'stretch',
  },
  powderblue: {
    width: 60,
    height: 60,
    backgroundColor: 'powderblue',
  },
  skyblue: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
  },
  steelblue: {
    /*width: 60,*/
    height: 60,
    backgroundColor: 'steelblue',
  },
});
