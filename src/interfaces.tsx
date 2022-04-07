

export interface Sprites {
    back_default: string,
    front_default: string
}

export interface TypeData {
    name: string
}
export interface SingleType{
    type: TypeData
}

export interface ButtonSortEvent{
    sortBy: string,
    isASC: boolean
}

export interface Pokemon{
  name: string,
  types: SingleType,
  height: number,
  weight: number,
  sprites: Sprites,
}

export interface PokemonBuff{
  name: string,
  types: Array<SingleType>,
  height: number,
  weight: number,
  sprites: Sprites,
}
export interface PokemonProp{
  url: string,
  name: string
}

export interface Config {
    limit: number,
    offset: number
}

export  {}