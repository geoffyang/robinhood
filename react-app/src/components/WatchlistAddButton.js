import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllInWatchList, addNewTicker } from '../store/watchlistStore';

function WatchlistAddButton({ticker}) {
    const dispatch = useDispatch();


    return (
        <div className='add-to-watchlist-container'>
            <button onClick={async () => {
                await dispatch(addNewTicker(ticker))
                await dispatch(getAllInWatchList())
            }}> + </button>
        </div>
    );
}
export default WatchlistAddButton;
