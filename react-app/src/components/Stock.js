import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';

function Stock() {
  const [stock, setStock] = useState({});
  const stocks = useSelector(state => state.stocks);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => {
          dispatch(getSingleStock('AAPL'));
          setStock(stocks.AAPL);
        }}>AAPL</button>
        <button onClick={() => {
          dispatch(getSingleStock('TSLA'))
          setStock(stocks.TSLA)
        }}>TSLA</button>
        <div>{stock?.ticker} - {stock?.currentPrice}</div>
      </div>
    </>
  );
}
export default Stock;
