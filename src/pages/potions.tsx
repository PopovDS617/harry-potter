import React from 'react';
import Layout from '../components/layout/Layout';
import PotionTable from '../components/tables/PotionTable';
import Transitions from '../components/animation/Transitions';

const PotionsPage = () => {
  return (
    <Layout>
      <Transitions>
        <div className="table-page-container">
          <div className="table-container-header">
            <h1>Potions</h1>
          </div>
          <div className="table-container">
            <PotionTable />
          </div>
        </div>
      </Transitions>
    </Layout>
  );
};
export default PotionsPage;
