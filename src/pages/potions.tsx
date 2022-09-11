import React from 'react';
import Layout from '../components/layout/Layout';
import PotionTable from '../components/tables/PotionTable';
import Transitions from '../components/animation/Transitions';

const PotionsPage = () => {
  return (
    <Layout>
      <Transitions>
        <div className="table-page-container">
          <PotionTable />
        </div>
      </Transitions>
    </Layout>
  );
};
export default PotionsPage;
