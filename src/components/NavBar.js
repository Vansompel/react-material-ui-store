import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';

const styles = theme => ({
    link: {
        textDecoration: 'none'
      },
    logo: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 24,
      color: '#fff'
    },
    menuList: {
        display: 'flex',
        flex: 1
    },
    menuItemColor: {
        color: '#fff'
    },
    menuItemRight: {
        marginLeft: 'auto'
    },
    leftIcon: {
        marginRight: 5,
    },
    iconSmall: {
        fontSize: 20
    },
  });


class NavBar extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to='/' className={classes.link}>
                            <Typography className={classes.logo} variant="headline">
                                <img src={logo} alt="store" style={{ paddingRight: 10 }} />React & Material-UI Store
                            </Typography>
                        </Link>
                        <MenuList className={classes.menuList}>
                            <Link to='/' className={classes.link}>
                                <MenuItem className={classes.menuItemColor}>
                                    Products
                                </MenuItem>
                            </Link>
                            <Link to='/cart' className={clsx(classes.link, classes.menuItemRight)}>
                                <MenuItem className={classes.menuItemRight}>
                                    <Button color="secondary" variant="contained">
                                        <ShoppingCart className={clsx(classes.leftIcon, classes.iconSmall)} />
                                        my cart
                                    </Button>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);