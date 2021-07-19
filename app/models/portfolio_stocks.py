from .db import db


class PortfolioStocks(db.Model):

    __tablename__ = 'portfolio_stocks'

    id = db.Column(db.Integer, primary_key=True)
    ticker = db.Column(db.VARCHAR(5), nullable=False)
    basis = db.Column(db.Float, nullable=False)
    share_count = db.Column(db.Integer, nullable=False, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)

    owner = db.relationship("User", back_populates="portfolio_stocks")
