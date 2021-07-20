import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInWatchList, addNewTicker, deleteTickerThunk } from '../store/watchlistStore';

function Watchlist() {
    const watchlist = useSelector(state => state.watchlist['watchlist']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllInWatchList())
    },[dispatch])

    return (
        <>
            <h1>Hello from watchlist</h1>
            <button onClick={async () => {
                await dispatch(addNewTicker('AAPL'))
                await dispatch(getAllInWatchList())
            }}>ADD AAPL</button>
            <button onClick={async () => {
                await dispatch(addNewTicker('TSLA'))
                await dispatch(getAllInWatchList())
            }}>ADD TSLA</button>
            <button onClick={async () => {
                await dispatch(addNewTicker('SNAP'))
                await dispatch(getAllInWatchList())
            }}>ADD SNAP</button>
            <button onClick={async () => {
                await dispatch(addNewTicker('NOK'))
                await dispatch(getAllInWatchList())
            }}>ADD NOK</button>
            {(watchlist) ?
                Object.keys(watchlist).map((stock)=> {
                    return (
                    <div>
                        {watchlist[stock]?.ticker}
                        <button onClick={async () => {
                            await dispatch(deleteTickerThunk(watchlist[stock]?.ticker))
                            await dispatch(getAllInWatchList())
                        }}>Delete</button>
                    </div>)
                })
                :
                <div>Loading...</div>}
        </>
    );
}
export default Watchlist;
