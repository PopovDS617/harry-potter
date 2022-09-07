import React from 'react';
import Layout from '../components/layout/Layout';
import SpellTable from '../components/tables/SpellTable';

const SpellsPage = () => {
  return (
    <Layout>
      <div className="table-page-container">
        <div className="table-container-header">
          <h1>Spells</h1>
        </div>
        <div className="table-container">
          <SpellTable />
        </div>
      </div>
    </Layout>
  );
};

export default SpellsPage;
