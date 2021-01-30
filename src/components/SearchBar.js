import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" size={30} />
        <TextInput style={styles.inputStyle} placeholder="Search" />
        <Text>helo</Text>
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 6,
        marginHorizontal: 17,
        flexDirection: "row",
    },
    inputStyle:{
        borderColor :'black',
        borderWidth: 1,
        flex:1,
        fontSize:18,  
    }
});
export default SearchBar;