import React from 'react';
import { StyleSheet, Button,  Text, View, FlatList } from 'react-native';
import DetailsScreen from './DetailsScreen';
import Items from '../Items'; 

const data = [
    {name: 'Carlos'},
    {name: 'Harish'}
];

const MainScreen = ({navigation}) => {
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Items navigation={navigation} data={item} />}
            />
        </View>
    )
}

export default MainScreen;


