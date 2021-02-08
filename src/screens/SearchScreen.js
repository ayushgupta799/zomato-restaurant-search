import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi , results, errorMessage] = useResults();

    return <View>
        <SearchBar 
            term={term} 
            onTermChange=  {setTerm}
            onTermSubmit={() => searchApi(term)} 
        />
        {errorMessage ? <Text>{errorMessage}</Text>: null}
        <Text>We have found {results.length} results</Text>
        <ResultsList title="Oh you just want food"/>
        <ResultsList title="you got some taste now"/>
        <ResultsList title="someone knows what to buy with money"/>
    </View>
};

const styles = StyleSheet.create({});
export default SearchScreen;