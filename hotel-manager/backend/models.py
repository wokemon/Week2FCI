from . import db
from datetime import datetime
from sqlalchemy import DateTime
from werkzeug.security import generate_password_hash

class User(db.Model):
    __tablename__ = "user"
    
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.role_id'),unique=False, nullable=False)
    created_at = db.Column(DateTime, default=datetime.now())
    updated_at = db.Column(DateTime, default=datetime.now(), onupdate=datetime.now())

    #one to one relationship with reservation
    user_reservation = db.relationship('reservation', backref='user', uselist=False)

    #one to one relationship with audit log
    user_audit = db.relationship('audit_log', backref='user', uselist=False)

    #one to one relationship with serive request
    user_service_request = db.relationship('service_request', backref='user', uselist=False)

    def __init__ (self, username, mail, password, role_id):
        self.username = username
        self.email = mail
        self.password = generate_password_hash(password)
        self.role_id = role_id
    
class Role(db.Model):
    __tablename__ = "role"
    #Roles: owner(hotel manager), concierge, admin office(admins/operators), F&B/Sommerlier/Tailor/Cartographer/Mechanic
    
    role_id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(255), nullable=True)

    #one to one with role_permission
    role_role_permission = db.relationship('role_permission', backref='role', uselist=False)

    #one to many relationship with role table, an user can have many role
    roles = db.relationship('role', backref='role')
    
class Permission(db.Model):
    __tablename__ = "permission"
    permission_id = db.Column(db.Integer, primary_key=True)
    permission_name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(255), nullable=True)

    #one to one with role_permission
    permission_role_permission = db.relationship('role_permission', backref='permission', uselist=False)

class Role_permission(db.Model):
    __tablename__ = "role_permission"

    role_permission_id = db.Column(db.Integer, primary_key=True)
    role_id = db.Column(db.Integer, db.ForeignKey('role.role_id'))
    permission_id = db.Column(db.Integer, db.ForeignKey('permission.permission_id'))

class Reservation(db.Model):
    __tablename__ = "reservation"
    
    reservation_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'), nullable=False)
    check_in_date = db.Column(DateTime, default=datetime.now())
    check_out_date = db.Column(DateTime, default=datetime.now(), onupdate=datetime.now())
    status = db.Column(db.String(100), nullable=False, unique=False)
    total_price = db.Column(db.Numeric(10,2), nullable=False)
    created_at = db.Column(DateTime, default=datetime.now())
    updated_at = db.Column(DateTime, default=datetime.now(), onupdate=datetime.now())
    
class Room(db.Model):
    __tablename__ = "room"
    
    room_id = db.Column(db.Integer, primary_key=True)
    #Number from 1-6
    room_number = db.Column(db.Integer, unique=True, nullable=False)
    #Type: Pawn, Rook, Queen, King
    room_type = db.Column(db.String(80), nullable=False)
    status = db.Column(db.Boolean, unique=False)
    price = db.Column(db.Numeric(10,2), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    created_at = db.Column(DateTime, default=datetime.now())
    updated_at = db.Column(DateTime, default=datetime.now(), onupdate=datetime.now())

    #one to one relationship with reservation
    room_reservation = db.relationship('reservation', backref='room', uselist=False)

    #one to many relationship with service_request
    room_service_request = db.relationship('service_request', backref='room')
    
class Service(db.Model):
    __tablename__ = "service"
    
    service_id = db.Column(db.Integer, primary_key=True)
    #Type: Food, beverage, tailor, laundry, cleaning, valet
    service_name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(255), unique=False)
    price = db.Column(db.Numeric(10,2), nullable=False)

    #one to one with service request
    service_service_request = db.relationship('service_request', backref='service', uselist=False)

class Service_request(db.Model):
    __tablename__ = "service_request"
    
    request_id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.service_id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.room_id'), nullable=False)
    status = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(DateTime, default=datetime.now())
    updated_at = db.Column(DateTime, default=datetime.now(), onupdate=datetime.now())

class Audit_log(db.Model):
    __tablename__ = "audit_log"

    log_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    action = db.Column(db.String(100), nullable=False)
    timestamp = db.Column(DateTime, default=datetime.now())