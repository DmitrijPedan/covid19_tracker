import React, {useState, useEffect, useMemo} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Loader, Header, InfoCard, CountrySelect, Chart, Table} from './components';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {FormControlLabel, Switch} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
    
    const [state, setState] = useState({
        themePalette: 'light',
        covidData: null,
        selectedCountry: '',
    });
   
        
    const theme = useMemo(() => createMuiTheme({
        palette: {
            type:  state.themePalette,
        },
        })
      );

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchCovidData();
            if (fetchedData) {
                setState({...state, covidData: fetchedData});
            };
        } 
        fetchData();
    },[]);

    const handleCountrySelect = async (selectedCountry) => {
        setState({
            ...state, 
            covidData: await fetchCovidData(selectedCountry), 
            selectedCountry
        })
    }

    const changeTheme = () => {
        if(state.themePalette === 'dark') {
            setState({
                ...state,
                themePalette: 'light'
            })
        } else {
            setState({
                ...state,
                themePalette: 'dark'
            })
        }
        
    }

    if (!state.covidData) {
        return <Loader />
    } else {
        return (
            <ThemeProvider theme={theme}>
                     <FormControlLabel
                        control={
                        <Switch onChange={changeTheme} color="secondary"/>
                        }
                        label="Темная тема"
                    />
               
                <CssBaseline />
                <Header />
                <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                <InfoCard data = {state.covidData.data}/>
                <Chart countryData = {state.covidData.data} country = {state.selectedCountry}/>
                <Table />
            </ThemeProvider>
        )
    }
}

export default App;