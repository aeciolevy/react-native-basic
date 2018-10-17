import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

const Items = ({data, navigation, occupations}) => {
    
    return(
        <TouchableHighlight  
            onPress={() => navigation.navigate('Details', {data})}>
            <View 
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white', height: 80 }}
                >
                <Image style={{ width: 70, height: 80 }}
                    source={{ uri: data.url }}
                    />
                <Text style={{ fontSize: 18}}> {data.name} </Text>
                
            </View>
        </TouchableHighlight>
    );
         
}

export default Items;
