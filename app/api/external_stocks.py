from flask import Blueprint
import requests


external_stocks = Blueprint('external_stocks', __name__)


# /api/stocks/:ticker
@external_stocks.route('/<ticker>')
def get_single_stock(ticker):
    httpResponse = requests.get("https://www.styvio.com/api/" + ticker)
    pythonData = httpResponse.json()
    return pythonData


# returned object
# {
#     "currentPrice": "$146.39",
#     "ticker": 'aapl'
#     "companyAdress": "yyy",
#     "companyDescription": 'xxx',
#     "dailyPrices": Array[78][],
#     "dailyPrices5MinIntervals": Array[5][],
#     "datesGrow1": "2017",
#     "datesGrow2": "2018",
#     "datesGrow3": "2019",
#     "datesGrow4": "2020",
#     "generalPublicHoldings": "72.3%",
#     "holder0": "The Vanguard Group, Inc.",
#     "holder1": "Berkshire Hathaway, Inc. (Investm...",
#     "holdingsPie": Array[3][],
#     "insiderHoldings": "0.33",
#     "institutionHoldings": "27.49",
#     "invRate": 91,
#     "invScore": "A+",
#     "invWords": "Strong Buy",
#     "liabGrow1": 241270000000,
#     "liabGrow2": 258579999999,
#     "liabGrow3": 248030000000,
#     "liabGrow4": 258550000000,
#     "locationLatty": "37.3228934",
#     "locationLonny": "-122.0322895",
#     "logoURL": "https://logo.clearbit.com/apple.com",
#     "marketCap": 2442897653760,
#     "newsArticle1": "Tencent Agrees to Buy British Game Maker Sumo Group",
#     "newsArticle2": "3 Dividend-Paying Tech Stocks to Buy in July",
#     "newsArticle3": "Here's Why Apple Stock Has Room to Run Higher",
#     "newsArticle4": "Ive used Apple AirPods for years now. Heres what happened when I tried these $40 competitors (psst: theyre good)",
#     "newsArticle5": "How HBO Max, Netflix, Disney+ secured 'dominance' over cable  and the Emmys",
#     "newsDate1": "Jul-19-21 04:03AM",
#     "newsDate2": "Jul-18-21 06:35AM",
#     "newsDate3": "06:10AM",
#     "newsDate4": "Jul-17-21 01:10PM",
#     "newsDate5": "08:21AM",
#     "newsLink1": "https://finance.yahoo.com/news/tencent-offers-buy-british-game-062241542.html",
#     "newsLink2": "https://www.fool.com/investing/2021/07/18/3-dividend-paying-tech-stocks-to-buy-in-july/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article",
#     "newsLink3": "https://www.fool.com/investing/2021/07/18/heres-why-apple-stock-has-room-to-run-higher/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article",
#     "newsLink4": "https://www.marketwatch.com/story/ive-used-apple-airpods-for-years-now-heres-what-happened-when-i-these-40-wireless-earbuds-psst-theyre-pretty-good-01626454374?siteid=yhoof2",
#     "newsLink5": "https://finance.yahoo.com/news/2021-emmy-nominations-how-hbo-max-netflix-disney-secured-dominance-over-cable-networks-121931946.html",
#     "newsSource1": " Bloomberg",
#     "newsSource2": " Motley Fool",
#     "newsSource3": " Motley Fool",
#     "newsSource4": " MarketWatch",
#     "newsSource5": " Yahoo Finance",
#     "numberOfInstitutionsHolding": 4957,
#     "oneMonthPrices": Array[19][],
#     "percentText": "-1.41%",
#     "percentTextYear": "+49.84%",
#     "profitGrowth": Array[4][],
#     "profitGrowthText": "18.74%",
#     "revenueGrowth": Array[4][],
#     "revenueGrowthText": "19.94%",
#     "sharesAmount0": "1,168,888,431",
#     "sharesAmount1": "887,135,554",
#     "sharesAmount2": "700,657,568",
#     "sharesAmount3": "622,994,241",
#     "sharesAmount4": "315,208,490",
#     "sharesAmount5": "249,806,296",
#     "sharesAmount6": "200,552,368",
#     "sharesAmount7": "198,866,995",
#     "sharesAmount8": "167,772,175",
#     "sharesAmount9": "120,891,761",
#     "shortName": "Apple Inc.",
#     "sixMonthPrices": Array[124][],
#     "threeMonthPrices": Array[62][],
#     "ticker": "AAPL",
#     "tradeRate": 91,
#     "tradeScore": "A+",
#     "tradeWords": "Strong Buy",
#     "weeklyPrices": Array[5][],
#     "weeklyPrices30MinIntervals": Array[65][],
#     "yearlyPrices": Array[251][]
# }

