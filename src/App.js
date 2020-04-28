import React, {useState, useEffect, useMemo} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Loader, Header, InfoCard, CountrySelect, Chart, Table} from './components';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
    
    const [state, setState] = useState({
        themePalette: 'light',
        covidData: null,
        selectedCountry: '',
    });

    const {themePalette, covidData, selectedCountry} = state;
           
    const theme = useMemo(() => createMuiTheme({
        palette: {type:  themePalette},
        })
      );

    useEffect(() => {
        (async () => {
            const fetchedData = await fetchCovidData();
            fetchedData && setState({...state, covidData: fetchedData});
        })();
    },[]);

    const changeTheme = () => setState({...state, themePalette: themePalette === 'dark' ? 'light' : 'dark'});
    
    const handleCountrySelect = async (selectedCountry) => {
        setState({...state, covidData: await fetchCovidData(selectedCountry), selectedCountry});
    };

    
    
    if (!covidData) {
        return <Loader />
    } else {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header changeTheme = {changeTheme}/>
                <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                <InfoCard data = {covidData.data}/>
                <Chart countryData = {covidData.data} country = {selectedCountry}/>
                <Table />
            </ThemeProvider>
        )
    }
}

export default App;