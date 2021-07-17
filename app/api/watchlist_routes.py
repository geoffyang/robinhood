from models.watchlist_stocks import WatchlistStocks
from flask import Blueprint, jsonify, session, request
from werkzeug.wrappers import AuthorizationMixin
from app.models import watchlist_stocks, User, db,
from flask_login import current_user, login_required




watchlist_routes = Blueprint('watchlist_stocks', __name__)


# get all the stocks first by ticker(abbreviation)
@watchlist_routes.route('/')
@login_required
def all_stocks():
    all_stocks = WatchlistStocks.query.all()
    return {'tickers': [ticker.to_dict() for ticker in all_stocks]}


@watchlist_routes.route('/') #change route if any data returns(dont forget db has no data)
@login_required
def get_one(ticker):
    one_stock = WatchlistStocks.query.get(ticker)
    return one_stock.to_dict()
# HOW AM I GETTING DATA? WHAT TYPE OF DATA AM I GETTING?


# @user_routes.route('/watchlist_stocks', methods=['POST','GET'])
# @login_required






#-----------------------------#


# database schema

# Table users as U {
#     id int[pk, increment] // auto-increment
#     user_name varchar
#     email varchar
#     hashed_password varchar
#     cash_balance float
#     created_at timestamp
#     updated_at timestamp
# }

# Table portfolio_stocks {
#     id int[pk]
#     ticker varchar
#     basis float
#     share_count int
#     user_id int
#     created_at timestamp
#     updated_at timestamp
# }

# Table watchlist_stocks {
#     id int[pk]
#     ticker varchar
#     user_id int
#     created_at timestamp
#     updated_at timestamp
# }

# ---------------------------------------------------------- #

# database table watchlist_stocks

# id = db.Column(db.Integer, primary_key=True)
# ticker = db.Column(db.VARCHAR(5), nullable=False)
# user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)


# GET api/watchlist-stocks /
# POST api/watchlist-stocks/: ticker
# DELETE api/watchlist-stocks/: ticker
