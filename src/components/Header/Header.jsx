import React from 'react';
import {Typography, Grid, Container, Box} from '@material-ui/core';
import image from '../../img/covid.png';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header>
            <Container className = {styles.header}>
                <Grid container spacing = {1} justify = "center" direction = "column" alignItems = "center"> 
                    <img src={image} alt="COVID-19"/> 
                    <Typography variant="h2" className = "title" color = "textPrimary" gutterBottom>
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