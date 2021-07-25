import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPortfolio } from '../store/portfolioStore'
import { getSingleStock } from "../store/stocksStore"
import { Link } from 'react-router-dom';
import "./Portfolio.css"
//import thunks from store

function Portfolio() {
  const stocks = useSelector(state => state.stocks)
  const portfolio = useSelector(state => state.portfolio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolio())
  }, [dispatch])

  useEffect(() => {
    for (const stock in portfolio) {
      dispatch(getSingleStock(stock))
    }
  }, [portfolio])

  return (
    <>

      <div className="ticker-container-inner">
        <table><tbody>
          <tr>
            <td style={{ "font-weight": "700", "height": "40px" }}>TICKER</td>
            <td style={{ "font-weight": "700", "height": "40px" }}>BASIS</td>
            <td style={{ "font-weight": "700", "height": "40px" }}>SHARES</td>
            <td style={{ "font-weight": "700", "height": "40px" }}>GAIN/LOSS</td>
          </tr>
          {Object.keys(portfolio).map(s => {
            return (
              <tr key={`${portfolio[s].ticker}laskjfd`} className={"portfolio-row"}>
                <Link to={`/asset/${portfolio[s].ticker}`} className={"link-look"}>
                  <td key={portfolio[s].ticker}>{portfolio[s].ticker}</td></Link>
                <td key={`${portfolio[s].basis}`}>{portfolio[s].basis}</td>
                <td key={`${portfolio[s].share_count}asdf`}>{portfolio[s].share_count}</td>
                <td key={`${portfolio[s].gain_loss}`}>{stocks[s]?.currentPrice.slice(1) - portfolio[s].basis}</td>
              </tr>
            )
          })}
        </tbody></table>
      </div>

    </>
  )
}

export default Portfolio;
