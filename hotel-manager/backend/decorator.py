from functools import wraps
from flask import g, jsonify

def role_required(permission):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if g.current_user is None:
                return jsonify({"error": "User not logged in"}), 401
            if not g.current_user.has_permission(permission):
                return jsonify({"error": "You do not have permission to perform this action"}), 403
            return f(*args, **kwargs)
        return decorated_function
    return decorator
