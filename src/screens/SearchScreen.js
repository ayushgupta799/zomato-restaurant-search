import React, {useState, useEffect} from 'react';
import {Text, ScrollView ,StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi , results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.restaurant.price_range === price;
        });
    };

    return <>
        <SearchBar 
            term={term} 
            onTermChange=  {setTerm}
            onTermSubmit={searchApi(term)} 
        />
        {errorMessage ? <Text>{errorMessage}</Text>: null}
        <Text style= {styles.text} >We have found {results.length} results</Text>
        <ScrollView style={styles.scroll} >
            <ResultsList  results={filterResultByPrice(1)} title="Oh you just want food"/>
            <ResultsList  results={filterResultByPrice(2)} title="you got some taste now"/>
            <ResultsList results={filterResultByPrice(3)} title="knows elite"/>
            <ResultsList results={filterResultByPrice(4)} title="someone knows what to buy with money"/>
        </ScrollView>
    </>
}; 

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize:20,
        padding: 10
    },
    scroll:{
        marginHorizontal:10,
        borderRadius:5,
        backgroundColor:'#C0C0C0'
    }
});
export default SearchScreen;