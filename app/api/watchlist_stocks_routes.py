from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import WatchlistStocks, db



watchlist_stocks_routes = Blueprint('watchlist_stocks', __name__)



@watchlist_stocks_routes.route('/')
@login_required
def watchlist():
    print('---------------------------------------------------------')
    watchlist_stocks = WatchlistStocks.query.filter(
        WatchlistStocks.user_id == current_user.id).all()
    print('>>>>>>>>>>>', watchlist_stocks)
    return {'watchlist': [stock.to_dict() for stock in watchlist_stocks]}
