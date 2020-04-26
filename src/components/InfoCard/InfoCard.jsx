import React from 'react';
import {Card, CardContent, Typography, Grid, Container} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './InfoCard.module.scss';

const InfoCard = ({total}) => {

    if (!total) {
        return <p>loading...</p>
    } else {
        return (
            <Container>
                <Grid container spacing = {3} justify = "center"> 
                {total.map((el, i) => (
                    <Grid key = {i} item component = {Card} xs = {12} md = {3} className = {styles[el.titleEn]}>
                        <CardContent>
                            <Typography color = "textSecondary" variant = "h6" gutterBottom>{el.titleRu}</Typography> 
                            <Typography variant = "h5">
                                <CountUp start = {0} end = {el.value} duration = {2} separator = ","/>
                            </Typography> 
                            <Typography variant = "caption">
                                Официальная статистика COVID-19 по состоянию на: {new Date(el.lastUpdate).toLocaleDateString()} 
                            </Typography> 
                        </CardContent> 
                    </Grid> 
                ))}
                </Grid>
            </Container>
        )
    }
}

export default InfoCard;