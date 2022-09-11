import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTheme from '../../hooks/use-theme';

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const { linkTheme } = useTheme();

  return (
    <nav className="navbar">
      <div>
        <Link href="/welcome">Home</Link>
      </div>
      <div>
        <Link href="/characters">
          <a className={currentPath === '/characters' ? linkTheme : ''}>
            Characters
          </a>
        </Link>
      </div>
      <div>
        <Link href="/spells">
          <a className={currentPath === '/spells' ? linkTheme : ''}>Spells</a>
        </Link>
      </div>
      <div>
        <Link href="/potions">
          <a className={currentPath === '/potions' ? linkTheme : ''}>Potions</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
