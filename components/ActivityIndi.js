import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const ActivityIndi = () => {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size={'large'} />
      <ActivityIndicator size={'small'} color="#0000ff" />
      <ActivityIndicator size={'large'} color="#00ff00" />
    </View>
  );
};

export default ActivityIndi;
