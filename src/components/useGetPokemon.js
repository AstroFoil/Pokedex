import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetPokemon = (id) => {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        console.log(`Fetching URL: ${fetchURL}`);
        setLoading(true);
        setError(false);

        axios.get(fetchURL).then(response => {
            console.log('Fetched data:', response.data);
            const newPokemon = response.data;
            setPokemon(newPokemon);
            setLoading(false);
            console.log('Pokemon ID:', id);
        }).catch(error => {
            console.error("No pokemon. They are sleeping", error);
            setError(true);
            setLoading(false);
        });
    }, [id]);

    return { pokemon, loading, error };
};

export default useGetPokemon;