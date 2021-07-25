import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
import Stock from './Stock';
import { Line } from 'react-chartjs-2';
import { NavLink, useParams } from 'react-router-dom';
import { tickerList } from './assets';
import WatchlistAddButton from './WatchlistAddButton';

function SearchResults() {
  const { searchedTicker } = useParams();
  const tickersRegex = new RegExp(('^' + searchedTicker), "i")

  const [tickersShown, setTickersShown] = useState([]);

  const filterTickers = () => {
    if(searchedTicker.length > 0) {
      let newTickers = tickerList.filter(ticker => {
        return tickersRegex.test(ticker)
      })
      setTickersShown(newTickers)
    } else if (searchedTicker.length === 0) {
      setTickersShown([])
    }
  }

  useEffect(() => {
    filterTickers()
  }, [])

  return (
    <div>
      <h1>Search Results:</h1>
      {(tickersShown) ?
        tickersShown.map(ticker => {
          return (
            <><Stock ticker={ticker} />
              <WatchlistAddButton ticker={ticker} />
              </>)
        })
        :
        <h1>No Results Found</h1>}

    </div>
  );
}
export default SearchResults;
