import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

const MapScreen = (props) => {
    const [pickedLocation, setPickedLocation] = useState(props.route.params?.location );

    const pickLocationHandler = (event) => {

        setPickedLocation({
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude

        });

    }

 
    useEffect(() => {
        if(pickedLocation){

            props.navigation.setParams({ location: pickedLocation })
        }
            console.log(props);
         

    }, [pickedLocation])


    const region = {
        latitude: pickedLocation ? pickedLocation.latitude : 34.033333,
        longitude: pickedLocation ? pickedLocation.longitude :-5.000000,
        latitudeDelta: 0.922,
        longitudeDelta: 0.121,
    }


    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} initialRegion={region} onPress={pickLocationHandler}  >
                {pickedLocation && <Marker title='Picked Location' coordinate={pickedLocation} />}
            </MapView>
        </View>
    )
}


export const mapScreenOptions = (navData) => {

    return {
        headerRight: () => <TouchableOpacity onPress={() => navData.navigation.navigate('addScreen', { location: navData.route.params?.location })
        }><Text style={styles.textSave}>Save</Text></TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: '100%'
    },
    headerRight: {
        marginHorizontal: 5
    },
    textSave: {
        fontSize: 16,
        color: 'black',
        marginRight: 10
    }
})

export default MapScreen