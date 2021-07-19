from app.models import db, PortfolioStocks



def seed_portfolio_stocks():
    user1stock1 = PortfolioStocks(
        ticker='AAPL', basis=400.00, share_count=1, user_id=1)
    user1stock2 = PortfolioStocks(
        ticker='TSLA', basis=150.00, share_count=2, user_id=1)
    user2stock1 = PortfolioStocks(
        ticker='JPM', basis=140.50, share_count=1, user_id=2)

    db.session.add(user1stock1)
    db.session.add(user1stock2)
    db.session.add(user2stock1)

    db.session.commit()



def undo_portfolio_stocks():
    db.session.execute('TRUNCATE portfolio_stocks RESTART IDENTITY CASCADE;')
    db.session.commit()
