import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Keyboard, KeyboardAvoidingView, Alert } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import * as itemsActions from '../../store/actions/items'
import { useDispatch, useSelector } from 'react-redux'
import * as firebase from 'firebase'
import 'firebase/firestore';
import { getTime } from '../../helpers/time'
import MapPreview from '../../components/MapPreview'

const AddScreen = (props) => {
    const ID = useSelector(state => state.auth.ID);

    const [ville, setVille] = useState('Fes');
    const [adresse, setAdresse] = useState('Hay Azhar');
    const [image, setImage] = useState('http.//image.com');
    const [prix, setPrix] = useState('560 DH');
    const location = props.route.params?.location;

    console.log('looc', location);


    const add = async (ville, adresse, image, prix,location) => {

        const time = await getTime();
        await firebase.firestore()
            .collection(`items`).add({
                ville,
                ownerID: ID,
                adresse,
                image,
                prix,
                time,
                location
            }).then((data) => {

                Alert.alert('Success', `User Added :${data.id}`, [{ text: 'Okkay' }])
            });




    }
const pressImageHandler=()=>{

    props.navigation.navigate('Map',{location})

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
                    <View style={styles.container}>
                        <MapPreview location={location} onPress={pressImageHandler}>
                          <View style={{alignItems:'center'}}><Text >No location choosed..</Text></View>
                        </MapPreview>
                    </View>
                    {location ? <Text>Vos coordonnées :{location.latitude}////{location.longitude}</Text> :<Text>there s nothing</Text>}
                    <View style={styles.button}>
                        <Button title='ADD' onPress={add.bind(this, ville, adresse, image, prix,location)} />
                        <Button title='Choose location' onPress={() => { props.navigation.navigate('Map') }} />

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
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
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
