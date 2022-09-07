import React from 'react';
import Layout from '../components/layout/Layout';

import CharacterTable from '../components/tables/CharacterTable';

const CharactersPage = () => {
  return (
    <Layout>
      <div className="table-page-container">
        <div className="table-container-header">
          <h1>Characters</h1>
        </div>
        <div className="table-container">
          <CharacterTable />
        </div>
      </div>
    </Layout>
  );
};
export default CharactersPage;
