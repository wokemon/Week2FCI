from flask import Flask, g, session, current_app as app
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .models import User, db #import User and the database
from .decorator import bp as main_bp #import permission
from local_settings import MAIL_PASSWORD

db = SQLAlchemy()

url = 'mysql+mysqlconnector://root:PhanHieuNghia297!@localhost/users'

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIl_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'hieunghiabeo@gmail.com'
    app.config['MAIL_PASSWORD'] = MAIL_PASSWORD 
    app.secret_key = 'miralec2629'

    db.init_app(app)
    CORS(app)

    with app.app_context():
        from . import views
        db.drop_all()
        db.create_all()

    # Register the main blueprint
    app.register_blueprint(main_bp)
    
    # Request function to load the user
    @app.before_request
    def load_user():
        user_id = session.get('user_id')
        if user_id:
            g.current_user = User.query.get(user_id)
        else:
            g.current_user = None

    return app