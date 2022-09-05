import React from 'react';
import Layout from '../components/layout/Layout';

import CharacterTable from '../components/tables/CharacterTable';

const CharactersPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>Characters</h1>
        </div>
        <div>
          <CharacterTable />
        </div>
      </div>
    </Layout>
  );
};
export default CharactersPage;
