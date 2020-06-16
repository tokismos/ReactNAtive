import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native'
import * as authActions from '../store/actions/auth'
const Connected = (props) => {

    const dispatch = useDispatch();
    const userID = useSelector(state => state.auth.ID);

    const disconnect = () => {
        console.log('discon');
        dispatch(authActions.logout());
    }


    


    return (
        <View >
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>CONNECTEEED!!!</Text>
            <Text>{userID}</Text>
            <Button title='disconnect' onPress={disconnect} />
        </View>
    )
}

export default Connected

const styles = StyleSheet.create({})
