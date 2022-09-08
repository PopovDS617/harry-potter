import React from 'react';
import Layout from '../components/layout/Layout';
import SpellTable from '../components/tables/SpellTable';
import Transitions from '../components/animation/Transitions';

const SpellsPage = () => {
  return (
    <Layout>
      <Transitions>
        <div className="table-page-container">
          <div className="table-container-header">
            <h1>Spells</h1>
          </div>
          <div className="table-container">
            <SpellTable />
          </div>
        </div>
      </Transitions>
    </Layout>
  );
};

export default SpellsPage;
