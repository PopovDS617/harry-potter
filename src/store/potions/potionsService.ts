const POTIONS_API_URL = 'https://wizard-world-api.herokuapp.com';

const getAllPotions = async () => {
  const response = await fetch(POTIONS_API_URL + '/elixirs');
  const data = await response.json();

  return data;
};

export default getAllPotions;
