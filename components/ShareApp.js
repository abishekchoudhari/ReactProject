import React from 'react';
import {Button, StatusBar, View, StyleSheet, Image} from 'react-native';
import Share from 'react-native-share';
//import file from './assets/base64';

const ShareApp = () => {
  const url = 'https://awesome.contents.com/';
  const title = 'Awsome content';
  const msg = 'Check this out';

  const image = {
    uri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
  };

  const options = {
    title,
    url,
    msg,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={image}
        style={{...styles.containerImg, ...styles.stretchImg}}
      />
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share();
          }}
          title="Share Text"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing image file from awesome share app',
              msg: 'Please take a look at this image',
              url: image.img,
            });
          }}
          title="Share Image"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing pdf file from awesome share app',
              msg: 'Please take a look at this file',
              url: image.pdf,
            });
          }}
          title="Share Pdf"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    paddingTop: 50,
    marginVertical: 20,
  },
  stretchImg: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});

export default ShareApp;
