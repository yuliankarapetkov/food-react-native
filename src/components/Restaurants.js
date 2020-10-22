import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Restaurant from './Restaurant'

const Restaurants = ({ title, restaurants }) => {
    return (
        <View style={styles.restaurants}>
            <Text style={styles.title}>{title} ({restaurants.length})</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => <Restaurant restaurant={item} />}
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
