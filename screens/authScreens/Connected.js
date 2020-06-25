import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native'
import * as authActions from '../../store/actions/auth'
import * as firebase from 'firebase'
const Connected = (props) => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.ID);

    const disconnect = () => {
        firebase.auth()
        .signOut()
        .then(() => {
            console.log('User signed out!');

        dispatch(authActions.logout())}
        );
    }

    const Add=()=>{
        props.navigation.navigate('addScreen');

    }


    return (
        <View style={styles.screen}>
            <View style={styles.screenContainer}>
                <View style={styles.textContainer}><Text>Welcome :     {userId}</Text></View>
              <View style={styles.Button}><Button title='Add' onPress={Add} /></View> 
              <View style={styles.Button}><Button title='disconnect' onPress={disconnect} /></View> 
            </View>
        </View>
    )
}

export default Connected

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1

    },
    screenContainer: {
        borderWidth: 1,
        height:200,
        borderRadius:40,
        padding:20,
        backgroundColor:'white'
    },
    Button:{
        marginVertical:5,
        flex:1
    },
    textContainer:{
        flex:2
    }

})
