import { Pokemon } from "../interfaces";
import '../index.css'
import useCollapse from 'react-collapsed';

type CardProps = {
    pokemon: Pokemon,
}

function firstLetterToUpperCase(name: string):string{
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function PokemonItem({pokemon}:CardProps){

    const config = {
        duration: 500
    }

    const { getCollapseProps, getToggleProps } = useCollapse(config)

    function onDivClick(){
        console.log("Git");
    }

    return (
        <div className="card" onClick={onDivClick}>
            <div className="visible" {...getToggleProps()}>
                <div>
                    <div className="img">
                        <div className="insideImg">
                            <img width="75" height="75" src={pokemon.sprites.front_default} alt=""/>
                        </div>
                    </div>
                    <div>
                        {`Type: ${pokemon.types.length > 0 ? firstLetterToUpperCase(pokemon.types[0].type.name) : 'No Type!'}`}
                    </div>
                </div>
                <div className="pokeName"> 
                    <p className="text">{`Name: ${firstLetterToUpperCase(pokemon.name)}`}</p>
                </div>
            </div>
            <div className="hidden" {...getCollapseProps()}>
                <div>
                    {`Height: ${pokemon.height}`}
                </div>
                <div>
                    {`Weight: ${pokemon.weight}`}
                </div>
            </div>
        </div>
    );
}