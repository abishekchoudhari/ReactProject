import React from 'react';
import {Alert, Button, View} from 'react-native';

const AlertApp = () => {
  const twoButtonAlert = () => {
    Alert.alert('Alert Title', 'Alert Message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancle pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
      },
    ]);
  };

  const threeButtonAlert = () => {
    Alert.alert('Alert title', 'Alert message', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later'),
      },
      {
        text: 'Cancle',
        onPress: () => console.log('cancle'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => console.log('Ok'),
      },
    ]);
  };

  const buttonAlert = () => {
    alert('Alert');
  };

  return (
    <View>
      <Button title="Two Button Alert" onPress={twoButtonAlert} />
      <Button title="Three Button Alert" onPress={threeButtonAlert} />
      <Button title="Alert" onPress={buttonAlert} />
    </View>
  );
};

export default AlertApp;
