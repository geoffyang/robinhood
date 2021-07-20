import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolio } from '../store/portfolioStore'
import { getSingleStock } from "../store/stocksStore"
// import Stock from './Stock'
//import thunks from store

function Portfolio() {
  // const userId = useSelector(state => state.session.user.id)
  const stocks = useSelector(state => state.stocks)
  console.log("HOW MANY TIMES DOES line 11 run?")
  const portfolio = useSelector(state => state.portfolio)
  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(getPortfolio())
    const stockArray = []
    for (const stock in portfolio) {
      stockArray.push(portfolio[stock])
    }
  }, [dispatch])



  console.log("stock array");

  return (
    <>
      <div>
        <div>
          <table><tbody>
            <tr>
              <td>TICKER</td>
              <td>BASIS</td>
              <td>SHARES</td>
              <td>GAIN/LOSS</td>
            </tr>
            {stockArray.map(s => {
              return (
                <tr key={`${s.ticker}laskjfd`}>
                  <td key={s.ticker}>{s.ticker}</td>
                  <td key={`${s.basis}`}>{s.basis}</td>
                  <td key={`${s.share_count}asdf`}>{s.share_count}</td>

                </tr>
              )
            })}
          </tbody></table>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
