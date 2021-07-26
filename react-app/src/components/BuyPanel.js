import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from '../store/portfolioStore';
import { getSingleStock } from '../store/stocksStore';
import "./BuyPanel.css"
import WatchlistAddButton from './WatchlistAddButton';
import { updateStock } from '../store/portfolioStore';
import { updateBalance } from '../store/userStore';

export default function BuyPanel({ ticker }) {


    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const portfolio = useSelector(state => state.portfolio)
    const stocks = useSelector(state => state.stocks)

    useEffect(() => dispatch(getPortfolio()), [dispatch])
    // update user.cash_balance on buys/sells
    // useEffect(()=> ,[portfolio.stock.share_count])

    return (<>


        <div id="buy-panel">
            <div id="buy-1">Buy {ticker} </div>

            <div id="buy-2">
                <span>Cur. Quantity</span>
                <span>{portfolio?.[ticker]?.share_count}</span>
            </div>

            <div id="buy-3">
                <button id='buy' onClick={async () => {
                    await dispatch(updateStock(ticker, "add"));
                    await dispatch(
                        updateBalance(stocks[ticker].currentPrice.slice(1), "subtract")
                    );
                }}>Buy 1</button>
                <br></br>
                <button style={{ "background-color": "salmon" }} id='sell' onClick={async () => {
                    await dispatch(updateStock(ticker, "subtract"));
                    await dispatch(
                        updateBalance(stocks[ticker].currentPrice.slice(1), "add")
                    );
                }}>Sell 1</button>
            </div>

            <div id="buy-4">
                ${user.cash_balance.toFixed(2)} buying power available
            </div>
        </div>


        <br></br>



        <div id="watchlist-wrapper">
            <WatchlistAddButton ticker={ticker} />
        </div>




    </>)
}
