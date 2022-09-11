import React, { PropsWithChildren } from 'react';
import Header from './Header';
import useTheme from '../../hooks/use-theme';

const Layout = (props: PropsWithChildren) => {
  const { layoutTheme } = useTheme();

  return (
    <div className={layoutTheme}>
      <Header />
      <div className="page-content">{props.children}</div>
    </div>
  );
};

export default Layout;
