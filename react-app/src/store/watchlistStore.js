const LOAD_WATCHLIST = "watchlist/LOAD_WATCHLIST";
const ADD_WATCHLIST = "add_to_watchlist/ADD_WATCHLIST"; //clarification????
const DELETE_WATCHLIST = "delete_watchlist_ticker/DELETE_WATCHLIST";

const loadWatchlist = (watched) => ({
  type: LOAD_WATCHLIST,
  watched,
});

const addTicker = (ticker) => ({
  type: ADD_WATCHLIST,
  ticker,
});

const deleteTicker = (ticker) => ({
  type: DELETE_WATCHLIST,
  ticker,
});

// get for watchlist
export const getAllInWatchList = () => async (dispatch) => {
  const response = await fetch("/api/watchlist-stocks/");
  console.log("watchlist res: ", response);

  if (response.ok) {
    const watched = await response.json();
    dispatch(loadWatchlist(watched));
  }
};

// post for watchlist
export const addNewTicker = () => async (dispatch) => {
  const response = await fetch(`/api/watchlist-stocks/${ticker}`);

  if (response.ok) {
    const ticker = await response.json();
    dispatch(addTicker(ticker));
  }
};

export const deleteTicker = () => async (dispatch) => {
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
      newState[action.watched.ticker] = action.watched;
      return newState;
    case ADD_WATCHLIST:                         // newly added //
      newState = Object.assign({}, state);
      newState[action.ticker.ticker] = action.ticker;
      return newState;                       //check this //
    case DELETE_WATCHLIST:
        newState = Object.assign({}, state)
        newState[action.ticker.ticker] = action.ticker
      return newState;
    default:
      return state;
  }
}
