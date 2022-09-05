import React from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="header">
      <div className="header-text">Harry Potter pet project</div>

      {currentPath !== '/welcome' && <Navbar />}
    </div>
  );
};

export default Header;
