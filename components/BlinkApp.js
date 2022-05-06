import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

//props & state

const Blink = props => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsBlinking(!isBlinking);
    }, 1000);

    return () => clearInterval(toggle);
  });

  if (!isBlinking) {
    return null;
  }

  return (
    <View>
      <Text>Props and state</Text>
      <Text>{props.text}</Text>
    </View>
  );
};

const BlinkApp = () => {
  return (
    <View>
      <Text>
        <Blink text="Yes its Blinking" />
      </Text>
    </View>
  );
};

export default BlinkApp;
