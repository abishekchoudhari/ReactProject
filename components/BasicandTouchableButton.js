import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

const BasicandTouchableButton = () => {
  return (
    <>
      {ToastAndroid.show('Basic and Touchable Button', ToastAndroid.SHORT)}
      <Text>Basic Button</Text>
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />

      <Text>Touclable Button</Text>
      <View style={Styles.container}>
        <TouchableHighlight
          onPress={() => {
            alert('You clicked TouchableHighlight');
          }}
          underlayColor="white">
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={() => {
            alert('You Clicked TouchableOpacity');
          }}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={() => {
            alert('You Clicked TouchableNativeFeedback');
          }}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>
              TouchableNativeFeedback{' '}
              {Platform.OS !== 'android' ? '(Android Only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            alert('You Clicked TouchableWithoutFeedback');
          }}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight
          onPress={() => {
            alert('You Clicked Long press TouchableHighlight');
          }}
          onLongPress={() => {
            alert('You have Long-pressed the TouchableHighlight');
          }}
          underlayColor="white">
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>
              Touchable with Long Press (TouchableHighlight)
            </Text>
          </View>
        </TouchableHighlight>
      </View>

      {ToastAndroid.showWithGravity(
        'Show with gravity',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )}
      {ToastAndroid.showWithGravityAndOffset(
        'Gravity and offset',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default BasicandTouchableButton;
