from flask import Blueprint, jsonify, request
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
@portfolio_stocks_routes.route('/<ticker>', methods=['GET'])
def add_ticker_to_portfolio(ticker):
    # form = BuyForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # ticker = form.data['ticker']
    ticker = ticker.upper()

    stock_already_in_portfolio = PortfolioStocks.query.filter(
        PortfolioStocks.user_id == current_user.id,
        PortfolioStocks.ticker == ticker
    ).one_or_none()

    if stock_already_in_portfolio:
        stock_already_in_portfolio.share_count += 1
        db.session.add(stock_already_in_portfolio)
        db.session.commit()
        return stock_already_in_portfolio.to_dict();
    else:
        purchased_stock = PortfolioStocks(
            ticker=ticker,
            basis=10.00,
            share_count=1,
            user_id=current_user.id
        )
        db.session.add(purchased_stock)
        db.session.commit()
        return purchased_stock.to_dict();
