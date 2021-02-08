import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    return <View>
        <SearchBar 
        term={term} 
        onTermChange=  {newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log("hoooooooe")} 
        />
        <Text>SearchScreen</Text>
        <Text>{term}</Text>
    </View>
};

const styles = StyleSheet.create({});
export default SearchScreen;