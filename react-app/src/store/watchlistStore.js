const LOAD_WATCHLIST = "watchlist/LOAD_WATCHLIST";
const DELETE_WATCHLIST = "watchlist/DELETE_WATCHLIST";

const loadWatchlist = (watched) => ({
  type: LOAD_WATCHLIST,
  watched,
});

const deleteTicker = (ticker) => ({
  type: DELETE_WATCHLIST,
  ticker,
});

// get for watchlist
export const getAllInWatchList = () => async (dispatch) => {
  const response = await fetch("/api/watchlist-stocks/");
  if (response.ok) {
    const watched = await response.json();
    dispatch(loadWatchlist(watched['watchlist']));
  }
};

// post for watchlist
export const addNewTicker = (ticker) => async (dispatch) => {
  const response = await fetch(`/api/watchlist-stocks/${ticker}`, {
      method: 'POST',
  });

  if (response.ok) {
    const watched = await response.json();
    dispatch(loadWatchlist(watched['watchlist']));
  }
};

// DELETE thunk for watchlist
export const deleteTickerThunk = (ticker) => async (dispatch) => {
  const response = await fetch(`/api/watchlist-stocks/${ticker}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const ticker = await response.json();
    dispatch(deleteTicker(ticker));
  }
};

const initialState = {};
export default function watchListReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD_WATCHLIST:
      newState = Object.assign({}, state);
      newState = {...action.watched}
      // newState['watchlist'] = action.watched;
      return newState;
    case DELETE_WATCHLIST:
      newState = {...state}
      delete newState[action.ticker]
      return newState;
    default:
      return state;
  }
}
