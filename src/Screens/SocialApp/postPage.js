import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Posts} from './../../Utils/Api/Fakes/index';
import {Colors} from './../../Theme/colors';
import {Avatar} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SocialCardDetailed from '../../Components/SocialCardDetaile';
const SocialAppPostPage = props => {
  const onMostClicked = () => setIsSelected(false);
  const onRecentClicked = () => setIsSelected(true);
  const [isSelected, setIsSelected] = useState(false);
  const TitleWithFooterComponent = ({Info, text}) => {
    return (
      <View
        style={{
          width: 110,
          height: 70,
          backgroundColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={style.title2}>{Info}</Text>
        <Text style={style.location2}>{text}</Text>
      </View>
    );
  };

  const PostDetail = Posts[props.route.params.id - 1];

  return (
    <View style={style.WholeContainer}>
      <View style={style.TopContainer}>
        <View style={style.TopIconView}>
          {/* <MaterialCommunityIcons
            name={'dots-two-vertical'}
            color={Colors.PrimaryColor}
            size={27}
            style={style.marginICon1}
          />
          <Entypo
            name={'dots-two-vertical'}
            color={Colors.PrimaryColor}
            size={27}
          /> */}
        </View>
        <View style={style.AvatarSection}>
          <Avatar
            rounded
            source={{
              uri: PostDetail.avatar,
            }}
            style={style.AvatarStyle}
          />
        </View>
        <View style={style.CharDes}>
          <Text style={style.title}>{PostDetail.name}</Text>
          <Text style={style.location}>{PostDetail.loc}</Text>
        </View>
        <View style={style.PageStatus}>
          <TitleWithFooterComponent
            Info={PostDetail.photocount}
            text={'Post'}
          />
          <TitleWithFooterComponent
            Info={PostDetail.fallowers}
            text={'Fallowers'}
          />

          <TitleWithFooterComponent
            Info={PostDetail.fallows}
            text={'Fallows'}
          />
        </View>
      </View>
      <View style={style.LowerContainer}>
        <View style={style.listSectionTitles}>
          <View style={style.ListSectionTitles}>
            <TouchableOpacity onPress={onMostClicked}>
              <Text style={style.firstTitle}>COLLECTIONS</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 28,

                  marginTop: 7,
                  backgroundColor: isSelected
                    ? Colors.PrimaryColor
                    : Colors.white,
                  width: 120,
                  height: 3,
                }}></View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onRecentClicked}
              style={style.marginLeft}>
              <Text style={style.firstTitle}>FEATURED</Text>
              <View
                style={{
                  marginLeft: 28,
                  marginTop: 7,
                  backgroundColor: isSelected
                    ? Colors.white
                    : Colors.PrimaryColor,
                  width: 90,
                  height: 3,
                }}></View>
            </TouchableOpacity>
          </View>
        </View>
        <SocialCardDetailed url={PostDetail.post} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  WholeContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  TopContainer: {
    width: wp('100%'),
    height: 400,
    backgroundColor: Colors.white,
    borderBottomEndRadius: 55,
    borderBottomStartRadius: 55,
  },
  LowerContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  TopIconView: {
    width: wp('100%'),
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  AvatarSection: {
    width: wp('100%'),
    height: 130,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AvatarStyle: {
    width: 115,
    height: 115,
    resizeMode: 'contain',
  },
  CharDes: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: wp('100%'),
    height: 65,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: '',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PrimaryColor,
  },
  location: {
    marginTop: -2,
    fontSize: 16,
    fontWeight: 'normal',
    color: 'grey',
  },
  PageStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: wp('100%'),
    height: 95,
    backgroundColor: Colors.white,
  },
  title2: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors.PrimaryColor,
  },
  location2: {
    marginTop: -2,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey',
  },
  ListSectionTitles: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.PrimaryColor,
    marginTop: hp('4%'),
    marginLeft: 20,
  },
  firstTitle: {
    marginLeft: 28,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SocialAppPostPage;
