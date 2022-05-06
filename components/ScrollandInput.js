import React, {useState} from 'react';
import {ScrollView, Text, Image, TextInput} from 'react-native';

const ScrollandInput = () => {
  const [name, setName] = useState('');

  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

  return (
    <ScrollView>
      <Text>ScrollandInput</Text>
      <TextInput
        style={{height: 40}}
        placeholder="enter text"
        onChangeText={newtext => setName(newtext)}
        defaultValue={name}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {name
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <Image source={logo} />
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
    </ScrollView>
  );
};

export default ScrollandInput;
