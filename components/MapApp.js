import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class MapApp extends Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        key="AIzaSyBQCk4uc84AeVnJw0Dj577vEfQIpPY1MG8"
      />
    );
  }
}
