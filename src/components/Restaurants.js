import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Restaurant from './Restaurant'

const Restaurants = ({ title, restaurants, navigation, onRestaurantPress }) => {
    return (
        <View style={styles.restaurants}>
            <Text style={styles.title}>{title} ({restaurants.length})</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
                            <Restaurant restaurant={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    restaurants: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default Restaurants;
