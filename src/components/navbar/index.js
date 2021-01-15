import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavLink from 'components/links/navLink';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '50px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="default" className={classes.root} position="static">
      <Toolbar className={classes.space}>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/galery">Galery</NavLink>
        <NavLink to="/eating">Eating</NavLink>
      </Toolbar>
    </AppBar>
  );
}
