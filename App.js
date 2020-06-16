import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import LoadingScreen from './screens/LoadingScreen'
import {Provider,useDispatch} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import * as authActions from './store/actions/auth'

import { composeWithDevTools } from 'redux-devtools-extension';




const rootReducer=combineReducers({

    auth:authReducer,

})

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));

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
