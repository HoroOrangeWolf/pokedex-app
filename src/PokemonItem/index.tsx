import { Pokemon } from "../interfaces";
import '../index.css'

type CardProps = {
    pokemon: Pokemon
}

export default function PokemonItem({pokemon}:CardProps){
    return (
        <div className="card">
            <div className="visible">
                <div className="img">
                    <img width="75" height="75" src={pokemon.sprites.front_default} alt=""/>
                </div>
                <div className="pokeName"> 
                    <p>{pokemon.name}</p>
                </div>
            </div>
        </div>
    );
}