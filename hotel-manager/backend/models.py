from . import db

class User(db.Model):
    __tablename__ = "User"
    
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=True, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)
    
class Role(db.Model):
    __tablename__ = "Role"
    #Roles: owner(hotel manager), concierge, admin office(admins/operators), F&B/Sommerlier/Tailor/Cartographer/Mechanic
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    permissions = db.relationship("Permission", baclref='role', lazy=True)
    
class Permission(db.Model):
    __tablename__ = "Permission"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullalble=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)