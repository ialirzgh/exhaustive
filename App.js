import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabHandler';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import SQLite from 'react-native-sqlite-2';
const App = () => {
  useEffect(() => {
    const db = SQLite.openDatabase('test.db', '1.0', '', 1);
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS Users', []);
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))',
        [],
      );
      txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
      txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
      txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
      });
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate persistor={persistor}>
          <BottomTabNavigator />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
