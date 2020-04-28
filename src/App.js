import React, {useState, useEffect} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Loader, Header, InfoCard, CountrySelect, Chart, Table} from './components';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

    const [themeApp, setThemeApp] = useState('light');
    const [covidData, setCovidData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    
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

    
    
    if (!covidData) {
        return <Loader />
    } else {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header handlerChangeTheme = {handlerChangeTheme}/>
                <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                <InfoCard data = {covidData.data}/>
                <Chart countryData = {covidData.data} country = {selectedCountry}/>
                <Table />
            </ThemeProvider>
        )
    }
}

export default App;