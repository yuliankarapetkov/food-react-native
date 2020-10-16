import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchRestaurants, restaurants] = useRestaurants();

    return (
        <View>
            <SearchBar
                query={query}
                onChange={value => setQuery(value)}
                onSubmit={searchRestaurants}
            />
            <Text>{query.length ? `Search for '${query}'..` : 'Type in something to start searching'}</Text>
            <Text>We have found {restaurants.length} that match your search.</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
