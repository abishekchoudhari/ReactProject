import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const TransformApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.box}>
          <Text style={styles.text}>Original object</Text>
        </View>
        <View style={[styles.box, {transform: [{scale: 2}]}]}>
          <Text style={styles.text}>Scale by 2</Text>
        </View>
        <View style={[styles.box, {transform: [{scaleX: 2}]}]}>
          <Text style={styles.text}>ScaleX by 2</Text>
        </View>
        <View style={[styles.box, {transform: [{scaleY: 2}]}]}>
          <Text style={styles.text}>ScaleY by 2</Text>
        </View>

        <View style={[styles.box, {transform: [{rotate: '45deg'}]}]}>
          <Text style={styles.text}>rotate by 45 deg</Text>
        </View>
        <View
          style={[
            styles.box,
            {transform: [{rotateX: '45deg'}, {rotateZ: '45deg'}]},
          ]}>
          <Text style={styles.text}>rotateX-Z by 45 deg</Text>
        </View>
        <View
          style={[
            styles.box,
            {transform: [{rotateY: '45deg'}, {rotateZ: '45deg'}]},
          ]}>
          <Text style={styles.text}>rotateY-Z by 45 deg</Text>
        </View>

        <View style={[styles.box, {transform: [{skewX: '45deg'}]}]}>
          <Text style={styles.text}>skewX by 45 deg</Text>
        </View>
        <View style={[styles.box, {transform: [{skewY: '45deg'}]}]}>
          <Text style={styles.text}>skewY by 45 deg</Text>
        </View>
        <View
          style={[
            styles.box,
            {transform: [{skewY: '30deg'}, {skewY: '30deg'}]},
          ]}>
          <Text style={styles.text}>skewx-Y by 30 deg</Text>
        </View>

        <View style={[styles.box, {transform: [{translateX: -50}]}]}>
          <Text style={styles.text}>translateX by -50</Text>
        </View>
        <View style={[styles.box, {transform: [{translateY: 50}]}]}>
          <Text style={styles.text}>translateY by 50</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: '#61dafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 8,
    color: '#000',
    textAlign: 'center',
  },
});

export default TransformApp;
