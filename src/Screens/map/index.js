import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';
import ImagePicker from 'react-native-image-crop-picker';
const Map = () => {
  const [image, setImage] = useState();
  return (
    <View style={{flex: 1}}>
      {/* <Button
          title={'press'}
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image);
            });
          }}
        /> */}
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;
