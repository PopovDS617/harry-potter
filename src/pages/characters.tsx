import React from 'react';
import Transitions from '../components/animation/Transitions';

import Layout from '../components/layout/Layout';

import CharacterTable from '../components/tables/CharacterTable';

const CharactersPage = () => {
  return (
    <Layout>
      <Transitions>
        <div className="table-page-container">
          <CharacterTable />
        </div>
      </Transitions>
    </Layout>
  );
};
export default CharactersPage;
