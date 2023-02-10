export interface Character {
  id?: string;
  name: string;
  alternate_names?: [];
  role: string;
  species?: string;
  gender?: string;
  house?: string;
  dateOfBirth?: string;
  yearOfBirth?: number;
  wizard?: boolean;
  ancestry?: string;
  eyeColour?: string;
  hairColour?: string;
  wand?: { wood: string; core: string; length: number };
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  alternate_actors?: [];
  alive?: boolean;
  image?: string;
}

export interface CharacterState {
  characters: Character[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
}

export interface PotionState {
  potions: Potion[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
}

export interface Potion {
  id?: string;
  name: string;
  effect: string;
  sideEffects: string;
  characteristics: string;
  difficulty: string;
  ingredients: {
    id: string;
    name: string;
  }[];
  inventors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
}

export interface SpellState {
  spells: Spell[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
}
export interface Spell {
  id?: string;
  name: string;
  incantation?: string;
  effect?: string;
  canBeVerbal?: boolean;
  type?: string;
  light?: string;
  creator?: null;
}
