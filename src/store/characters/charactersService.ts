const CHARACTERS_API_URL = 'https://hpc-api.vercel.app/characters';

const getAllCharacters = async () => {
  const response = await fetch(CHARACTERS_API_URL);
  const data = await response.json();
  const charactersList = data.characters;
  return charactersList;
};

export default getAllCharacters;
