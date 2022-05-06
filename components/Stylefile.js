import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Stylefile = () => {
  return (
    <View style={styles.container}>
      <Text style={{width: 200, height: 80}}>
        style, width, height, stylesheet
      </Text>
      <Text style={styles.red}>Just red</Text>
      <Text style={styles.bigBlue}>Just bigBlue</Text>
      <Text style={[styles.red, styles.bigBlue]}>red then bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>Bigblue then red</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#000',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Stylefile;
