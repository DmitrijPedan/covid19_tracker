import React, {useState, useEffect} from 'react';
import {fetchDayData} from '../../services/fetchApi';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.scss';

const Chart = ({countryData, country}) => {

    const [globalData, setGlobalData] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
          setGlobalData(await fetchDayData())
        };
        fetchData();
    }, []);

    const lineChart = (
        globalData.length ? (
          <Line
            data={{
              labels: globalData.map((el) => el.date),
              datasets: [{
                data: globalData.map((el) => el.confirmed),
                label: 'Инфицировано',
                borderWidth: 1,
                pointRadius: 2,
                pointStyle: 'circle',
                borderColor: 'rgb(44, 173, 248)',
                backgroundColor: 'rgba(44, 173, 248, 0.2)',
                fill: true,
              },{
                data: globalData.map((el) => el.deaths),
                label: 'Умерших',
                borderWidth: 1,
                pointRadius: 2,
                borderColor: 'rgb(230, 14, 14)',
                backgroundColor: 'rgba(230, 14, 14, 0.2)',
                fill: true,
              }],
            }}
            options={{
              title: { display: true, text: `Информация о COVID-19 по всем странам` },
            }}
          />
        ) : null
      );

      const barChart = (
        countryData ? (
          <Bar
            data={{
              labels: countryData.map(el => el.titleRu),
              datasets: [{
                data: countryData.map(el => el.value),
                label: 'Человек',
                backgroundColor: ['rgb(44, 173, 248)', 'rgb(50, 155, 64)', 'rgb(230, 14, 14)'],
                fill: true,
              }],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Информация о COVID-19 в выбранной стране` },
            }}
          />
        ) : null
      );

    return (
        <div className = {styles.container}>
            {country && country !== 'Global' ? barChart : lineChart}
        </div>
    )
}

export default Chart;