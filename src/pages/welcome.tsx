import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout/Layout';

const WelcomePage = () => {
  return (
    <Layout>
      <div className="welcome-container">
        <div>
          <Link href="/characters">Characters</Link>
        </div>
        <div>
          <Link href="/spells"> Spells</Link>
        </div>
        <div>
          <Link href="/potions"> Potions</Link>
        </div>
        <div>
          <Link href="/">back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default WelcomePage;
