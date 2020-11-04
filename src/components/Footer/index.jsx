import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {
  GitHub, Instagram, Facebook, Twitter, Android, Telegram, Keyboard, YouTube
} from '@material-ui/icons';
import IconLink from '../IconLink';
import SlackIcon from '../SlackIcon';

import style from './style';
import {
  github, slack, facebook, twitter, instagram, teclao, android, telegram, youtube
} from './urls';

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Toolbar className={classes.content}>
        <div className={classes.iconContent}>
          <Typography>
            Andalûh Apps
          </Typography>
          <IconLink color="secondary" link={teclao}>
            <Keyboard />
          </IconLink>
          <IconLink color="secondary" link={android}>
            <Android />
          </IconLink>
          <IconLink color="secondary" link={telegram}>
            <Telegram />
          </IconLink>
        </div>
        <div className={classes.iconContent}>
          <Typography>
            Redê Çoçialê
          </Typography>
          <IconLink color="secondary" link={facebook}>
            <Facebook />
          </IconLink>
          <IconLink color="secondary" link={instagram}>
            <Instagram />
          </IconLink>
          <IconLink color="secondary" link={twitter}>
            <Twitter />
          </IconLink>
          <IconLink color="secondary" link={youtube}>
            <YouTube />
          </IconLink>
        </div>
        <div className={classes.iconContent}>
          <Typography>
            OpenSource
          </Typography>
          <IconLink color="secondary" link={github}>
            <GitHub />
          </IconLink>
          <IconLink color="secondary" link={slack}>
            <SlackIcon />
          </IconLink>
        </div>
      </Toolbar>
    </footer>
  );
};

export default withStyles(style, { theme: true })(Footer);
