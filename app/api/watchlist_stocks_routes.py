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
    print('>>>>>>>>>>>', watchlist_stocks)
    return {[stock.to_dict() for stock in watchlist_stocks]} # removed key of 'watchlist'-215pm07/20/21



# make this a post
@watchlist_stocks_routes.route('/<ticker>', methods= ['GET','POST'])
@login_required
def add_to_watchlist():
    new_addition = WatchlistStocks.query.filter(
        WatchlistStocks.ticker == current_user.ticker).one()
    return {[ticker.to_dict() for ticker in new_addition]}



@watchlist_stocks_routes.route('/<ticker>', methods=['GET', 'DELETE'])
def delete_watchlist_ticker(ticker):
    delete_stock = WatchlistStocks.query.get(ticker)
    db.session.delete(delete_stock)
    db.session.commit()

    return delete_stock.to_dict()
