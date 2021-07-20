from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import WatchlistStocks, db, watchlist_stocks


# GET api/watchlist-stocks/		------ backend good => double check front end
# POST api/watchlist-stocks/:ticker
# DELETE api/watchlist-stocks/:ticker




watchlist_stocks_routes = Blueprint('watchlist_stocks', __name__)


# get users ids
@watchlist_stocks_routes.route('/')
@login_required
def watchlist():
    watchlist_stocks = WatchlistStocks.query.filter(
        WatchlistStocks.user_id == current_user.id).all()
    return {'watchlist':[stock.to_dict() for stock in watchlist_stocks]}


@watchlist_stocks_routes.route('/<ticker>', methods=['POST', 'DELETE'])
@login_required
def watchlist_edit(ticker):
    ticker = ticker.upper()
    if request.method == 'DELETE':
        deleted_stock = WatchlistStocks.query.filter(
            WatchlistStocks.user_id == current_user.id,
            WatchlistStocks.ticker == ticker).one_or_none()
        db.session.delete(deleted_stock)
        db.session.commit()
        return deleted_stock.to_dict()

    elif request.method == 'POST':
        stock_already_in_watchlist = WatchlistStocks.query.filter(
            WatchlistStocks.user_id == current_user.id,
            WatchlistStocks.ticker == ticker
        ).one_or_none()

        if stock_already_in_watchlist:
            return stock_already_in_watchlist.to_dict()
        else:
            # check if the ticker exists
            watched_stock = WatchlistStocks(
                ticker=ticker,
                user_id=current_user.id
            )
            db.session.add(watched_stock)
            db.session.commit()
            return watched_stock.to_dict()
