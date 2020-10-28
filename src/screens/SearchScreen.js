import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import Restaurants from '../components/Restaurants'

import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = ({ navigation }) => {
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

            <ScrollView>
                <Restaurants restaurants={filterRestaurantsByPrice('$')} navigation={navigation} title="Cost Effective" />
                <Restaurants restaurants={filterRestaurantsByPrice('$$')} navigation={navigation} title="Bit Pricier" />
                <Restaurants restaurants={filterRestaurantsByPrice('$$')} navigation={navigation} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
