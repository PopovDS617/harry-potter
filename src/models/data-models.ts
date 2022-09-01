export interface Character {
  name: string;
  alternate_names?: [];
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

export interface Potion {
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
