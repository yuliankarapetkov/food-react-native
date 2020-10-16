import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [query, setQuery] = useState('');

    return (
        <View>
            <SearchBar
                query={query}
                onChange={value => setQuery(value)}
                onSubmit={() => console.log('submitted')}
            />
            <Text>{query.length ? `Search for '${query}'..` : 'Type in something to start searching'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
