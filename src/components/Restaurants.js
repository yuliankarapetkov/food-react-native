import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Restaurant from './Restaurant'

const Restaurants = ({ title, restaurants }) => {
    return (
        <View>
            <Text style={styles.title}>{title} ({restaurants.length})</Text>
            <FlatList
                horizontal
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => <Restaurant restaurant={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Restaurants;
