import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Modal,
  Alert,
  Button,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons;
import Ionicons from 'react-native-vector-icons/Ionicons';
import {store} from './../../redux/store/index';
import {Colors} from '../../Theme/colors';
import SocialCardPostView from './../../Components/SocialCardView/index';
import {useSelector, useDispatch} from 'react-redux';

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
  useEffect(() => {
    setList(state);
  }, []);

  //v                         end of function section

  // v              Variables Section
  const [Refresher, setRefresher] = useState(false);
  const [list, setList] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const searchPlaceHolder = 'Search Between Posts ...';
  const [modalVisible, setModalVisible] = useState(false);
  const nameRef = useRef();
  const avatarRef = useRef();
  const postRef = useRef();
  const state = useSelector(state => state.postReducer);
  const dispatcher = useDispatch();
  const [indicatorShown, setIndicatorShown] = useState(false);

  // v              end of Variables Section

  useEffect(() => {
    (nameRef.current = ''), (postRef.current = '');
    avatarRef.current = '';
    setList(state);
    setIndicatorShown(false);
  }, [Refresher]);
  const HeaderOfFlatListSection = () => (
    <View style={style.WholeContainer}>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={style.modalView}>
            <TextInput
              placeholder={'enter your name'}
              onChangeText={e => {
                nameRef.current = e;
              }}
            />
            <TextInput
              placeholder={'enter your avarlink'}
              onChangeText={e => {
                avatarRef.current = e;
              }}
            />
            <TextInput
              placeholder={'enter your postlink'}
              onChangeText={e => {
                postRef.current = e;
              }}
            />
            <TouchableOpacity
              style={{width: 100, height: 25, backgroundColor: 'white'}}
              onPress={() => {
                if (
                  nameRef.current &&
                  avatarRef.current &&
                  postRef.current !== ''
                ) {
                  setIndicatorShown(true);
                  dispatcher({
                    type: 'POST_ADDED',
                    payload: {
                      id: Math.random(),
                      name: nameRef.current,
                      avatar: avatarRef.current,
                      post: postRef.current,
                    },
                  });
                  setRefresher(!Refresher);
                } else {
                  Alert.alert(
                    'fill out the form ',
                    ' in order to add post yoy should fill all the fields',
                  );
                }
              }}>
              {indicatorShown ? (
                <ActivityIndicator
                  size={'large'}
                  color={'red'}
                  animating={indicatorShown}
                />
              ) : (
                <Text>Press me</Text>
              )}
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <StatusBar hidden={true} />
      {/* // topBar icon View */}
      <View style={style.TopIcons}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <MaterialCommunityIcons
            name={'shape-circle-plus'}
            color={'white'}
            size={27}
          />
        </TouchableOpacity>
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
        extraData={Refresher}
        data={list}
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
  modalView: {
    borderRadius: 20,
    // borderWidth: 0.1,
    // elevation: 10,
    borderColor: Colors.PrimaryColorDark,
    marginLeft: wp('15%'),
    marginTop: hp('15%'),
    width: '70%',
    height: '70%',
    backgroundColor: Colors.PrimaryColorLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
