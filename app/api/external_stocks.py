from flask import Blueprint
import requests


external_stocks = Blueprint('external_stocks', __name__)


# /api/external_stocks/:ticker
@external_stocks.route('/<ticker>')
def get_single_stock(ticker):
    httpResponse = requests.get("https://www.styvio.com/api/" + ticker)
    pythonData = httpResponse.json()
    print(pythonData['ticker'] + " - " + pythonData['currentPrice'])
    # return {'ticker': pythonData['ticker'], 'currentPrice': pythonData['currentPrice']}
    return pythonData
