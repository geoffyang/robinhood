import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getSingleStock } from '../store/stocksStore';
import { tickerList } from './assets';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tickersShown, setTickersShown] = useState([]);
  let history = useHistory();

  let tickersRegex = new RegExp(searchQuery, "i")

  const filterTickers = () => {
    if(searchQuery.length > 0) {
      let newTickers = tickerList.filter(ticker => {
        return tickersRegex.test(ticker)
      })
      if (newTickers.length > 9) newTickers.length = 9;
      setTickersShown(newTickers)
    } else if (searchQuery.length === 0) {
      setTickersShown([])
    }
  }

  function handleClick() {
    history.push(`/search-results/${searchQuery}`);
    setSearchQuery('');
    window.location.reload(false);
  }

  function handleClickSuggestions(ticker) {
    history.push(`/search-results/${ticker}`);
    setSearchQuery('');
    window.location.reload(false);
  }

  useEffect(() => {
    tickersRegex = new RegExp(('^' + searchQuery), "i")
    filterTickers()
  }, [searchQuery])

  return (
    <div>
      <div>
        <div>
          <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="search"
            id="search-form"
            class="search-bar-input"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        {/* <button
          type="button"
          className="search-button"
          onClick={handleClick}
        >
          <i class="search-icon">search</i>
        </button> */}
      </div>
      {searchQuery && (
        <div className="suggested-search-box">
          {/* {tickersShown} */}
          {tickersShown.map(ticker => <span onClick={() => {
            handleClickSuggestions(ticker);
          }}>{ticker}</span>)}
        </div>
      )}
    </div>
  );
}
export default Search;
