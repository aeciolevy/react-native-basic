import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button,  Text, View, FlatList } from 'react-native';
import occupations from '../../redux/modules/occupations';
import Items from '../Items'; 

const data = [
    {name: 'Carlos'},
    {name: 'Harish'}
];

class MainScreen extends React.Component {
    componentDidMount() {
        this.props.fetchOccupation();
    }

    render() {
        const { navigation, occupations, isLoading } = this.props;
        
        return(
            <View>
                {isLoading && <Text> Loading... </Text>}
                <FlatList
                    data={occupations.map(el => ({...el, key: el.id}))}
                    renderItem={({item}) => <Items  navigation={navigation} data={item} />}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: occupations.selectors.isLoading(state),
    occupations: occupations.selectors.getOccupations(state),
});

export default connect(mapStateToProps, {
    fetchOccupation: occupations.actionCreators.fetchingOccupations
})(MainScreen);


