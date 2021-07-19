import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
return (
    <View style = {styles.backgroundStyle}>
        <Feather name= "search" style={styles.iconStyle}/>
        <TextInput 
        style={styles.inputStyle}
        placeholder="Search"
      
        
        autoCapitalize='none'
        autoCorrect={false} 

        value={term}
      
        onChangeText={onTermChange}

        onEndEditing={onTermSubmit}

        
        
        />
    </View>
);
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor : '#D3D3D3',
        marginTop:15,
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle : {

        flex:1 ,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15
    }
});

export default SearchBar;