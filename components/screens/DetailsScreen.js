import React from 'react';
import { StyleSheet, Image,  Text, View } from 'react-native';

const styles = StyleSheet.create({
    image:{
        flex: 1,
        top: 0,
        width: '100%',
        resizeMode: "contain"
    },
});

const DetailsScreen = ({navigation}) => {
    const data = navigation.getParam('data');
    
    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2}}>
                <Image 
                    style={styles.image} 
                    source={{ uri: data.url }}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30}}> {data.name} </Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../imgs/phone.png')} />
                    <Text style={{ fontSize: 14, marginTop: 5 }}> 
                        {data.phone} 
                    </Text>
                </View>
            </View>
      </View>
    );
};

export default DetailsScreen;
