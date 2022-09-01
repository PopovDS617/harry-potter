import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <div>
        <Link href='/characters'>Characters</Link>
      </div>
      <div>
        <Link href='/spells'> Spells</Link>
      </div>
      <div>
        <Link href='/potions'> Potions</Link>
      </div>
    </div>
  );
};

export default Homepage;
