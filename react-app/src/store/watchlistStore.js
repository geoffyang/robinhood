const LOAD_WATCHLIST= 'watchlist/LOAD_WATCHLIST'


const loadWatchlist = (watched) => ({
    type: LOAD_WATCHLIST,
    watched,
})

export const getAllInWatchList = () => async dispatch => {
    const res = await fetch('/api/watchlist-stocks')
    console.log(res)
    if (res.ok){
        const watched = await res.json()
        dispatch(loadWatchlist(watched))
    }
}

const initialState = {}
export default function watchListReducer(state = initialState, action){
    let newState = {};
    switch(action.type) {
        case LOAD_WATCHLIST:
            newState = Object.assign({}, state);
            newState[action.watched.ticker] = action.watched;
            return newState;
        default:
            return state;
    }
}
