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
      const singleStock = await dispatch(getSingleStock('AAPL'))
      if(!singleStock) {
        console.log('There should be error handling here!!!(Stock.js component)')
      } else {
        setStock(singleStock);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div>
        {stock}
      </div>
    </>
  );
}
export default Stock;
