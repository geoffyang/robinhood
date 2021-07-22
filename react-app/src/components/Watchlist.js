import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInWatchList, deleteTickerThunk } from '../store/watchlistStore';
import { getSingleStock, getMultipleStocks } from '../store/stocksStore';
import './Watchlist.css';

function Watchlist() {
  const stocks = useSelector(state => state.stocks)
  const watchlist = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllInWatchList())
  },[dispatch])

  useEffect(()=> {
    const watchlistValuesArray = Object.values(watchlist)
    if(watchlistValuesArray){
      for(const stock of watchlistValuesArray){
        dispatch(getSingleStock(stock.ticker))
      }
      // dispatch(getMultipleStocks(watchlistValuesArray))
    }
  },[watchlist])
  
  return (
    <div className='add-to-watchlist-container'>
      {(watchlist) ?
        Object.values(watchlist).map((watchedStock)=> {
          return (
            <div>
              <div
                style={{backgroundImage: `url('${stocks[watchedStock.ticker]?.logoURL}')`}}
                className='stock-logo'
              ></div>
              <div>{watchedStock.ticker}</div>
              <div>{stocks[watchedStock.ticker]?.currentPrice}</div>
              <button
                onClick={async () => {
                  await dispatch(deleteTickerThunk(watchedStock.ticker));
                  await dispatch(getAllInWatchList());
                }}>
                Delete
              </button>
            </div>
          );
        })
        :
        <div>Loading...</div>}
    </div>
  );
}
export default Watchlist;
