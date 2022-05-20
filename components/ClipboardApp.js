import React, {useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ClipboardApp = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = str => {
    Clipboard.setString(str);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => copyToClipboard('Hello World')}>
          <Text>Click to copy "Hello World" to clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => copyToClipboard('Welcome')}>
          <Text>Click to copy "Welcome" to clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchCopiedText}>
          <Text>Click here to view the copied text</Text>
        </TouchableOpacity>

        <Text style={styles.copiedText}>{copiedText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});

export default ClipboardApp;
