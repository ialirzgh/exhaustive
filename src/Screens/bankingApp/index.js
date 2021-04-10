import React, {useEffect, useRef} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {store} from '../../redux/reducers/custommiddleware';
import {useDispatch, useSelector} from 'react-redux';
import {addingpost, remove, update} from '../../redux/reducers/index';
import {getUsers} from './../../redux/reducers/custommiddleware';
const BankingApp = () => {
  // const dispatcher = useDispatch();
  // const state = useSelector(state => state);
  useEffect(() => {}, []);

  return (
    <View style={style.Container}>
      <Button
        title={'press'}
        onPress={() => {
          store.dispatch(
            // getUsers('https://jsonplaceholder.typicode.com/users/'),
            getUsers('https://httpstat.us/400'),
          );
        }}
      />
      <View style={{margin: 50}}></View>
    </View>
  );
};

export default BankingApp;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
