/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';

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

const Stack = createNativeStackNavigator();

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Alert App"
        onPress={() => navigation.navigate('AlertApp')}
      />
      <Button
        title="ActivityIndi App"
        onPress={() => navigation.navigate('ActivityIndi')}
      />
      <Button
        title="BasicandTouchableButton App"
        onPress={() => navigation.navigate('BasicandButton')}
      />
      <Button
        title="Blink App"
        onPress={() => navigation.navigate('BlinkApp')}
      />
      <Button
        title="DateTime App"
        onPress={() => navigation.navigate('DateTime')}
      />
      {/* <Button
        title="Drawer App"
        onPress={() => navigation.navigate('Drawer')}
      /> */}
      <Button
        title="ImageandImagebg App"
        onPress={() => navigation.navigate('Imageandbg')}
      />
      <Button
        title="LayoutFlex App"
        onPress={() => navigation.navigate('LayoutFlex')}
      />
      <Button title="List App" onPress={() => navigation.navigate('ListApp')} />
      <Button title="Modal App" onPress={() => navigation.navigate('Modal')} />
      <Button
        title="ScrollandInput App"
        onPress={() => navigation.navigate('ScrollandInput')}
      />
      <Button title="Share App" onPress={() => navigation.navigate('Share')} />
      <Button
        title="Stylefile App"
        onPress={() => navigation.navigate('Stylefile')}
      />
      <Button
        title="Transform App"
        onPress={() => navigation.navigate('Transform')}
      />
      <Button
        title="PanResponder App"
        onPress={() => navigation.navigate('PanResponder')}
      />
      <Button
        title="Toolbar App"
        onPress={() => navigation.navigate('Toolbar')}
      />
      <Button
        title="BackHandler App"
        onPress={() => navigation.navigate('Backhandler')}
      />
      <Button
        title="PixelRatio App"
        onPress={() => navigation.navigate('PixelRatio')}
      />
    </>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;
