import React, {useEffect, useState} from 'react';
import {Text, Image, View, ImageBackground, StyleSheet} from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fonts} from 'react-native-elements/dist/config';

const BankingPostPage = props => {
  const postid = props.route.params.item.id;
  const item = props.route.params.item;
  const starLength = Math.floor(item.star);

  const [postDetail, setPostDetail] = useState({});
  async function GettingData() {
    const b = await Firestore()
      .collection('placedetails')
      .where('id', '==', postid)
      .get();
    setPostDetail(b.docs[0].data());
  }
  useEffect(() => {
    GettingData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image style={style.Container} source={{uri: item.link}} />
      <View
        style={{
          position: 'absolute',

          width: '100%',
          height: '100%',
        }}>
        <View style={style.topTitles}>
          <Text style={style.texttitle}>{item.title}</Text>
          <Text style={style.texttitle}>{postDetail.flight}</Text>
        </View>
        <View style={style.starSection}>
          <Text>{item.star}</Text>
          {Array.from(Array(starLength)).map((x, index) => (
            <MaterialCommunityIcons
              key={index}
              name="star"
              color={'orange'}
              size={14}
            />
          ))}
        </View>
        <View style={style.flightSection}>
          <Text style={style.flightQuoteStyle}>Flight:</Text>
          <Text style={style.airlineTextStyle}>{postDetail.flight}</Text>
        </View>
        <View style={style.freeSpace}></View>
        <View style={style.bottomSection}>
          <View style={style.bottoomUpperSection}>
            <View style={style.left}>
              <Text style={style.smallcomText}>Travel coasts</Text>
              <Text style={style.smallcomText2}>${item.price}</Text>
            </View>
            <View style={style.center}>
              <Text style={style.smallcomText}>Flight time</Text>
              <Text style={style.smallcomText2}>{postDetail.flighttime}</Text>
            </View>
            <View style={style.right}>
              <Text style={style.smallcomText}>Few days</Text>
              <Text style={style.smallcomText2}>{postDetail.fewdays}</Text>
            </View>
          </View>
          <View style={style.bottomBottomSection}>
            <View style={style.shop}>
              <MaterialCommunityIcons name="basket" color={'white'} size={25} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BankingPostPage;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    opacity: 0.27,
  },
  topTitles: {
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 50,
    width: '100%',
    height: 80,
  },
  texttitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  starSection: {
    paddingLeft: 20,

    width: '100%',
    height: 20,
    flexDirection: 'row',
  },
  flightSection: {
    marginTop: 10,
    paddingLeft: 20,
    width: '100%',
    height: 60,
  },
  flightQuoteStyle: {
    color: 'grey',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: -2,
  },
  airlineTextStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  freeSpace: {
    flexGrow: 1,
  },
  bottomSection: {
    width: '100%',
    height: 150,
  },
  bottoomUpperSection: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
  },
  bottomBottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    borderRightWidth: 0.3,
    borderRightColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRightWidth: 0.3,
    borderRightColor: 'white',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    borderRightColor: 'white',
  },
  smallcomText: {
    color: 'grey',
    fontSize: 14,
  },
  smallcomText2: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  shop: {
    width: 75,
    height: 55,
    borderRadius: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
