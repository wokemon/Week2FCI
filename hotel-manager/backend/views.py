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
    first_name = data.get('firstName')
    last_name = data.get('lastName')
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
def login_dashboard():
    return "Welcome to your profile"