import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.screenContainer}>
            <View>
                <Text style={styles.title}>TITLE: {props.title}</Text>
                </View>

            <View style={styles.descriptionContainer}>
                <Text>Adresse: {props.adresse}</Text>
                <Text style={styles.prix}>Prix {props.prix}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    screenContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        margin:10

    },
    titleContainer: {
        borderWidth: 1,


    },
    title:{
        fontWeight:'bold',
        fontSize:22
    },
    descriptionContainer:{
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    prix:{
        fontSize:25,
        color:'red',
        fontWeight:'bold'
    },
})
