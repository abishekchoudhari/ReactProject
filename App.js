/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

//import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import AlertApp from './components/AlertApp';
import DateTime from './components/DateTime';
import ImageandImagebg from './components/ImageandImagebg';
import ListApp from './components/ListApp';
import ModalApp from './components/ModalApp';
import ShareApp from './components/ShareApp';
import ActivityIndi from './components/ActivityIndi';
import BasicandTouchableButton from './components/BasicandTouchableButton';
import BlinkApp from './components/BlinkApp';
//import Drawer from './components/Drawer';
import LayoutFlex from './components/LayoutFlex';
import ScrollandInput from './components/ScrollandInput';
import Stylefile from './components/Stylefile';
import TransformApp from './components/TransformApp';
import PanResponderApp from './components/PanResponderApp';
import ToolBarApp from './components/ToolBarApp';
import BackHandlerApp from './components/BackHandlerApp';
import PixelRatioApp from './components/PixelRatioApp';
import VirtualizedListApp from './components/VirtualizedListApp';
import {Provider} from 'react-redux';
//import store from './MyAssets/Redux/store';
import Screen from './MyAssets/Screens/Screen';
import WebViewApp from './components/WebViewApp';
import DatePickerApp from './components/DatePickerApp';
import PagerViewAndroid from './components/PagerViewAndroid';
import AnimateApp from './components/AnimateApp';
import AppStateApp from './components/AppStateApp';
import AsyncStorageApp from './components/AsyncStorageApp';
import DimensionsApp from './components/DimensionsApp';
import ReduxProviderApp from './components/ReduxProviderApp';
import ClipboardApp from './components/ClipboardApp';
import LinkingApp from './components/LinkingApp';
import GeoLocationApp from './components/GeoLocationApp';
import MapApp from './components/MapApp';
import VideoApp from './components/VideoApp';
import CustomAlertDialog from './components/CustomAlertDialog';
//import Notifications from './Notifications';

// import CameraRollApp from './components/CameraRollApp';

const Stack = createNativeStackNavigator();

