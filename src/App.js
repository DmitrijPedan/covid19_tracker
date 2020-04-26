import React, {useState, useEffect} from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {fetchCovidData} from './services/fetchApi';
import {Header, InfoCard, CountrySelect, Chart, Table} from './components';
// import styles from './App.module.scss';


const App = () => {

    document.title = 'COVID-19 | Коронавирус | Инфо';

    const [covidData, setCovidData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setCovidData(await fetchCovidData());
            setLoaded(true);
        } 
        fetchData();
    },[]);

    const handleCountrySelect = async (selectedCountry) => {
        setCovidData(await fetchCovidData(selectedCountry));
        setSelectedCountry(selectedCountry);
    }

    if (!loaded) {
        return (
            <Grid container spacing = {3} justify = "center"> 
                <CircularProgress color="secondary" />
            </Grid>
        )
    } else {
        return (
            <div>
                <Header />
                <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                <InfoCard total = {covidData.total}/>
                <Chart countryData = {covidData.total} country = {selectedCountry}/>
                <Table />
            </div>
        )
    }
}

export default App;