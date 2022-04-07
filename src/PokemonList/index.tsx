import React from "react"
import { Pokemon } from "../interfaces"
import '../index.css'
import PokemonItem from "../PokemonItem"

type CardProps = {
    pokemons: Array<Pokemon>
}

export default function PokemonList({pokemons}:CardProps){
    return (
        <div className="list">
            {pokemons.map(poke=><PokemonItem pokemon={poke}/>)}
        </div>
    )
} 