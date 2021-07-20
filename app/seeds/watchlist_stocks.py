from app.models import db, WatchlistStocks


def seed_watchlist():
    user1stock1 = WatchlistStocks(
        ticker='AAPL', user_id=1)
    user1stock2 = WatchlistStocks(
        ticker='TSLA', user_id=1)
    user2stock1 = WatchlistStocks(
        ticker='JPM', user_id=2)

    db.session.add(user1stock1)
    db.session.add(user1stock2)
    db.session.add(user2stock1)

    db.session.commit()

    print('hello')

def undo_watchlist():
    db.session.execute('TRUNCATE portfolio_stocks RESTART IDENTITY CASCADE;')
    db.session.commit()
