import {
  Divider, TextField, Typography, withStyles,
} from '@material-ui/core';

import React from 'react';
import style from './style';

const TextInput = (props) => {
  const {
    classes, title, onChange, value, placeholder, readOnly,
  } = props;

  return (
    <div className={classes.textContainer}>
      <Typography className={classes.title}>{title}</Typography>
      <Divider className={classes.divider} />
      <TextField
        placeholder={placeholder}
        multiline
        onChange={onChange}
        className={classes.textarea}
        rows={6}
        value={value}
        inputProps={{
          readOnly,
        }}
      />
    </div>
  );
};

export default withStyles(style, { withTheme: true })(TextInput);
