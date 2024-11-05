export interface PokemonSprites {
  front_default: string; 
  back_default: string; 
}


export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprites;
  game_indices: PokemonGameIndex[]; 
}
