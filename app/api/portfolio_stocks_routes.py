from flask import Blueprint, jsonify, request
import requests
from flask_login import login_required, current_user
from app.models import db, PortfolioStocks
from app.forms import BuyForm


portfolio_stocks_routes = Blueprint('portfolio_stocks', __name__)

# GET /api/portfolio-stocks/
@portfolio_stocks_routes.route('/')
@login_required
def portfolio():
    portfolio_stocks = PortfolioStocks.query.filter(
        PortfolioStocks.user_id == current_user.id).all()
    return {'portfolio': [stock.to_dict() for stock in portfolio_stocks]}


# /api/portfolio-stocks/:ticker
@login_required
@portfolio_stocks_routes.route('/<ticker>/<add>', methods=['POST'])
def add_ticker_to_portfolio(ticker, add):
    # form = BuyForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # ticker = form.data['ticker']
    ticker = ticker.upper()
    body_data = add
    print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", body_data)

    stock_already_in_portfolio = PortfolioStocks.query.filter(
        PortfolioStocks.user_id == current_user.id,
        PortfolioStocks.ticker == ticker
    ).one_or_none()

    response = requests.get(f"https://www.styvio.com/api/{ticker}")
    data = response.json()
    current_price = float(data['currentPrice'][1:])

    if stock_already_in_portfolio:
        if body_data == 'add':
            expanded_basis = stock_already_in_portfolio.share_count * stock_already_in_portfolio.basis
            stock_already_in_portfolio.share_count += 1
            new_basis = (expanded_basis+current_price) / \
                stock_already_in_portfolio.share_count
            stock_already_in_portfolio.basis = new_basis
        else:
            if stock_already_in_portfolio.share_count > 0:
                stock_already_in_portfolio.share_count -= 1
        db.session.add(stock_already_in_portfolio)
        db.session.commit()
        return stock_already_in_portfolio.to_dict()
    else:
        purchased_stock = PortfolioStocks(
            ticker=ticker,
            basis=current_price,
            share_count=1,
            user_id=current_user.id
        )
        db.session.add(purchased_stock)
        db.session.commit()
        return purchased_stock.to_dict()


@login_required
@portfolio_stocks_routes.route('/<ticker>')
def sell_stock(ticker):
    ticker = ticker.upper()

    stock = PortfolioStocks.query.filter(
        PortfolioStocks.user_id == current_user.id,
        PortfolioStocks.ticker == ticker
    ).one_or_none()

    response = requests.get(f"https://www.styvio.com/api/{ticker}")
    data = response.json()
    current_price = float(data['currentPrice'][1:])

    if stock:
        db.session.remove(stock)
        stock.share_count -= 1
        db.session.add(stock)
        db.session.commit()
        return stock.to_dict()
