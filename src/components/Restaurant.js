import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Restaurant = ({ restaurant }) => {
    return (
        <View style={styles.restaurant}>
            <Image source={{ uri: restaurant.image_url }} style={styles.image} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    restaurant: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold',
        marginTop: 5
    }
});

export default Restaurant;
