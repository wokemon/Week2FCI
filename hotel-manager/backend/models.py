from . import db

class User(db.Model):
    __tablename__ = "Personnel"
    
    id = db.Column(db.Integer, primary_key=True)
    FirstName = db.Column(db.String(50), nullable=False)
    LastName = db.Column(db.String(50), nullable=False)
    Email = db.Column(db.String(50), unique=True, nullable=False)
    Password = db.Column(db.String(50), unique=True, nullable=False)
    Permission = db.relationship("Permissions", backref="User", lazy=True)
    
class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullalble=False)
    #Roles: owner(hotel manager), concierge, admin office(admins/operators), F&B/Sommerlier/Tailor/Cartographer/Mechanic
    role_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)