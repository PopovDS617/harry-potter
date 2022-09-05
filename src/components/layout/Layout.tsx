import React, { PropsWithChildren } from 'react';
import Header from './Header';
import useTheme from '../../hooks/use-theme';

const Layout = (props: PropsWithChildren) => {
  const layoutTheme = useTheme();

  return (
    <div className={layoutTheme}>
      <Header />
      {props.children}
    </div>
  );
};

export const getStaticProps = () => {
  let theme = localStorage.getItem('theme');

  return {
    props: {
      x: theme,
    },
  };
};

export default Layout;
