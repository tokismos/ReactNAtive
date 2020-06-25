import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import consts from '../consts/consts'


const MapPreview = (props) => {

if(!props.location){
    
    return (props.children)
}    
    const mapUrl=`https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}&zoom=17&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.latitude},${props.location.longitude}&key=${consts.googleImageApi}`
    return (
        <TouchableOpacity onPress={props.onPress} >
            <Image source={{uri:mapUrl}} style={{height:200,width:'100%'}} />
        </TouchableOpacity>
    )
}

export default MapPreview

const styles = StyleSheet.create({})
