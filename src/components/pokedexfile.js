import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';

const PokedexFile = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokeData, setPokeData] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null); // State to track the selected Pokémon
    const pokePerPage = 9;

    useEffect(() => {
        if (!selectedPokemon) {
            const fetchPokemon = async () => {
                try {
                    const promises = [];
                    for (let i = 1; i <= pokePerPage; i++) {
                        const id = pokePerPage * (currentPage - 1) + i;
                        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
                    }
                    const responses = await Promise.all(promises);
                    const newData = responses.map(res => res.data);
                    setPokeData(newData);
                } catch (error) {
                    console.error("Failed to fetch Pokémon", error);
                }
            };

            fetchPokemon();
        }
    }, [currentPage, selectedPokemon]);

    const handleNext = () => {
        setCurrentPage(prev => prev + 1);
        setSelectedPokemon(null); // Clear selection when changing pages
    };

    const handleBack = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
        setSelectedPokemon(null); // Clear selection when changing pages
    };

    const returnToList = () => {
        setSelectedPokemon(null); // Function to clear the selected Pokémon and return to list
    };

    return (
        <div style={{ background: 'rgba(255, 0, 0, 0.6)', position: 'relative', minHeight: '100vh' }}>
            <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '50%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                padding: '100px'
            }}>
                {selectedPokemon
                    ? <DisplayPokemon id={selectedPokemon.id} minimal={false} />
                    : pokeData.map(pokemon => (
                        <div onClick={() => setSelectedPokemon(pokemon)} key={pokemon.id}>
                            <div style={{ cursor: 'pointer', margin: '10px', padding: '20px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                                <h1>{pokemon.name}</h1>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} style={{ height: '200px', width: 'auto', display: 'block', margin: 'auto' }} />

                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default PokedexFile;