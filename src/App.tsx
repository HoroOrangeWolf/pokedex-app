import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Pokemon, PokemonProp, Config } from './interfaces';
import PokemonList from './PokemonList';



function App() {

  const [state, setState] = useState<Config>({offset: 0, limit: 20});
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  function getMore():void{
    const conf: Config = state;
    const newConfig : Config = {offset: conf.limit, limit: conf.limit + 20}
    setState(newConfig);
  }

  useEffect(()=>{
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon?limit=${state.limit}&offset=${state.offset}`
    })
    .then(async (poks)=>{
      console.log("Test");
      const array: Array<Pokemon> = [...pokemons];

      const pokeProps: Array<PokemonProp> = poks.data.results;

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
          <PokemonList pokemons={pokemons} onClickMore={getMore} />
        </div>
      </div>
    </div>
  );
}

export default App;
