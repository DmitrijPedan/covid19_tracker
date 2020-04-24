import React from 'react';
import {Header, Card, CountrySelect, Chart, Table} from './components';
import styles from './App.module.scss';

const App = () => {
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