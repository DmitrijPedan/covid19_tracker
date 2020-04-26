import React, {useState, useEffect} from 'react';
import {fetchDayData} from '../../services/fetchApi';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.scss'

const Chart = () => {

    const [dayData, setDayData] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            setDayData(await fetchDayData())
        };
        fetchData();
    }, []);

    const lineChart = (
        dayData.length ? (
          <Line
            data={{
              labels: dayData.map((el) => el.date),
              datasets: [{
                data: dayData.map((el) => el.confirmed),
                label: 'Инфицировано',
                borderWidth: 1,
                pointRadius: 2,
                pointStyle: 'circle',
                borderColor: 'rgb(44, 173, 248)',
                backgroundColor: 'rgba(44, 173, 248, 0.2)',
                fill: true,
              },{
                data: dayData.map((el) => el.deaths),
                label: 'Умерших',
                borderWidth: 1,
                pointRadius: 2,
                borderColor: 'rgb(230, 14, 14)',
                backgroundColor: 'rgba(230, 14, 14, 0.2)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    return (
        <div className = {styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;