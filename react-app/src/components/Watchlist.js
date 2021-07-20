import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInWatchList, addNewTicker, deleteTickerThunk } from '../store/watchlistStore';

function Watchlist() {
    // const [] = useState({});
    const watchlist = useSelector(state => state.watchlist['watchlist']);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log(`are we working for watchlist`)
        dispatch(getAllInWatchList())
    },[dispatch])

    return (
        <>
            <h1>Hello from watchlist</h1>
            {/* {console.log(watchlist, '_______________________________', typeof(watchlist))} */}
            {(watchlist) ?
                Object.keys(watchlist).map((stock)=> {
                    console.log('We are now inside of map func')
                    return (
                    <div>
                        {watchlist[stock]?.ticker}
                        <button onClick={()=> dispatch(deleteTickerThunk(watchlist[stock]?.ticker))}>Delete</button>
                    </div>)
                })
                :
                <div>Loading...</div>}
        </>
    );
}
export default Watchlist;
