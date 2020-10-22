import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Restaurants = ({ title, restaurants }) => {
    return (
        <View>
            <Text style={styles.title}>{title} ({restaurants.length})</Text>
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
