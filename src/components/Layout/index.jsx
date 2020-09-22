import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../assets/style/palette';

const Layout = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
