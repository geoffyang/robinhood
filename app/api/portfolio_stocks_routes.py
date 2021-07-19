from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, PortfolioStocks


portfolio_stocks_routes = Blueprint('portfolio_stocks', __name__)


@portfolio_stocks_routes.route('/')  # /api/portfolio/
@login_required
def portfolio():
    portfolio_stocks = PortfolioStocks.query.filter(
        PortfolioStocks.user_id == current_user.id).all()
    return {'portfolio': [stock.to_dict() for stock in portfolio_stocks]}

