import React, {useState, useEffect} from 'react';
import {fetchCovidData} from './services/fetchApi';
import {Header, Card, CountrySelect, Chart, Table} from './components';
import styles from './App.module.scss';


const App = () => {

    const [covidData, setCovidData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => setCovidData(await fetchCovidData());
        fetchData();
    },[]);

    console.log(covidData);
    
    return (
        <div className={styles.container}>
            <Header />
            <Card />
            <CountrySelect />
            <Chart />
            <Table />
        </div>
    )
}

export default App;