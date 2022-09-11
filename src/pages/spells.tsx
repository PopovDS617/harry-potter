import React from 'react';
import Layout from '../components/layout/Layout';
import SpellTable from '../components/tables/SpellTable';
import Transitions from '../components/animation/Transitions';

const SpellsPage = () => {
  return (
    <Layout>
      <Transitions>
        <div className="table-page-container">
          <SpellTable />
        </div>
      </Transitions>
    </Layout>
  );
};

export default SpellsPage;
