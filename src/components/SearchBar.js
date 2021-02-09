import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange ,onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        onEndEditing ={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom:5,
    },
    inputStyle:{
        flex:1,
        fontSize:18,
        padding:10
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});
export default SearchBar;