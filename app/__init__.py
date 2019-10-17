import os

from flask import Flask

from app import settings

application = Flask(__name__)
with open(os.path.join(settings.APP_ROOT, 'static/KEYS/secret_key')) as f:
    key = f.read()
application.secret_key = key


from app import routes