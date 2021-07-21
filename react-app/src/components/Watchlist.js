import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInWatchList, deleteTickerThunk } from '../store/watchlistStore';
import { getSingleStock } from '../store/stocksStore';
import './Watchlist.css';
function Watchlist() {
    const stocks = useSelector(state => state.stocks)
    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllInWatchList())
    },[dispatch])

    useEffect(()=> {
        if(watchlist){

            for(const stock in Object.values(watchlist)){
                console.log(stock.ticker, "++++++++++++++++++++++++++++++++++++++++")
                dispatch(getSingleStock(stock.ticker))
            }
        }
    },[watchlist])

    return (
        <div className='add-to-watchlist-container'>
            {(watchlist) ?
                Object.keys(watchlist).map((stock)=> {
                    return (
                      <div>
                          {console.log(stocks[stock]?.logoURL, "_________________________________________")}
                        <div style={{backgroundImage: `url('${stocks[stock]?.logoURL}')`}}
                             className='stock-logo'
                        ></div>
                        <div>{watchlist[stock]?.ticker}</div>
                        <button
                          onClick={async () => {
                            await dispatch(
                              deleteTickerThunk(watchlist[stock]?.ticker)
                            );
                            await dispatch(getAllInWatchList());
                          }}
                        >
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
