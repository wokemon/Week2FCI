from flask import json, current_app as app, request
from .models import User, Permission, db

@app.route('/home', methods=['POST'])
@app.route('/login', methods=['POST'])
@app.route('logout', methods=['POST'])
@app.route('/signup', methods=['POST'])
@app.route('/change_password', methods=['POST'])
def login():
    return 0