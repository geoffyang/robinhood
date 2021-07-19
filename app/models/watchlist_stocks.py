from .db import db


class WatchlistStocks(db.Model):

    __tablename__ = 'watchlist_stocks'

    id = db.Column(db.Integer, primary_key=True)
    ticker = db.Column(db.VARCHAR(5), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)

    owner = db.relationship("User", back_populates="watchlist_stocks")
