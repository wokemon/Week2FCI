from flask import json, g, session, current_app as app, request, Blueprint
from .models import User, Permission, db
from .decorator import role_required

bp = Blueprint('main', __name__)

@app.route('/home', methods=['POST'])

@app.route('/login', methods=['POST'])

@app.route('/logout', methods=['POST'])

@app.route('/signup', methods=['POST'])

@app.route('/change_password', methods=['POST'])
@role_required('existing_user')
def login_dashboard():
    return "Welcome to your profile"