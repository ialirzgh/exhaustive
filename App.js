import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/tabHandler';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
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
