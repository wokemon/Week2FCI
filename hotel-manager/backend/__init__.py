from flask import Flask, g, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import backend.local_settings
from flask_mail import Mail

db = SQLAlchemy()
mail = Mail()

url = 'mysql+mysqlconnector://root:PhanHieuNghia297!@localhost/hotelmanager'

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'hieunghiabeo@gmail.com'
    app.config['MAIL_PASSWORD'] = backend.local_settings.MAIL_PASSWORD
    app.secret_key = 'miralec2629'

    db.init_app(app)
    mail.init_app(app)
    CORS(app)

    with app.app_context():
        # Register the main blueprint
        from . import views #import permission
        app.register_blueprint(views.bp)
    
        from .models import User #import User
        db.drop_all()
        db.create_all()
    
    # Request function to load the user
    @app.before_request
    def load_user():
        user_id = session.get('user_id')
        if user_id:
            g.current_user = User.query.get(user_id)
        else:
            g.current_user = None

    return app