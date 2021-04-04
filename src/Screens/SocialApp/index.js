import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Snackbar} from 'react-native-paper';
import SocialCardView from './../../Components/SocialCardView/index';
import {Colors} from '../../Theme/colors';
import {FlatList} from 'react-native';
import {Posts} from '../../Utils/Api/Fakes';
import SocialCardPostView from './../../Components/SocialCardView/index';

const SocialApp = ({navigation}) => {
  //v                       function section
  const onMostClicked = () => setIsSelected(false);
  const onRecentClicked = () => setIsSelected(true);

  const SocialCardPostViewRenderer = ({item}) => {
    return (
      <SocialCardPostView
        avatar={item.avatar}
        name={item.name}
        post={item.post}
        time={item.time}
        onClicked={e => {
          navigation.navigate('SOCIALAPPPOSTPAGE', {id: item.id});
        }}
      />
    );
  };

  //v                         end of function section

  // v              Variables Section
  const [isSelected, setIsSelected] = useState(false);
  const searchPlaceHolder = 'Search Between Posts ...';
  // v              end of Variables Section

  const HeaderOfFlatListSection = () => (
    <View style={style.WholeContainer}>
      <StatusBar hidden={true} />
      {/* // topBar icon View */}
      <View style={style.TopIcons}>
        <MaterialCommunityIcons
          name={'shape-circle-plus'}
          color={'white'}
          size={27}
        />
        <Entypo name={'dots-two-vertical'} color={'white'} size={27} />
      </View>
      {/* // end of topBar icon View */}
      {/* // title section View */}
      <View style={style.TextsTitleContainer}>
        <Text style={style.TextsTitle}>Find Awesome</Text>
        <Text style={style.TextsTitle}>Photos</Text>
        {/* // title section View */}
        {/* // SearchBar View */}
        <View style={style.SearchBarWrapper}>
          <View style={style.SearchBar}>
            <TextInput
              placeholder={searchPlaceHolder}
              placeholderTextColor={'white'}
            />
            <Ionicons name={'search'} color={'white'} size={26} />
          </View>
        </View>
        {/* // end of  SearchBar View */}

        {/* theListSection */}
      </View>
      <View style={style.ListSection}>
        <View style={style.ListSectionTitles}>
          <TouchableOpacity onPress={onMostClicked}>
            <Text style={style.firstTitle}>MOST POPULAR</Text>
            <View
              style={{
                marginTop: 7,
                backgroundColor: isSelected
                  ? Colors.white
                  : Colors.PrimaryColor,
                width: 135,
                height: 3,
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRecentClicked} style={style.marginLeft}>
            <Text style={style.secondTitle}>RECENT</Text>
            <View
              style={{
                marginLeft: 0,
                marginTop: 7,
                backgroundColor: isSelected
                  ? Colors.PrimaryColor
                  : Colors.white,
                width: 70,
                height: 3,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
      {/* end of theListSection */}
    </View>
  );

  return (
    <View style={{backgroundColor: Colors.white}}>
      <FlatList
        data={Posts}
        ListHeaderComponent={HeaderOfFlatListSection}
        renderItem={SocialCardPostViewRenderer}
        ListFooterComponent={<View style={style.FlatListFooterStyle}></View>}
      />
    </View>
  );
};

export default SocialApp;

const style = StyleSheet.create({
  WholeContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  TopIcons: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },
  TextsTitleContainer: {
    marginTop: 20,
  },
  TextsTitle: {
    fontFamily: 'Roboto-Black',
    paddingLeft: 35,
    // marginTop: 20,
    fontSize: 32,
    color: Colors.white,
    // fontWeight: 'bold',
  },

  SearchBar: {
    width: wp('80%'),

    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginTop: 35,
  },
  ListSection: {
    marginTop: 40,
    backgroundColor: Colors.white,
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  ListSectionTitles: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.white,
    marginTop: hp('4%'),
    marginLeft: 20,
  },
  SearchBarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  underLineSectionFirst: {},
  underLineSectionSecond: {},
  marginLeft: {
    marginLeft: 30,
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  FlatListFooterStyle: {
    marginBottom: 30,
  },
});
