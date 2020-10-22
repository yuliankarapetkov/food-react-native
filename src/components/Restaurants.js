import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Restaurants = ({ title, restaurants }) => {
    return (
        <View>
            <Text style={styles.title}>{title} ({restaurants.length})</Text>
            <FlatList
                horizontal
                data={restaurants}
                keyExtractor={r => r.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    );
                }}
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
