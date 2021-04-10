import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import BottomTabNavigator from './src/Navigation/tabHandler';
import {store} from './src/redux/reducers/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
