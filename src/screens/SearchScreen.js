import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import Restaurants from '../components/Restaurants'

import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchRestaurants, restaurants] = useRestaurants();

    const filterRestaurantsByPrice = price => restaurants.filter(r => r.price === price)

    return (
        <>
            <SearchBar
                query={query}
                onChange={value => setQuery(value)}
                onSubmit={searchRestaurants}
            />
            <Text>{query.length ? `Search for '${query}'..` : 'Type in something to start searching'}</Text>
            <Text>We have found {restaurants.length} that match your search.</Text>

            <ScrollView>
                <Restaurants restaurants={filterRestaurantsByPrice('$')} title="Cost Effective" />
                <Restaurants restaurants={filterRestaurantsByPrice('$$')} title="Bit Pricier" />
                <Restaurants restaurants={filterRestaurantsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
