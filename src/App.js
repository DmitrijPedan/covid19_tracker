import React, {useState, useEffect} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Header, InfoCard, CountrySelect, Chart, Table} from './components';
import styles from './App.module.scss';


const App = () => {

    document.title = 'COVID-19 | Коронавирус | Инфо';

    const [covidData, setCovidData] = useState({});
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountrySelect = async (selectedCountry) => {
        setCovidData(await fetchCovidData(selectedCountry));
    }

    useEffect(() => {
        const fetchData = async () => setCovidData(await fetchCovidData());
        fetchData();
    },[]);
    
    return (
        <div className={styles.container}>
            <Header />
            <CountrySelect handleCountrySelect = {handleCountrySelect}/>
            <InfoCard total = {covidData.total}/>
            <Chart />
            {/* <Table /> */}
        </div>
    )
}

export default App;