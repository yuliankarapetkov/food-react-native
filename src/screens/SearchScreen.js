import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const searchRestaurants = async () => {
        const { data: { businesses } } = await yelp.get('/search', {
            params: {
                limit: 50,
                term: query,
                location: 'san jose'
            }
        });

        setRestaurants(businesses);
    }

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
