import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
import { Line } from 'react-chartjs-2';
import { updateStock } from '../store/portfolioStore';
import WatchlistAddButton from './WatchlistAddButton'
import { updateBalance } from '../store/userStore';
import './Stock.css'

function Stock({ ticker }) {
  const [timePeriod, setTimePeriod] = useState('dailyPrices')
  const [data, setData] = useState({})
  const stocks = useSelector(state => state.stocks);
  const dispatch = useDispatch();
  const options = {
    maintainAspectRatio: false,
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
                gridLines: { color: "#000000" }
              }],
              yAxes: [{ display: false, gridLines: { color: "#000000" } }]
            }
          },
        ],
      })
    }
  }, [timePeriod, stocks])

  return (

    <div className="graphContainer">
      <span id="stock_name">{stocks[ticker]?.shortName}</span>

      <div className="graph">
        {stocks[ticker] ? (
          <Line data={data}
            options={options}
            gridLines={false}
            height={400}
            width={"650px"}
          />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>


      <div className="graphButtonContainer">
        <div className="graphButtons">
          <button
            className="daily_prices graphButton button-selected"
            onClick={() => {
              setTimePeriod("dailyPrices");
            }}
          >
            1D
          </button>
          <button
            className="weekly_prices graphButton"
            onClick={() => {
              setTimePeriod("weeklyPrices");
            }}
          >
            1W
          </button>
          <button
            className="one_month_prices graphButton"
            onClick={() => {
              setTimePeriod("oneMonthPrices");
            }}
          >
            1M
          </button>
          <button
            className="yearly_prices graphButton"
            onClick={() => {
              setTimePeriod("yearlyPrices");
            }}
          >
            1Y
          </button>
          <button
            className="all_time_prices graphButton"
            onClick={() => {
              setTimePeriod("allTimePrices");
            }}
          >
            All
          </button>
        </div>
      </div>
      <div>

      </div>
    </div>


  );
}
export default Stock;
