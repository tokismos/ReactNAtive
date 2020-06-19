import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/Card'
import * as itemsActions from '../../store/actions/items'
import dateFormat from 'dateformat';




const ListScreen = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.items.items);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);


    const loadItems=async()=>{

        setIsRefreshing(true);
        await dispatch(itemsActions.fetchMaisons());
        setIsLoading(false);
        setIsRefreshing(false);


    }

    useEffect(() => {
        setIsLoading(true);
        loadItems();
    }, [])

   


    return (
        <View style={{ flex: 1 }}>

            <Text> hi </Text>
            {isLoading ? <ActivityIndicator style={{ flex: 1 }} size='large' /> :
                <FlatList
                    refreshControl={
                        <RefreshControl
                            //refresh control used for the Pull to Refresh
                            refreshing={isRefreshing}
                            onRefresh={() => loadItems()} />}

                    data={data}
                    keyExtractor={item => item.ID}
                    renderItem={({ item }) =>
                        <Card title={item.ville}
                            adresse={item.adresse}
                            time={item.time}
                    prix={item.prix} />} />
                    
       
                    }
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({})
