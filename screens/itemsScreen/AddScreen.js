import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Keyboard, KeyboardAvoidingView } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import * as itemsActions from '../../store/actions/items'
import { useDispatch } from 'react-redux'

const AddScreen = () => {
    const [ville, setVille] = useState('Fes');
    const [adresse, setAdresse] = useState('Hay Azhar');
    const [image, setImage] = useState('http.//image.com');
    const [prix, setPrix] = useState('560 DH');

    const dispatch=useDispatch();

    const add = () => {
        dispatch(itemsActions.addItem(ville,adresse,image,prix));
        console.log('dispatch succesful');
        
    }
    return (
        <KeyboardAvoidingView

            style={styles.screen}
        >
            <ScrollView >
                <View style={styles.screenContainer}>
                    <Text style={styles.text}>Ville</Text>
                    <View style={styles.inputText}><TextInput value={ville} onChangeText={(text) => { setVille(text) }} /></View>
                    <Text style={styles.text}>Adresse</Text>
                    <View style={styles.inputText}><TextInput value={adresse} onChangeText={(text) => { setAdresse(text) }} /></View>
                    <Text style={styles.text}>Image</Text>
                    <View style={styles.inputText}><TextInput value={image} onChangeText={(text) => { setImage(text) }} /></View>
                    <Text style={styles.text}>Prix</Text>
                    <View style={styles.inputText}><TextInput value={prix} onChangeText={(text) => { setPrix(text) }} /></View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={add} />
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        margin: 3,
        padding: 5,

    },
    screen: {
        justifyContent: 'center',
        flex: 1
    },
    screenContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        margin: 20,
    },
    button: {
        alignItems: 'center'
    }

})
