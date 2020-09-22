import React from 'react';
import { withStyles, Fab } from '@material-ui/core';
import style from './style';

const extractArrayFromSet = (set) => {
  const array = [];
  set.forEach((e) => array.push(e));
  return array;
};

const DropDownButtons = (props) => {
  const {
    classes,
    buttons,
    selectedButton,
    onClick,
    onBlur,
    open,
    activate,
  } = props;

  return (
    <div id="drop-down-container" className={classes.container} onBlur={onBlur}>
      <Fab onClick={open} color="secondary">{selectedButton}</Fab>
      <ul className={activate ? classes.activate : classes.deactivate}>
        {extractArrayFromSet(buttons)
          .map((button) => <li key={button}><Fab onClick={onClick}>{button}</Fab></li>)}
      </ul>
    </div>
  );
};

export default withStyles(style, { withTheme: true })(DropDownButtons);
