import React from 'react';
import {AppBar, Toolbar, Grid, IconButton, Container, FormControlLabel, Switch, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import styles from './Header.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(2)},
    title: {flexGrow: 1},
  }));

const Header = ({handlerChangeTheme, themeApp}) => {

    const classes = useStyles();
      
    return (
        <header>
        <AppBar position="sticky" color = "default">
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Меню</Typography> */}
                <FormControlLabel control={
                    <Switch onChange={handlerChangeTheme} color="secondary"/>
                    } />
                    {themeApp === 'dark' ? (<Brightness3Icon/>):(<WbSunnyIcon/>)}
            </Toolbar>
        </AppBar>
        <Container className = {styles.container}>
            <Grid container spacing = {1} justify = "center" direction = "column" alignItems = "center"> 
                <Typography variant="h2" className = "title" color = "textPrimary">COVID-19</Typography>
                <Typography variant = "subtitle1" className = "subtitle" color = "textSecondary">
                    Официальная статистика
                </Typography> 
            </Grid>
        </Container>
        </header>
    )
}

export default Header;