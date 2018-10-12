import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Items = ({data, navigation}) => {
    return(
        <View key={data.name} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80 }}>
            <Text> {data.name} </Text>
            <Button
                style={{ marginLeft: 'auto'}}
                title="Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
         
}

export default Items;
