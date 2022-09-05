import React from 'react';
import Layout from '../components/layout/Layout';

import PotionTable from '../components/tables/PotionTable';

const PotionsPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>Potions</h1>
        </div>
        <div>
          <PotionTable />
        </div>
      </div>
    </Layout>
  );
};
export default PotionsPage;
