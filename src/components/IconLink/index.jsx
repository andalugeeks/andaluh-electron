import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const IconLink = (props) => {
  const { link, children, ...rest } = props;

  return (
    <IconButton onClick={() => window.open(link)} {...rest}>
      { children}
    </IconButton>
  );
};

export default IconLink;
