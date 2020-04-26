import React, {useState, useEffect} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Loader, Header, InfoCard, CountrySelect, Chart, Table} from './components';

const App = () => {

    document.title = 'COVID-19 Инфо';

    const [covidData, setCovidData] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await fetchCovidData();
            if (fetchedData) {
                setCovidData(fetchedData);
            };
        } 
        fetchData();
    },[]);

    const handleCountrySelect = async (selectedCountry) => {
        setCovidData(await fetchCovidData(selectedCountry));
        setSelectedCountry(selectedCountry);
    }

    if (!covidData) {
        return <Loader />
    } else {
        return (
            <div>
                <Header />
                <CountrySelect handleCountrySelect = {handleCountrySelect}/>
                <InfoCard data = {covidData.data}/>
                <Chart countryData = {covidData.data} country = {selectedCountry}/>
                <Table />
            </div>
        )
    }
}

export default App;