import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
import { Line } from 'react-chartjs-2';
import { buyStock, sellStock } from '../store/portfolioStore';

function Stock({ ticker }) {
  const [stockData, setStockData] = useState('dailyPrices')
  const [data, setData] = useState({})
  const stocks = useSelector(state => state?.stocks);
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
    (async () => {
      await dispatch(getSingleStock(ticker));
    })();
  }, [dispatch])

  useEffect(() => {
    if (stocks[ticker]) {
      setData({
        labels: stocks[ticker][stockData],
        datasets: [
          {
            label: ticker,
            data: stocks[ticker][stockData],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      })
    }
  }, [stockData, stocks])

  return (
    <div className='graphContainer'>
      <h1>{stocks[ticker]?.shortName}</h1>
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
          (stocks[ticker]) ?
          <Line data={data} options={options} />
          :
          <h3>Loading...</h3>
        }
      </div>
      <div>
      <button onClick={async () => {
        await dispatch(buyStock('AAPL'))
      }}>BUY STOCK</button>
      <button onClick={async () => {
        await dispatch(sellStock('AAPL'))
      }}>SELL STOCK</button>
      </div>
    </div>
  );
}
export default Stock;
