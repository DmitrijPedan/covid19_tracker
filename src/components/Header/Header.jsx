import React from 'react';
import {Typography, Grid, Container, FormControlLabel, Switch} from '@material-ui/core';
import image from '../../img/covid.png';
import styles from './Header.module.scss';

const Header = ({changeTheme}) => {

    return (
        <header>
            <Container className = {styles.container}>
                <Grid container spacing = {1} justify = "center" direction = "column" alignItems = "center"> 
                    <FormControlLabel
                        control={
                        <Switch onChange={changeTheme} color="success"/>
                        }
                        label="Темная тема"
                    />
                    <img src={image} alt="COVID-19"/> 
                    <Typography variant="h2" className = "title" color = "textPrimary">
                        COVID-19
                    </Typography>
                    <Typography variant = "subtitle1" className = "subtitle" color = "textSecondary">
                        Официальная статистика
                    </Typography> 
                </Grid>
            </Container>
        </header>
    )
}

export default Header;