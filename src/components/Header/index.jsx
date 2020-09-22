import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import iconHeader from '../../assets/img/andalugeeks_white.png';
import style from './style';

const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar position="relative" className={classes.bar}>
      <Toolbar className={classes.root}>
        <a target="_blank" href="https://andaluh.es/" rel="noopener noreferrer">
          <img src={iconHeader} alt="icon header" className={classes.img} />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style, { theme: true })(Header);
