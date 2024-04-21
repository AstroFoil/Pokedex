import React, { useState } from 'react';
import useGetPokemon from './useGetPokemon';
const DisplayPokemon = ({ id }) => {
    const { pokemon, error, loading } = useGetPokemon(id);
    const [showDetails, setShowDetails] = useState(false); // State to manage display of details

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching Pokémon.</div>;
    if (!pokemon) return <div>No Pokémon found.</div>;

    // Function to toggle the detail view
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div onClick={toggleDetails} style={{ cursor: 'pointer', padding: '20px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
            <h1>{pokemon.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} style={{ height: '200px', width: 'auto', display: 'block', margin: 'auto' }} />
            {showDetails && (
                <div>
                    <p>Height: {pokemon.height} decimeters</p>
                    <p>Weight: {pokemon.weight} hectograms</p>
                    <p>Types: {Array.isArray(pokemon.types) ? pokemon.types.map(t => t.type.name).join(', ') : 'No types found'}</p>
                    <p>Abilities: {Array.isArray(pokemon.abilities) ? pokemon.abilities.map(a => a.ability.name).join(', ') : 'No abilities found'}</p>
                    <p>Stats: {
                        Array.isArray(pokemon.stats) ?
                            pokemon.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(', ') :
                            'No stats found'
                    }</p>

                </div>
            )}
        </div>
    );
};

export default DisplayPokemon;