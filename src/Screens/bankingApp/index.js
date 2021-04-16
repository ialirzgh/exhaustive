import React, {useEffect, useRef} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const BankingApp = () => {
  useEffect(() => {
    store.dispatch({
      type: 'POST_ADDED',
      payload: {
        id: 4,
        name: 'ali',
      },
    });
  }, []);

  return (
    <View style={style.Container}>
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
