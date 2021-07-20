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



# make this a post
# @watchlist_stocks_routes.route('/<ticker>', methods= ['GET','POST'])
# @login_required
# def add_to_watchlist():
#     new_addition =




@watchlist_stocks_routes.route('/<ticker>', methods=['GET', 'DELETE'])
@login_required
def delete_watchlist_ticker(ticker):
    if request.method == 'DELETE':
        delete_stock = WatchlistStocks.query.filter(
            WatchlistStocks.user_id == current_user.id and WatchlistStocks.ticker == ticker).first()
        db.session.delete(delete_stock)
        db.session.commit()

    return delete_stock.to_dict() # not sure what to do here yet(want to return watchlist minus ticker deletion)
