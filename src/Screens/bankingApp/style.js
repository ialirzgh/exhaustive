import {StyleSheet} from 'react-native';
import {Colors} from './../../Theme/colors';
const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topSection: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
  },
  topSectionLeftSide: {
    justifyContent: 'center',
    marginLeft: 20,
    height: 100,
    backgroundColor: Colors.white,
  },
  topSectionRightSide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: Colors.white,
    marginRight: 10,
  },
  seatchSection: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: '5%',
    borderRadius: 10,
    borderWidth: 1,

    borderColor: 'grey',
    width: '90%',
    height: 50,
    backgroundColor: Colors.white,
  },
  input: {
    borderRadius: 10,
    flex: 1,
    padding: 5,
    backgroundColor: Colors.white,
  },
  icon: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,

    backgroundColor: Colors.white,
  },
  picSection: {
    marginTop: 20,
    marginLeft: '4%',
    width: '92%',
    height: 265,
    backgroundColor: 'white',
  },
  picTopSection: {
    height: 30,
    backgroundColor: Colors.white,
  },
  picBottomSection: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  postSection: {
    marginTop: 20,
    marginLeft: '4%',
    width: '92%',

    backgroundColor: 'white',
  },
  postTopSection: {
    marginTop: -10,
    height: 30,
    backgroundColor: Colors.white,
  },
  postBottomSection: {},
  topText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  AvatarStyle: {
    width: 55,
    height: 55,
  },
  picTitle: {
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
  },
  photoStyle: {
    backgroundColor: Colors.white,
    width: 160,
    height: 210,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  postpicStyle: {
    backgroundColor: Colors.white,
    width: 90,
    height: 90,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 10,
    // margin,
  },
  postContainer: {
    flexDirection: 'row',
    width: '92%',
    height: 100,
    marginLeft: '4%',
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
  },
  posttextStylesContainer: {
    paddingLeft: 3,
    marginLeft: 5,
    flexGrow: 1,
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: 10,

    paddingTop: 7,
  },
  likeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 100,
    backgroundColor: Colors.white,

    borderRadius: 10,
  },
  postTextStyle: {
    paddingTop: 2,
    fontWeight: 'bold',
    fontSize: 15,
  },
  rateContainer: {
    paddingTop: 6,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default style;
