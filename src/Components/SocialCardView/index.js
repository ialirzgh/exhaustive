import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../Theme/colors';

const SocialCardPostView = ({name, avatar, time, post, onClicked}) => {
  // const [isLiked, setIsLiked] = useState(false);

  const onLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={onClicked} style={style.Container}>
      <View style={style.UpperSection}>
        <View style={style.Avatar}>
          <Avatar
            rounded
            source={{
              uri: avatar,
            }}
            style={style.AvatarStyle}
          />
        </View>
        <View style={style.CenerTitle}>
          <Text style={style.textUserTitle}>{name}</Text>
          <Text style={style.postTimeText}>{time}</Text>
        </View>
        <TouchableOpacity style={style.RightSideICon}>
          <Entypo name={'adjust'} size={25} color={Colors.PrimaryColor} />
        </TouchableOpacity>
      </View>
      <View style={style.PostSection}>
        <ImageBackground
          borderRadius={40}
          source={{uri: post}}
          style={style.Post}>
          <TouchableOpacity style={style.forwardContainer}>
            <Entypo name={'share'} size={25} color={Colors.PrimaryColor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onLiked} style={style.likeContainer}>
            <Entypo name={'heart'} size={25} color={'red'} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={style.ExtraElement}></View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  Container: {
    width: wp('100%'),
    height: 350,
    backgroundColor: Colors.white,

    marginLeft: wp('5%'),
    marginTop: 30,
  },
  UpperSection: {
    width: wp('90%'),
    height: 70,
    backgroundColor: Colors.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Avatar: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
    // marginLeft: 5,
    // marginTop: 5,
  },
  CenerTitle: {
    marginLeft: -5,
    flex: 1,
    // marginLeft: 10,
    backgroundColor: Colors.white,
  },
  RightSideICon: {
    backgroundColor: Colors.white,

    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AvatarStyle: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  PostSection: {
    justifyContent: 'space-between',

    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    flex: 1,
  },
  ExtraElement: {
    marginRight: wp('3%'),
    // marginLeft: 13,
    width: 25,
    height: 200,

    backgroundColor: Colors.PrimaryColor,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
  },
  Post: {
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: wp('87%'),
    height: 270,
  },
  likeContainer: {
    marginBottom: 25,
    marginRight: 20,
    width: 40,
    borderRadius: 8,
    height: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forwardContainer: {
    borderRadius: 8,
    marginBottom: 25,
    marginRight: 15,
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUserTitle: {
    color: Colors.PrimaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  postTimeText: {
    fontWeight: 'normal',
    fontSize: 15,
    color: 'grey',
  },
});

export default SocialCardPostView;
