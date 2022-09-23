const CHARACTERS_API_URL = 'https://hp-api.herokuapp.com/api/characters';

const getAllCharacters = async () => {
  const response = await fetch(CHARACTERS_API_URL);
  const data = await response.json();

  return data;
};

export default getAllCharacters;
