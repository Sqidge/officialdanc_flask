import logging
import os
from datetime import datetime
from logging.handlers import RotatingFileHandler
from flask import Flask
from flask_bootstrap import Bootstrap
from config import Config
from flask_login import LoginManager
from flask_dynamo import Dynamo
from flask_awscognito import AWSCognitoAuthentication
from flask_cognito import CognitoAuth

login = LoginManager()
login.login_view = 'auth.login'
bootstrap = Bootstrap()
dynamo = Dynamo()
aws_auth = AWSCognitoAuthentication()
cogauth = CognitoAuth()


def create_app(config_class=Config):
    app = Flask(__name__)

    app.config.from_object(config_class)

    login.init_app(app)
    bootstrap.init_app(app)
    dynamo.init_app(app)
    aws_auth.init_app(app)
    cogauth.init_app(app)

    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    with app.app_context():
        from app.auth import bp as auth_bp
        app.register_blueprint(auth_bp, url_prefix='/auth')

    with app.app_context():
        from app.main import bp as main_bp
        app.register_blueprint(main_bp)

    @app.template_filter('datetimeformat')
    def datetimeformat(value):
        return datetime.fromtimestamp(value).strftime('%d/%m/%Y %-I%p')

    @app.template_filter('datetimeHMformat')
    def datetimeHMformat(value):
        dt = datetime.fromtimestamp(value)
        dts = dt.strftime('%Y-%m-%d %H:%M')
        return dts

    if not app.debug and not app.testing:
        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/officaldanc.log',
                                           maxBytes=10240, backupCount=10)
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s '
            '[in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('Microblog startup')

    return app
