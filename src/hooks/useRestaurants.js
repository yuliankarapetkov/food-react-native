import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);

    const searchRestaurants = async term => {
        const { data: { businesses } } = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });

        setRestaurants(businesses);
    }

    useEffect(() => {
        searchRestaurants('pasta');
    }, []);

    return [searchRestaurants, restaurants];
};
