import React from 'react';
import SearchBar from '../components/input/SearchBar';
import Layout from '../components/layout/Layout';

import CharacterTable from '../components/tables/CharacterTable';

const CharactersPage = () => {
  return (
    <Layout>
      <div className="table-page-container">
        <CharacterTable />
      </div>
    </Layout>
  );
};
export default CharactersPage;
