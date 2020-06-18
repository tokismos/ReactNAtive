import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screens/authScreens/LoadingScreen'
import { Provider, useDispatch } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import items from './store/reducers/items'
import * as authActions from './store/actions/auth'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'

import { composeWithDevTools } from 'redux-devtools-extension';

/*const persistConfig = {
  key: 'root',
  storage:AsyncStorage
}*/


//console.disableYellowBox = true;


const rootReducer = combineReducers({

  auth: authReducer,
  items: items

})
//const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
//const persistor = persistStore(store);
export default function App() {


  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
