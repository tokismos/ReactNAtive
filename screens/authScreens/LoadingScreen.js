import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator } from 'react-native'
import { MainNavigator, ConnectedNavigator, TabNavigator } from '../../navigation/Navigator'
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth'

const LoadingScreen = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    let isLoged = useSelector(state => state.auth.isLoged);

    const getKeyfromStorage = async () => {
        const key = await AsyncStorage.getItem('userID');
        if(key){
            
            dispatch(authActions.autoLogin(key));
        }

    }
       useEffect(()=>{
        getKeyfromStorage();
    },[]) 
    

    setTimeout(() => {
        setIsLoading(false);
    }, 500);


    return (

        !isLoading ? (isLoged ? <TabNavigator /> : <MainNavigator />) : (<ActivityIndicator style={styles.loading} size='large' />)
        

    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
