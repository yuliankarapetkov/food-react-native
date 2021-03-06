import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ query, onChange, onSubmit }) => {
    return (
        <View style={styles.searchBar}>
            <Feather 
                name="search" 
                style={styles.icon}
            />
            
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.input}
                value={query}
                onChangeText={onChange}
                onEndEditing={onSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#f0aaaa',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 15,
    }
});

export default SearchBar;
