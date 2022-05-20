import React from 'react';
import PagerView from 'react-native-pager-view';
import {StyleSheet, Text, View} from 'react-native';

const PagerViewAndroid = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First Page</Text>
      </View>
      <View key="2">
        <Text>Second Page</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default PagerViewAndroid;
