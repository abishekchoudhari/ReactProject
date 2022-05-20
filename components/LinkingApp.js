import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const supportedUrl = 'https://google.com';
const unsupportedUrl = 'slack://open?team=123456';

const OpenUrlButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert('Cant open url');
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const OpenSettingsButton = ({children}) => {
  const handlePress = useCallback(async () => {
    await Linking.openSettings();
  });

  return <Button title={children} onPress={handlePress} />;
};

const SendIntentButton = ({action, extras, children}) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

const LinkingApp = () => {
  return (
    <View style={styles.container}>
      <OpenUrlButton url={supportedUrl}>Open Supported Url</OpenUrlButton>
      <OpenUrlButton url={unsupportedUrl}>Open unsupported Url</OpenUrlButton>
      <OpenSettingsButton>open Settings</OpenSettingsButton>
      <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
        Power Usage Summary
      </SendIntentButton>
      <SendIntentButton
        action="android.settings.APP_NOTIFICATION_SETTINGS"
        extras={[
          {'android.provider.extra.APP_PACKAGE': 'com.facebook.katana'},
        ]}>
        APP NOTIFICATION SETTINGS
      </SendIntentButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default LinkingApp;
