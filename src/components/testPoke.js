import React from 'react';
import useGetPokemon from "./useGetPokemon"; // Adjust the path as necessary

function TestPoke({ pokemonId }) {
    const { pokemon, loading, error } = useGetPokemon(pokemonId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data. Please try again.</p>;
    if (!pokemon) return <p>No Pokemon found!</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}

export default TestPoke;