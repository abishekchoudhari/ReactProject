import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';

class WebViewApp extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://reactnative.dev/'}}
        style={Styles.container}
      />
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewApp;
