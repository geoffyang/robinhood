import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllInWatchList, addNewTicker } from '../store/watchlistStore';

function Watchlist() {
    // const [] = useState({});
    // const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log(`are we working for watchlist`)
        dispatch(getAllInWatchList())
    },[dispatch])

    return (
        <>
            <h1>Hello from watchlist</h1>
        </>
    );
}
export default Watchlist;
