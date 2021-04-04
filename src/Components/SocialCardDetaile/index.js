import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from './../../Theme/colors';

const SocialCardDetailed = ({url}) => {
  return (
    <View style={style.container}>
      <View style={style.Card}>
        <View style={style.TopContainer}>
          <ImageBackground
            style={[style.TopContainer]}
            source={{
              uri: url,
            }}></ImageBackground>
        </View>
        <View style={style.footer}>
          <Text style={style.titleText}>Nature Collection</Text>
          <Text style={style.footerText}>Loot Patters</Text>
        </View>
      </View>
      <View style={style.Division}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100%'),
    height: 255,
    backgroundColor: Colors.PrimaryColor,

    marginLeft: wp('5%'),
    marginTop: 30,
  },
  Card: {
    borderRadius: 40,
    marginLeft: 20,
    width: wp('80%'),
    height: 255,

    backgroundColor: 'red',
    alignItems: 'center',
  },
  Division: {
    marginRight: wp('3%'),
    // marginLeft: 13,
    marginTop: 27.5,
    width: 25,
    height: 200,

    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  TopContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    width: wp('80%'),
    height: 170,
    backgroundColor: Colors.white,
  },
  footer: {
    // marginTop: 20,
    width: wp('80%'),
    height: 85,
    justifyContent: 'center',
    paddingLeft: 30,
    backgroundColor: '#aeaeae',
    opacity: 0.8,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  footerText: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
});

export default SocialCardDetailed;
