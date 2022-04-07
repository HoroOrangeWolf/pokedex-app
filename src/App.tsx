import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Pokemon, PokemonProp } from './interfaces';
import PokemonList from './PokemonList';



function App() {

  const [state, setState] = useState({offset: 0, limit: 20});
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  useEffect(()=>{
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon?limit=${state.limit}&offset=${state.offset}`
    })
    .then(async (poks)=>{
      
      const array: Array<Pokemon> = [];

      const pokeProps: Array<PokemonProp> = poks.data.results;
      console.log(pokeProps.length);

      for(let i = 0; i < pokeProps.length; ++i){
        const singleProp = pokeProps[i];
        
        const response = await axios({
          method: 'get',
          url: singleProp.url
        })

        const singlePokemon: Pokemon = response.data;

        array.push(singlePokemon);
      }
      setPokemons(array);
    })
  }, [state]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <PokemonList pokemons={pokemons} />
        </div>
      </div>
    </div>
  );
}

export default App;
