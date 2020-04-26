import React from 'react';
import {Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select} from '@material-ui/core';
import styles from './CountrySelect.module.scss';

const CountrySelect = () => {

    return (
        <Grid container spacing = {1} justify = "center" className = {styles.country}> 
            <FormControl >
                <InputLabel id="country-label">Страна</InputLabel>
                <Select
                labelId="country-label"
                id="country-select"
                value='1'
                onChange={() => {}}
                >
                <MenuItem value="1">Country</MenuItem>
                </Select>
                <FormHelperText>Посмотреть статистику по отдельно взятой стране</FormHelperText>
            </FormControl>
      </Grid>
    )
}

export default CountrySelect;