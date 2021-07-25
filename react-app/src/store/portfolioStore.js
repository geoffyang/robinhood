const LOAD_PORTFOLIO = "portfolio/LOAD_PORTFOLIO";
const BUY_STOCK = "portfolio/BUY_STOCK"



const loadPortfolio = portfolio => ({
    type: LOAD_PORTFOLIO,
    portfolio,
});

const addStock = stockObj => ({
    type: BUY_STOCK,
    stockObj
})

export const getPortfolio = () => async dispatch => {
    const response = await fetch('/api/portfolio-stocks/')
    if (response.ok) {
        const portfolio = await response.json()
        dispatch(loadPortfolio(portfolio['portfolio']));
    }
}

export const updateStock = (ticker, operator) => async dispatch => {
    let response
    if(operator === 'add'){
        response = await fetch(`/api/portfolio-stocks/${ticker}/${operator}`, {
            method: 'POST',
            // data: JSON.stringify(add),
        })
    }
    else{
        response = await fetch(`/api/portfolio-stocks/${ticker}/${operator}`, {
            method: 'POST',
            // data: JSON.stringify(add),
        })
    }
    if (response.ok) {
        const purchasedStock = await response.json()
        dispatch(addStock(purchasedStock))
    }
}

const initialState = {}

export default function portfolioReducer(state = initialState, action) {
    let newState = {}
    switch (action.type) {
        case LOAD_PORTFOLIO:
            action.portfolio.forEach(stock => newState[stock.ticker] = stock)
            return newState;
        case BUY_STOCK:
            newState = Object.assign({}, state);
            newState[action.stockObj.ticker] = action.stockObj
            return newState;
        default:
            return state;
    }
}


/* Shape of store

state: {
    "AAPL": {
            "basis": 150.0,
            "id": 2,
            "share_count": 2,
            "ticker": "AAPL",
            "user_id": 1
            },
    "TSLA": {...}

}


*/
