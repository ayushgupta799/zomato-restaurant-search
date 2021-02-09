import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:result.thumb}} style={styles.image}/>
            <Text style={styles.name} >{result.name}</Text>
            <Text>
                {result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft:15
    },
    image:{
        width:250,
        height:120,
        borderRadius:5,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    }
});

export default ResultsDetail;