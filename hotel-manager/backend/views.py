from flask import jsonify, current_app as app, request, Blueprint, session
from .models import User, db
from .decorator import role_required
from werkzeug.security import check_password_hash, generate_password_hash

bp = Blueprint('main', __name__)

@app.route('/home', methods=['POST'])

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if user and check_password_hash(user.password, password):
        session['user_id'] = user.id
        return jsonify({'message': 'Login succesfully'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401
    
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'message:' 'Successfully logged out!'}), 200


@app.route('/signup', methods=['POST'])
@role_required('new_user')
def signup():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    role_id = data.get('role_id')
    
    
    if not all([first_name, last_name, email, password, role_id]):
        return jsonify({"error": "All fields are required"}), 400
    
    try:
        new_user = User(first_name=first_name, last_name=last_name, email=email, password=password, role_id=role_id)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User added successfully!"}), 201
    except Exception as e:
        app.logger.error(f"Error adding user: {e}")
        return jsonify({'error': 'Failed to add user'}), 500

@app.route('/change_password', methods=['POST'])
@role_required('existing_user')
def change_password():
    data = request.get_json()
    current_password = data.get('current_password')
    new_password = data.get('new_password')
    confirm_password = data.get('confirm_password')

    if 'user_id' not in session:
        return jsonify({"error": "You need to be logged in to change your password"}), 401

    user = User.query.get(session['user_id'])

    if not check_password_hash(user.password, current_password):
        return jsonify({"error": "Current password is incorrect"}), 400

    if new_password != confirm_password:
        return jsonify({"error": "New password and confirm password do not match"}), 400

    user.password = generate_password_hash(new_password)
    db.session.commit()

    return jsonify({"message": "Password changed successfully"}), 200