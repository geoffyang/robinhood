import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
import { Line } from 'react-chartjs-2';
import { updateStock } from '../store/portfolioStore';
import WatchlistAddButton from './WatchlistAddButton'
import { updateBalance } from '../store/userStore';

function Stock({ ticker }) {
  const [timePeriod, setTimePeriod] = useState('dailyPrices')
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
    (async () => {
      await dispatch(getSingleStock(ticker));
    })();
  }, [dispatch, ticker])

  useEffect(() => {
    if (stocks[ticker]) {
      setData({
        labels: stocks[ticker][timePeriod],
        datasets: [
          {
            label: ticker,
            data: stocks[ticker][timePeriod],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            // hoverBorderWidth:8,
            // showLine: false,
            scales: {
              xAxes: [{
                display: false,
                gridLines:{color:"#000000"}
              }],
              yAxes:[{ display:false, gridLines:{color:"#000000"}}]
            }
          },
        ],
      })
    }
  }, [timePeriod, stocks])

  return (



    <div className='graphContainer'>
      <h1>{stocks[ticker]?.shortName}</h1>
      <div className='graphButtons'>
        <button onClick={() => {
          setTimePeriod('dailyPrices');
        }}>Today</button>
        <button onClick={() => {
          setTimePeriod('weeklyPrices');
        }}>Weekly</button>
        <button onClick={() => {
          setTimePeriod('oneMonthPrices');
        }}>Monthly</button>
        <button onClick={() => {
          setTimePeriod('yearlyPrices');
        }}>Yearly</button>
        <button onClick={() => {
          setTimePeriod('allTimePrices');
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
          await dispatch(updateStock(ticker, 'add'))
          await dispatch(updateBalance(stocks[ticker].currentPrice.slice(1), 'subtract'))
        }}>BUY STOCK</button>
        <button onClick={async () => {
          await dispatch(updateStock(ticker, 'subtract'))
          await dispatch(updateBalance(stocks[ticker].currentPrice.slice(1), 'add'))
        }}>SELL STOCK</button>
        <button onClick={async () => {
          await dispatch(updateBalance(100, 'add'))
        }}>ADD 100</button>
      </div>
      <WatchlistAddButton ticker={ticker} />
    </div>
  );
}
export default Stock;
