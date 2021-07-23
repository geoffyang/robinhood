from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy.orm import query
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/user-balance/<float:amount>/<operator>', methods=['POST'])
@login_required
def user_balance(amount, operator):
    if request.method == 'POST':
        user = User.query.filter(
            User.id == current_user.id).one_or_none()
        if operator == 'add':
            user.cash_balance += amount
        elif operator == 'subtract':
            user.cash_balance -= amount
        db.session.add(user)
        db.session.commit()
    return user.to_dict()
