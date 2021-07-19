import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolio } from '../store/portfolioStore'
import Stock from './Stock'
//import thunks from store

function Portfolio() {
  const userId = useSelector(state => state.session.user.id)
  const stocks = useSelector(state => state.stocks)
  const portfolio = useSelector(state => state.portfolio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolio())
  }, [])

  return (
    <>
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Ticker</td>
                <td>Basis</td>
                <td>Live Price</td>
              </tr>
              <tr>
                {console.log(portfolio)}
                {/* <td>{portfolio.aapl.ticker}</td> */}
                {/* <td>{portfolio.aapl.basis}</td> */}
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
