import Maison from "../../models/maison";
import * as firebase from 'firebase'
export const ADD_ITEM = 'ADD_item';
export const FETCH_ITEMS = 'FETCH_ITEMS';
import { getTime } from '../../helpers/time'
import { useState } from "react";
import 'firebase/firestore';
import { Alert } from "react-native";

export const addItem = (ville, adresse, image, prix) => {
    return async (dispatch, getState) => {
        const ID = getState().auth.ID;
        console.log(ID);
        const time = await getTime();

        await firebase.firestore()
            .collection(`items`)
            .add({
                ville,
                ownerID: ID,
                adresse,
                image,
                prix,
                time
            })
            .then((data) => {

                Alert.alert('Success', `User Added :${data.id}`, [{ text: 'Okkay' }])
            });



        /* const response = await fetch(`https://reacttest-ed503.firebaseio.com/items/${ID}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ville,
                adresse,
                image,
                prix,
                time

            })
        }
        );
        const resData = await response.json(); */





    }

}
export const fetchMaisons = () => {
    return async (dispatch, getState) => {
        let loadedMaisons = [];
        const ID = getState().auth.ID;

        await firebase.firestore()
            .collection('items').orderBy("time", "desc").get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {

                    loadedMaisons.push(new Maison(
                        documentSnapshot.id,
                        ID,
                        documentSnapshot.data().ville,
                        documentSnapshot.data().adresse,
                        documentSnapshot.data().image,
                        documentSnapshot.data().prix,
                        documentSnapshot.data().time
                    ));

                });
                console.log('User ID: ', loadedMaisons);
            });


        dispatch({ type: FETCH_ITEMS, items: loadedMaisons });
    }

    
};
export const fetchMaisonsWithVilles = (ville) => {
    return async (dispatch, getState) => {
        let loadedMaisons = [];
        const ID = getState().auth.ID;

        await firebase.firestore()
            .collection('items').where("ville", "==", ville).orderBy("time", "desc").get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {

                    loadedMaisons.push(new Maison(
                        documentSnapshot.id,
                        ID,
                        documentSnapshot.data().ville,
                        documentSnapshot.data().adresse,
                        documentSnapshot.data().image,
                        documentSnapshot.data().prix,
                        documentSnapshot.data().time
                    ));

                });
                console.log('User ID: ', loadedMaisons);
            });


        dispatch({ type: FETCH_ITEMS, items: loadedMaisons });
    }


};
