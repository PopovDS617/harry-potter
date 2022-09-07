const SPELLS_API_URL = 'https://wizard-world-api.herokuapp.com';

const getAllSpells = async () => {
  const response = await fetch(SPELLS_API_URL + '/spells');
  const data = await response.json();

  return data;
};

export default getAllSpells;
