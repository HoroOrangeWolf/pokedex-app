import React from "react"
import { Pokemon } from "../interfaces"
import '../index.css'
import PokemonItem from "../PokemonItem"
import ButtonSort from "../ButtonSort"

type CardProps = {
    pokemons: Array<Pokemon>,
    onClickMore: Function
}

export default function PokemonList({pokemons, onClickMore}:CardProps){
    return (
        <div className="list">
            <div className="listHeader">
                <div>
                    Sort
                </div>
                <div className="sortButtons">
                    <ButtonSort/>
                    <ButtonSort/>
                    <ButtonSort/>
                    <ButtonSort/>
                </div>
            </div>

            {pokemons.map((poke, index)=><PokemonItem pokemon={poke} key={index}/>)}

            <div className="listFooter">
                <button onClick={()=>onClickMore()}>
                    Click to get more!
                </button>
            </div>
        </div>
    )
} 