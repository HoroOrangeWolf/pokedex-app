import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Pokemon, PokemonProp, Config, ButtonSortEvent, PokemonBuff, SingleType } from './interfaces';
import PokemonList from './PokemonList';


function App() {

  const [state, setState] = useState<Config>({offset: 0, limit: 20});
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

  function getMore():void{
    const conf: Config = state;
    const newConfig : Config = {offset: conf.limit, limit: conf.limit + 20}
    setState(newConfig);
  }

  function sort(data:ButtonSortEvent){
    let sortedPokemons: Array<Pokemon> = [];
    console.log(data);
    if(data.sortBy === 'type'){
      if(data.isASC){
        sortedPokemons = pokemons.sort((a,b):number=>{
          if(a.types.type.name > b.types.type.name){
            return 1;
          }else if(a.types.type.name < b.types.type.name){
            return -1;
          }
          return 0;
        })
      }else{
        sortedPokemons = pokemons.sort((a,b):number=>{

          if(a.types.type.name > b.types.type.name){
            return -1;
          }else if(a.types.type.name < b.types.type.name){
            return 1;
          }
          return 0;
        })
      }
    }else if(data.sortBy === 'name'){
      if(data.isASC){
        sortedPokemons = pokemons.sort((a,b):number=>{
          if(a.name > b.name){
            return 1;
          }else if(a.name < b.name){
            return -1;
          }
          return 0;
        })
      }else{
        sortedPokemons = pokemons.sort((a,b):number=>{

          if(a.name > b.name){
            return -1;
          }else if(a.name < b.name){
            return 1;
          }
          return 0;
        })
      }
    }

    setPokemons([...sortedPokemons]);
    
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

        const singlePokemonBuff: PokemonBuff = response.data;
        const singleType: SingleType = (singlePokemonBuff.types.length > 0) ? singlePokemonBuff.types[0] : {type: {name: "No Type"}};
      
        array.push({name: singlePokemonBuff.name, height: singlePokemonBuff.height, weight: singlePokemonBuff.weight,types: singleType, sprites: singlePokemonBuff.sprites});
      }
      setPokemons(array);
    })
  }, [state]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <PokemonList pokemons={pokemons} onClickMore={getMore} sort={sort}/>
        </div>
      </div>
    </div>
  );
}

export default App;
