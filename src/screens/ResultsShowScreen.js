import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput,Image,ScrollView,FlatList} from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen =({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await zomato.get('/restaurant?',{params: {res_id: id}});
        setResult(response.data);
        console.log(response.data);
    };
    useEffect(() =>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }
    return <>
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{uri:result.featured_image}} />
                <Text style={styles.title} >{result.name}</Text>
                <Text style={styles.name}>Average Cost for 2</Text>
                <Text>{result.currency} {result.average_cost_for_two}</Text>
                <Text style={styles.title}>Cuisines</Text>
                <Text>{result.cuisines}</Text>
                <Text style={styles.title}>Timings</Text>
                <Text>{result.timings}</Text>
                <Text style={styles.title}>Highlights</Text>
                <FlatList
                    data = {result.highlights}
                    keyExtractor={it => it}
                    renderItem ={({item}) => {
                        return <Text>{item}</Text>;
                    }}
                />
            </ScrollView>
        </View>
    </>
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    image:{
        width: 'auto',
        height:150,
        borderRadius:5,
        marginVertical:5
    },
    name:{
        fontWeight: 'bold',
        marginTop:5
    },
    title:{
        fontWeight: 'bold',
        fontSize:16,
        color:'blue'
    }
});
export default ResultsShowScreen;