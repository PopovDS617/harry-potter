import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link href="/welcome">Home</Link>
      </div>
      <div>
        <Link href="/characters">Characters</Link>
      </div>
      <div>
        <Link href="/spells"> Spells</Link>
      </div>
      <div>
        <Link href="/potions"> Potions</Link>
      </div>
    </nav>
  );
};

export default Navbar;
