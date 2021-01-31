import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return <View>
        <SearchBar 
        term={term} 
        onTermChange ={newTerm => {
            return setTerm(newTerm);
        }}
        />
        <Text>{term}</Text>
    </View>
};

const styles = StyleSheet.create({});
export default SearchScreen;