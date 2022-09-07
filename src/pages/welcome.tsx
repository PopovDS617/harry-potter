import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/Layout';

const WelcomePage = () => {
  return (
    <Layout>
      <div className="welcome-container">
        <div className="welcome-card-container">
          <div className="welcome-card">
            <Link href="/characters">Characters</Link>
          </div>
          <div className="welcome-card">
            <Link href="/spells"> Spells</Link>
          </div>
          <div className="welcome-card">
            <Link href="/potions"> Potions</Link>
          </div>
        </div>

        <div className="welcome-goback-container">
          <Link href="/">back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default WelcomePage;
