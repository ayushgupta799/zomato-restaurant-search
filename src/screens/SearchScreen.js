import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
// import zomato from "../api/zomato";
import useResults from '../hooks/useResults';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // const [results, setResults] = useState([]);
    
    // const searchApi = async () => {
    //     const response = await yelp.get('/search',{
    //         params:{
    //             count:5,
    //             q : term,
    //             location : 'noida'
    //         }
    //     });
    // };

    const [searchApi , results, errorMessage] = useResults();

    return <View>
        <SearchBar 
            term={term} 
            onTermChange=  {setTerm}
            onTermSubmit={() => searchApi(term)} 
        />
        <Text>SearchScreen</Text>
        {errorMessage ? <Text>{errorMessage}</Text>: null}
        <Text>We have found {results.length} results</Text>
    </View>
};

const styles = StyleSheet.create({});
export default SearchScreen;