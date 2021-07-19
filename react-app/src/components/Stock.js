import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSingleStock } from '../store/stocksStore';
// import { useParams } from 'react-router-dom';

function Stock() {
  const [stock, setStock] = useState({});
  // const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const singleStock = await dispatch(getSingleStock('aapl'));
      console.log('this is the singleStock: ', singleStock);
      if(!singleStock) {
        console.log('There should be error handling here!!!(Stock.js component)');
      } else {
        setStock(singleStock);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div>
        {stock.ticker} {stock.currentPrice}
      </div>
    </>
  );
}
export default Stock;
