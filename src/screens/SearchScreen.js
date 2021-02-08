import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    
    const searchApi = async () => {
        const response = await yelp.get('/search',{
            params:{
                limit:5,
                term,
                location : 'noida'
            }
        });
    };

    return <View>
        <SearchBar 
        term={term} 
        onTermChange=  {setTerm}
        onTermSubmit={searchApi} 
        />
        <Text>SearchScreen</Text>
        <Text>We have found {results.length} results</Text>
    </View>
};

const styles = StyleSheet.create({});
export default SearchScreen;