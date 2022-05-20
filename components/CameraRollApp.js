import React, { useState } from 'react'
import CameraRoll from '@react-native-community/cameraroll'
import { PermissionsAndroid, Platform, View, Button, ScrollView, Image} from 'react-native'

const [state,setState] = useState({photos})

async function hasAndroidPermission(){
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if(hasPermission){
        return true;
    }

    const status = await PermissionsAndroid.request(permission)
    return status === "granted"
}

// async function savePicture(){
//     if(Platform.OS === "android" && !(await hasAndroidPermission())){
//         return
//     }
//     CameraRoll.save(tag, {type, album})
// }

const handleButtonPress = () => {
    if(Platform.OS === "android" && !(hasAndroidPermission())){
        return
    }
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
         console.log(err);
      });
    };

const CameraRollApp = () => {
    
  return (
    <View>
     <Button title="Load Images" onPress={handleButtonPress} />
     <ScrollView>
       {state.photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}
     </ScrollView>
   </View>
  )
}

export default CameraRollApp