import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const links = [
    {
        to: "/",
        title: "Home",
        exact: true
    },
    {
        to: "/login",
        title: "Login",
        exact: true
    },
    {
        to: "/search",
        title: "Search",
        exact: true
    }
   
];

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          {links.map((item) => (
        <NavLink
          to={item.to}
          key={item.to}
          exact={item.exact}
          className={(isActive) =>
            `${styles.link} ${isActive ? " " + styles.selected : ""}`
          }
        >
          {item.title}
        </NavLink>
      ))}
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
