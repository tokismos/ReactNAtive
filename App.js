import React, { useEffect } from 'react';
import LoadingScreen from './screens/authScreens/LoadingScreen'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import authReducer from './store/reducers/auth'
import items from './store/reducers/items'
import consts from './consts/consts';
import * as firebase from 'firebase'
import { composeWithDevTools } from 'redux-devtools-extension';
import { fire } from './helpers/fire';


/*const persistConfig = {
  key: 'root',
  storage:AsyncStorage
}*/



console.disableYellowBox = true;


const rootReducer = combineReducers({

  auth: authReducer,
  items: items

})
//const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
//const persistor = persistStore(store);
export default function App() {

  useEffect(() => {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(consts.conf);}

      

    }, [])

  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
}

