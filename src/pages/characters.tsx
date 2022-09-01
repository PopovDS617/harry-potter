import React from 'react';

import CharacterTable from '@/components/tables/CharacterTable';

const CharactersPage = () => {
  return (
    <div>
      <div>
        <h1>Characters</h1>
      </div>
      <div>
        <CharacterTable />
      </div>
    </div>
  );
};
export default CharactersPage;
