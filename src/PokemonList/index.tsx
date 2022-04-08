import React, { useState } from "react"
import { Pokemon, ButtonSortEvent } from "../interfaces"
import PokemonItem from "../PokemonItem"
import ButtonSort from "../ButtonSort"

type CardProps = {
    pokemons: Array<Pokemon>,
    onClickMore: Function,
    sort: Function
}

export default function PokemonList({pokemons, onClickMore, sort}:CardProps){

    const [resetB1, setResetB1] = useState<boolean>(true);
    const [resetB2, setResetB2] = useState<boolean>(true);
;

    function onSort(data:ButtonSortEvent){

        if(data.sortBy === 'name'){
            setResetB2(!resetB2);
        }else{
            setResetB1(!resetB1);
        }

        sort(data);
    }

    return (
        <div className="list">
            <div className="listHeader">
                <div className="sortButtons">
                    <ButtonSort text="Name" sortBy="name" onSortChange={onSort} reset={resetB1}/>
                    <ButtonSort text="Type" sortBy="type" onSortChange={onSort} reset={resetB2}/>
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