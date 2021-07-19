import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
import { Line } from 'react-chartjs-2';

function Stock({ ticker }) {
  const [stock, setStock] = useState({});
  const [stockData, setStockData] = useState('dailyPrices')
  const [labels, setLabels] = useState([1, 2, 3, 4, 5, 6])
  const [data, setData] = useState({})
  const stocks = useSelector(state => state.stocks);
  const dispatch = useDispatch();
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    dispatch(getSingleStock(ticker));
    setStock(stocks[ticker])
  }, [dispatch])

  useEffect(() => {
    if (stock) {
      setData({
        labels: stock[stockData],
        datasets: [
          {
            label: ticker,
            data: stock[stockData],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      })
    }
  }, [stockData])

  return (
    <div className='graphContainer'>
      <h1>{stock?.shortName}</h1>
      <div className='graphButtons'>
        <button onClick={() => {
          setStockData('dailyPrices');
        }}>Today</button>
        <button onClick={() => {
          setStockData('weeklyPrices');
        }}>Weekly</button>
        <button onClick={() => {
          setStockData('oneMonthPrices');
        }}>Monthly</button>
        <button onClick={() => {
          setStockData('yearlyPrices');
        }}>Yearly</button>
        <button onClick={() => {
          setStockData('allTimePrices');
        }}>All Time</button>
      </div>
      <div className='graph'>
        {
          (stock) ?
          <Line data={data} options={options} />
          :
          <h3>Loading...</h3>
        }
        {/* <div>{stock?.ticker} - {stock?.currentPrice}</div> */}
      </div>
    </div>
  );
}
export default Stock;
