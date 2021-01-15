import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Navlink = ({ children, to, exact }) => {
  return (
    <Typography>
      <Button to={to} exact={exact} activeStyle={{ color: '#b8e269' }} component={NavLink}>
        {children}
      </Button>
    </Typography>
  );
};

export default Navlink;
