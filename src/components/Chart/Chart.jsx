import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
    
            fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
        ? (
            <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Confirmed Cases',
                    borderColor: 'rgba(2, 2, 185, 0.75)',
                    backgroundColor: 'rgb(250, 250,250)',
                    fill: false,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'rgba(160, 3, 3, 0.75)',
                    backgroundColor: 'rgb(250, 250,250)',
                    fill: false,
                }],
            }}
        />) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar 
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(2, 2, 185, 0.75)', 'rgba(7, 150, 31, 0.75)', 'rgba(160, 3, 3, 0.75)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: country ? `Current Situation in ${country}` : `Current Global Situation`}
                }}
                />
            ) : null
    )

    return (
        <div className={styles.container}>
        {barChart}
    </div>
    );
};

export default Chart;