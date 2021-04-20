import {addListener} from 'npm';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TextInput, FlatList, Image, Alert} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import style from './style';
import {Avatar} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
const placepicsCollection = firestore().collection('placePics');
const placepostsCollection = firestore().collection('placeposts');
import * as CONSTS from './../../Constants/PageRoutes';
firestore().settings({
  persistence: false,
});
const BankingApp = ({navigation}) => {
  const [piclist, setPicList] = useState([]);
  const [piclist2, setPicList2] = useState([]);

  async function dataReader() {
    const arr = [];
    placepicsCollection.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        arr.push(documentSnapshot.data());
      });
      setPicList(arr);
    });
  }
  async function dataReader2() {
    const arr = [];
    placepicsCollection.get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        arr.push(documentSnapshot.data());
      });
      setPicList(arr);
    });
  }

  useEffect(() => {
    dataReader();
    firestoreListener();
    firestoreListener2();
    dataReader2();
  }, []);

  function PhotoRenderer({item}) {
    return <Image style={style.photoStyle} source={{uri: item.link}} />;
  }

  function HeaderComponents() {
    return (
      <View>
        <View style={style.topSection}>
          <View style={style.topSectionLeftSide}>
            <Text style={style.topText}>Where do</Text>
            <Text style={style.topText}>you want to go ?</Text>
          </View>
          <View style={style.topSectionRightSide}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://images.mubicdn.net/images/cast_member/739935/cache-517914-1582955883/image-w856.jpg?size=800x',
              }}
              style={style.AvatarStyle}
            />
          </View>
        </View>

        <View style={style.seatchSection}>
          <View style={style.input}>
            <TextInput placeholder={'Any place in mind ?'} />
          </View>
          <View style={style.icon}>
            <MaterialCommunityIcons
              name="microphone"
              color={'black'}
              size={30}
            />
          </View>
        </View>
        <View style={style.picSection}>
          <View style={style.picTopSection}>
            <Text style={style.picTitle}>Favorite in Malang</Text>
          </View>
          <View style={style.picBottomSection}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={piclist}
              renderItem={PhotoRenderer}
              keyExtractor={e => e.id}
            />
          </View>
        </View>
        <View style={style.postSection}>
          <View style={style.postTopSection}>
            <Text style={style.picTitle}>Popular place</Text>
          </View>
        </View>
      </View>
    );
  }
  function postRenderer({item}) {
    return (
      <TouchableOpacity
        style={style.postContainer}
        onPress={() => {
          navigation.navigate(CONSTS.BankingAppPostPage, {item});
        }}>
        <Image style={style.postpicStyle} source={{uri: item.link}} />
        <View style={style.posttextStylesContainer}>
          <Text style={style.postTextStyle}>{item.title}</Text>
          <Text style={style.postTextStyle}>${item.price}</Text>
          <View style={style.rateContainer}>
            <Text>{item.star}</Text>
            <MaterialCommunityIcons name="star" color={'orange'} size={14} />
          </View>
        </View>
        <View style={style.likeIconContainer}>
          <MaterialCommunityIcons name="heart" color={'red'} size={25} />
        </View>
      </TouchableOpacity>
    );
  }

  NetInfo.addEventListener(networkState => {
    if (!networkState.isConnected) {
      Alert.alert('warning', ' you have likely lost your internet connection', [
        {
          text: 'try to connect',
        },
      ]);
    }
  });

  async function firestoreListener() {
    var arr = [];
    firestore()
      .collection('placePics')
      .onSnapshot(doc => {
        doc.docs.map(e => {
          arr.push(e.data());
        }),
          setPicList(arr);
        arr = [];
      });
  }

  async function firestoreListener2() {
    var arr = [];
    firestore()
      .collection('placeposts')
      .onSnapshot(doc => {
        doc.docs.map(e => {
          arr.push(e.data());
        }),
          setPicList2(arr);
        arr = [];
      });
  }

  return (
    <View style={style.Container}>
      <View style={style.postBottomSection}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={HeaderComponents}
          renderItem={postRenderer}
          data={piclist2}
          ListFooterComponent={<View style={{marginBottom: 10}}></View>}
        />
      </View>
    </View>
  );
};

export default BankingApp;
