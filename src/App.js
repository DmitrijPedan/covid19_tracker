import React, {useState, useEffect} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Loader, Header, InfoCard, CountrySelect, Chart, InfoTable} from './components';
import {Button, Typography} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './App.module.scss';

const App = () => {

    const [themeApp, setThemeApp] = useState('light');
    const [covidData, setCovidData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [displayTable, setDisplayTable] = useState(false);
    
    const theme = createMuiTheme({
        palette: {type:  themeApp},
        });

    useEffect(() => {
        (async () => {
            const fetchedData = await fetchCovidData();
            fetchedData && setCovidData(fetchedData);
        })();
    }, []);

    const handlerChangeTheme = () => setThemeApp(themeApp === 'light' ? 'dark' : 'light');
    
    const handleCountrySelect = async (selectedCountry) => {
        setCovidData(await fetchCovidData(selectedCountry));
        setSelectedCountry(selectedCountry);
    };

    const handleDisplayTable = () => setDisplayTable(!displayTable);

    if (!covidData) {
        return <Loader />
    } else {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header handlerChangeTheme = {handlerChangeTheme} themeApp = {themeApp}/>
                    <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                    <InfoCard data = {covidData.data}/>
                    <Chart countryData = {covidData.data} country = {selectedCountry}/>
                    <div className = {styles.container}>
                        <Typography variant = "subtitle1" className = "subtitle" color = "textSecondary">
                            Ниже можно посмотреть подробную информацию по странам мира в виде таблицы
                        </Typography> 
                        <Button variant="contained" onClick = {handleDisplayTable} className = {styles.button}>
                            {!displayTable ? 'Показать таблицу' : 'Скрыть таблицу'}
                        </Button>
                    </div>
                    {displayTable && <InfoTable />} 
            </ThemeProvider>
        )
    }
}

export default App;