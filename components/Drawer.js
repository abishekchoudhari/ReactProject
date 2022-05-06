import React, {useRef, useState} from 'react';
import {Button, Text, View, SafeAreaView} from 'react-native';
//import DrawerLayout from 'react-native-drawer-layout';

const Drawer = () => {
  const drawer = useRef(null);

  const [drawerPosition, setDrawerPosition] = useState('left');
  const navigationView = () => (
    <View>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
      <Button title="Home" color="gainsboro"></Button>
      <Button title="User Job" color="gainsboro"></Button>
      <Button title="Logout" color="gainsboro"></Button>
    </View>
  );

  return (
    <DrawerLayout
      drawerBackgroundColor="white"
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayout>
  );
};

export default Drawer;
