import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolio } from '../store/portfolioStore'
// import Stock from './Stock'
//import thunks from store

function Portfolio() {
  // const userId = useSelector(state => state.session.user.id)
  // const stocks = useSelector(state => state.stocks)
  const portfolio = useSelector(state => state.portfolio)
  const dispatch = useDispatch()

  const stockArray = []
  for (const stock in portfolio){
    stockArray.push(stock)
  }
  console.log(stockArray)

  useEffect(() => {
    dispatch(getPortfolio())
  }, [dispatch])

  return (
    <>
      <div>
        <div>
          {stockArray.map(stock => { <li>{stock.ticker}</li> })}
          <table>
            <tbody>
              <tr>
                <td>Ticker</td>
                <td>Basis</td>
                <td>Live Price</td>
              </tr>
              <tr>
                {console.log("this is our portfolio--------- ",portfolio)}
                {/* <td>{portfolio.AAPL.ticker}</td> */}
                {/* <td>{portfolio.AAPL.basis}</td> */}
                {/* <td>{stock?.currentPrice}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
