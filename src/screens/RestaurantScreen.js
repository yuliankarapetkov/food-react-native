import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

import yelp from '../api/yelp';

const RestaurantScreen = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurant = async id => {
        const { data: restaurant } = await yelp.get(`/${id}`);
        setRestaurant(restaurant);
    }

    useEffect(() => {
        getRestaurant(id)
    }, []);

    if (!restaurant) {
        return null;
    }

    return (
        <>
            <Text>{restaurant.name}</Text>
            <FlatList
                data={restaurant.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default RestaurantScreen;
