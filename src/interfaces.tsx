

export interface Sprites {
    back_default: string,
    front_default: string
}

export interface ButtonSortEvent{
    sortBy: string,
    isASC: boolean
}

export interface Pokemon{
  name: string,
  types: Array<string>,
  height: number,
  weight: number,
  sprites: Sprites,
}

export interface PokemonBuff{
  name: string,
  types: Array<any>,
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