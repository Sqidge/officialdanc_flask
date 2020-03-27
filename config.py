import os
import boto3
from dotenv import load_dotenv
import json
from boto3.session import Session

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))
with open(os.path.join(basedir, 'app/static/KEYS/aws.json')) as f:
    key = json.loads(f.read())


class Config(object):
    APP_root = basedir
    APP_STATIC = os.path.join(basedir, 'app/static')
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    AWS_ACCESS_KEY_ID = key['access_id']
    AWS_SECRET_ACCESS_KEY = key['secret_key']
    AWS_DEFAULT_REGION = 'eu-west-2'
    boto_sess = Session(
        region_name=AWS_DEFAULT_REGION,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    )
    DYNAMO_SESSION = boto_sess
    DYNAMO_CLIENT = boto3.resource('dynamodb')
    DYNAMO_TABLE = DYNAMO_CLIENT.Table('officialdanc_events')
    COGNITO_REGION ='eu-west-2'
    COGNITO_USERPOOL_ID  = key['cognito_id']
    AWS_COGNITO_DOMAIN = 'domain.com'
    AWS_COGNITO_USER_POOL_ID = key['cognito_user_id']
    AWS_COGNITO_USER_POOL_CLIENT_ID = key['cognito_user_client_id']
    AWS_COGNITO_REDIRECT_URL = 'http://localhost:5000/auth/admin'
