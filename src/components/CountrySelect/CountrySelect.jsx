import React, {useState, useEffect} from 'react';
import {Grid, InputLabel, FormHelperText, FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountriesData} from '../../services/fetchApi';
import styles from './CountrySelect.module.scss';

const CountrySelect = ({handleCountrySelect}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await fetchCountriesData())
        };
        fetchCountries();
    }, []);

    return (
        <div className = {styles.container}> 
            <FormControl>
                <InputLabel htmlFor="country-label">Страна</InputLabel>
                <NativeSelect 
                    id="country-label" 
                    defaultValue="Global" 
                    onChange = {(event) => handleCountrySelect(event.target.value)}>
                        <option value="Global">Все страны</option>
                        {countries.map((el, i) => <option key={i} value={el.name}>{el.nameRus ? el.nameRus : el.name}</option>)}
                </NativeSelect>
                <FormHelperText>Посмотреть статистику по отдельно взятой стране</FormHelperText>
            </FormControl>
      </div>
    )
}

export default CountrySelect;