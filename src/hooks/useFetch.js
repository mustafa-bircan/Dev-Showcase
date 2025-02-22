import { useState, useEffect } from 'react';
import api from '../services/api';
import { useLanguage } from '../context/LanguageContext';

const useFetch = (endpoint, dataKey) => {
    const { language } = useLanguage();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const apiUrl = language === 'en'
            ? 'https://67b8ffa951192bd378dc679d.mockapi.io/secure/SpDWa22/api/v1/showcase/en'
            : 'https://67b8ffa951192bd378dc679d.mockapi.io/secure/SpDWa22/api/v1/showcase/data';

        api.get(apiUrl)
            .then((response) => {
                console.log(response.data);
                setData(dataKey ? response.data[0]?.[dataKey] : response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('API error:', err);
                setError(err.message);
                setLoading(false);
            });
    }, [endpoint, dataKey, language]);

    return { data, loading, error };
};

export default useFetch;
