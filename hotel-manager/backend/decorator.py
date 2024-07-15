from functools import wraps
from flask import abort, g

def role_required(permission):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            user = getattr(g, 'current_user', None)
            if user is None or not user.has_permission(permission):
                abort(403) #forbidden
            return f(*args, **kwargs)
        return decorated_function
    return decorator
