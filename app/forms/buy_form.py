from flask_wtf import FlaskForm
from wtforms import StringField


class BuyForm(FlaskForm):
    ticker = StringField('ticker')
