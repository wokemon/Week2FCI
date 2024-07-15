from . import db
from werkzeug.security import generate_password_hash

class User(db.Model):
    __tablename__ = "User"
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=True, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)
    
class Role(db.Model):
    __tablename__ = "Role"
    #Roles: owner(hotel manager), concierge, admin office(admins/operators), F&B/Sommerlier/Tailor/Cartographer/Mechanic
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    permissions = db.relationship("Permission", baclref='role', lazy=True)
    
class Permission(db.Model):
    __tablename__ = "Permission"
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)
    
def has_permission(self, permission_name):
        return any(permission.name == permission_name for permission in self.role.permissions)

def __init__ (self, username, mail, password, role_id):
    self.username = username
    self.email = mail
    self.password = generate_password_hash(password)
    self.role_id = role_id