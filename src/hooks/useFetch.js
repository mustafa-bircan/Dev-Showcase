import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        api.get(endpoint)
            .then((response) => {
                console.log(response.data);
                setData(response.data[0]?.footer);
                setLoading(false);
            })
            .catch((err) => {
                console.error('API error:', err);
                setError(err.message);
                setLoading(false);
            });
    }, [endpoint]);


    return { data, loading, error };
};

export default useFetch;
