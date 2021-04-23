import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabHandler';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import SQLite from 'react-native-sqlite-2';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';
const App = () => {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      // process the notification

      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });

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
        // for (let i = 0; i < res.rows.length; ++i) {
        //   console.log('item:', res.rows.item(i));
        // }
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