const App = () => {
  // useEffect(() => {
  //   Notifications.register();
  //   Notifications.unregister();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="AlertApp" component={AlertApp} />
        <Stack.Screen name="ActivityIndi" component={ActivityIndi} />
        <Stack.Screen
          name="BasicandButton"
          component={BasicandTouchableButton}
        />
        <Stack.Screen name="BlinkApp" component={BlinkApp} />
        <Stack.Screen name="DateTime" component={DateTime} />
        {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
        <Stack.Screen name="Imageandbg" component={ImageandImagebg} />
        <Stack.Screen name="LayoutFlex" component={LayoutFlex} />
        <Stack.Screen name="ListApp" component={ListApp} />
        <Stack.Screen name="Modal" component={ModalApp} />
        <Stack.Screen name="ScrollandInput" component={ScrollandInput} />
        <Stack.Screen name="Share" component={ShareApp} />
        <Stack.Screen name="Stylefile" component={Stylefile} />
        <Stack.Screen name="Transform" component={TransformApp} />
        <Stack.Screen name="PanResponder" component={PanResponderApp} />
        <Stack.Screen name="Toolbar" component={ToolBarApp} />
        <Stack.Screen name="Backhandler" component={BackHandlerApp} />
        <Stack.Screen name="PixelRatio" component={PixelRatioApp} />
        <Stack.Screen name="VirtualizedList" component={VirtualizedListApp} />
        <Stack.Screen name="webView" component={WebViewApp} />
        <Stack.Screen name="DatePicker" component={DatePickerApp} />
        <Stack.Screen name="PagerViewAndroid" component={PagerViewAndroid} />
        <Stack.Screen name="AnimatedApp" component={AnimateApp} />
        <Stack.Screen name="Appstate" component={AppStateApp} />
        <Stack.Screen name="AsyncStorageApp" component={AsyncStorageApp} />
        <Stack.Screen name="DimensionsApp" component={DimensionsApp} />
        <Stack.Screen name="ReduxProviderApp" component={ReduxProviderApp} />
        {/* <Stack.Screen name="CameraRollApp" component={CameraRollApp} /> */}
        <Stack.Screen name="ClipboardApp" component={ClipboardApp} />
        <Stack.Screen name="LinkingApp" component={LinkingApp} />
        <Stack.Screen name="GeoLocationApp" component={GeoLocationApp} />
        <Stack.Screen name="MapApp" component={MapApp} />
        <Stack.Screen name="VideoApp" component={VideoApp} />
        {/* <Stack.Screen name="NotificationApp" component={Notifications} /> */}
        <Stack.Screen name="CustomAlertDialog" component={CustomAlertDialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={Styles.buttonView}>
        <Button
          title="Alert App"
          onPress={() => navigation.navigate('AlertApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="ActivityIndi App"
          onPress={() => navigation.navigate('ActivityIndi')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="BasicandTouchableButton App"
          onPress={() => navigation.navigate('BasicandButton')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Blink App"
          onPress={() => navigation.navigate('BlinkApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="DateTime App"
          onPress={() => navigation.navigate('DateTime')}
        />
      </View>
      {/* <Button
        title="Drawer App"
        onPress={() => navigation.navigate('Drawer')}
      /> */}
      <View style={Styles.buttonView}>
        <Button
          title="ImageandImagebg App"
          onPress={() => navigation.navigate('Imageandbg')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="LayoutFlex App"
          onPress={() => navigation.navigate('LayoutFlex')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="List App"
          onPress={() => navigation.navigate('ListApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Modal App"
          onPress={() => navigation.navigate('Modal')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="ScrollandInput App"
          onPress={() => navigation.navigate('ScrollandInput')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Share App"
          onPress={() => navigation.navigate('Share')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Stylefile App"
          onPress={() => navigation.navigate('Stylefile')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Transform App"
          onPress={() => navigation.navigate('Transform')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="PanResponder App"
          onPress={() => navigation.navigate('PanResponder')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Toolbar App"
          onPress={() => navigation.navigate('Toolbar')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="BackHandler App"
          onPress={() => navigation.navigate('Backhandler')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="PixelRatio App"
          onPress={() => navigation.navigate('PixelRatio')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="VirtualizedList App"
          onPress={() => navigation.navigate('VirtualizedList')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="WebView App"
          onPress={() => navigation.navigate('webView')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="DatePicker App"
          onPress={() => navigation.navigate('DatePicker')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="PagerView Android App"
          onPress={() => navigation.navigate('PagerViewAndroid')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Animated App"
          onPress={() => navigation.navigate('AnimatedApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="App State"
          onPress={() => navigation.navigate('Appstate')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Async Storage App"
          onPress={() => navigation.navigate('AsyncStorageApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Dimensions App"
          onPress={() => navigation.navigate('DimensionsApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Redux Provider App"
          onPress={() => navigation.navigate('ReduxProviderApp')}
        />
      </View>
      {/* <View style={Styles.buttonView}>
        <Button
          title="Camera Roll App"
          onPress={() => navigation.navigate('CameraRollApp')}
        />
      </View> */}
      <View style={Styles.buttonView}>
        <Button
          title="Clipboard App"
          onPress={() => navigation.navigate('ClipboardApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Linking App"
          onPress={() => navigation.navigate('LinkingApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Geo Location App"
          onPress={() => navigation.navigate('GeoLocationApp')}
        />
      </View>
      <View style={Styles.buttonView}>
        <Button title="Map App" onPress={() => navigation.navigate('MapApp')} />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Video App"
          onPress={() => navigation.navigate('VideoApp')}
        />
      </View>
      {/* <View style={Styles.buttonView}>
        <Button
          title="Notification App"
          onPress={() => navigation.navigate('NotificationApp')}
        />
      </View> */}
      <View style={Styles.buttonView}>
        <Button
          title="Custom Alert Dialog App"
          onPress={() => navigation.navigate('CustomAlertDialog')}
        />
      </View>
    </ScrollView>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Styles = StyleSheet.create({
  buttonView: {
    width: '50%',
    padding: 10,
  },
  wrapper: {
    height: 60,
  },
});

export default App;
