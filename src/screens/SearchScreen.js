import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet , ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar.js'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const[term, setTerm]= useState('');
    const[searchApi, results, errorMessage]= useResults();


    const filterResultsByPrice = (price) => {
     //This function will filter result based on price ($ or $$ or $$$)
        return results.filter(result => {
            return result.price === price;
        });
    };
   

return (
    <>
        <SearchBar
         term={term} 
         onTermChange={setTerm}
         onTermSubmit={()=> searchApi(term)}
           />
        { errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ScrollView>

        <ResultsList 
        results= {filterResultsByPrice("$")} 
        title="Cost Effective"
        
        />
        <ResultsList 
        results= {filterResultsByPrice("$$")} 
        title="Bit Pricier"
        
        />
        <ResultsList 
        results= {filterResultsByPrice("$$$")}
        title="Luxurious "
        
        />

        <ResultsList 
        results= {filterResultsByPrice("$$$$")}
        title="Big Spender !"
        
        />
        </ScrollView>
    </>
);
};

const styles = StyleSheet.create({});

export default SearchScreen;