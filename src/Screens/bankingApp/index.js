import {addListener} from 'npm';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TextInput, FlatList, Image, Alert} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import style from './style';
import {Avatar} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from '@react-native-community/netinfo';
import firestore, {firebase} from '@react-native-firebase/firestore';
const placepicsCollection = firestore().collection('placePics');
const placepostsCollection = firestore().collection('placeposts');
firestore().settings({
  persistence: false,
});
const BankingApp = () => {
  const [piclist, setPicList] = useState([]);

  async function dataReader() {
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
  }, []);
  const pictureLinks = [
    {
      id: 1,
      link:
        'https://i.pinimg.com/originals/ff/eb/f2/ffebf2c3ee5bb38549cefc356e846d48.jpg',
    },

    {
      id: 2,
      link:
        'https://i.pinimg.com/originals/fa/26/59/fa26590f0402303fc28abf125445e7eb.jpg',
    },
    {
      id: 3,
      link:
        'https://i.pinimg.com/originals/ff/eb/f2/ffebf2c3ee5bb38549cefc356e846d48.jpg',
    },

    {
      id: 4,
      link:
        'https://i.pinimg.com/originals/fa/26/59/fa26590f0402303fc28abf125445e7eb.jpg',
    },
  ];

  const postdata = [
    {
      id: 1,
      link:
        'https://i.pinimg.com/originals/ff/eb/f2/ffebf2c3ee5bb38549cefc356e846d48.jpg',
      name: 'Span Italy,tour',
      rate: 4.7,
      price: 233.99,
    },

    {
      name: 'Span Italy,tour',
      rate: 4.7,
      price: 233.99,
      id: 2,
      link:
        'https://i.pinimg.com/originals/fa/26/59/fa26590f0402303fc28abf125445e7eb.jpg',
    },
    {
      name: 'Span Italy,tour',
      rate: 4.7,
      price: 233.99,
      id: 3,
      link:
        'https://i.pinimg.com/originals/ff/eb/f2/ffebf2c3ee5bb38549cefc356e846d48.jpg',
    },

    {
      name: 'Span Italy,tour',
      rate: 4.7,
      price: 233.99,
      id: 4,
      link:
        'https://i.pinimg.com/originals/fa/26/59/fa26590f0402303fc28abf125445e7eb.jpg',
    },
  ];

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
            {/* <FlatList
              horizontal={true}
              data={piclist}
              renderItem={PhotoRenderer}
              keyExtractor={e => e.id}
            /> */}
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
      <View style={style.postContainer}>
        <Image style={style.postpicStyle} source={{uri: item.link}} />
        <View style={style.posttextStylesContainer}>
          <Text style={style.postTextStyle}>{item.name}</Text>
          <Text style={style.postTextStyle}>${item.price}</Text>
          <View style={style.rateContainer}>
            <Text>{item.rate}</Text>
            <MaterialCommunityIcons name="star" color={'orange'} size={14} />
          </View>
        </View>
        <View style={style.likeIconContainer}>
          <MaterialCommunityIcons name="heart" color={'red'} size={30} />
        </View>
      </View>
    );
  }

  NetInfo.addEventListener(networkState => {
    if (!networkState.isConnected) {
      Alert.alert('warning', ' you have likely lost your internet connection', [
        {
          text: 'try to connect',
          onPress: () =>
            networkState.isConnected
              ? Alert.alert('waiting', 'trying to get connection here')
              : Alert.alert('warning', 'no connection found'),
        },
      ]);
    }
  });

  async function firestoreListener() {
    const arr = [];
    firestore()
      .collection('placePics')
      .onSnapshot(doc => {
        doc.docs.map(e => {
          arr.push(e.data());
        }),
          setPicList(arr);
      });
  }

  return (
    <View style={style.Container}>
      <View style={style.postBottomSection}>
        <FlatList
          ListHeaderComponent={HeaderComponents}
          renderItem={postRenderer}
          data={postdata}
          ListFooterComponent={<View style={{marginBottom: 10}}></View>}
        />
      </View>
    </View>
  );
};

export default BankingApp;
