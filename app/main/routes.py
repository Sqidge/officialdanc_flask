import datetime
import json
import os

import requests
from boto3.dynamodb.conditions import Key
from flask import render_template, send_from_directory, request
from app.main import bp
from flask import current_app

EDITS = {}
try:
    with open(os.path.join(current_app.config['APP_STATIC'],'edits', 'edits.json')) as f:
        EDITS = json.loads(f.read())
except Exception as e:
    pass


def get_events():
    response = current_app.config['DYNAMO_TABLE'].query(
        KeyConditionExpression=Key('event_id').eq(0) & Key('timestamp').gt(int(datetime.datetime.now().timestamp()))
    )
    if len(response['Items']) > 0:
        return response['Items']
    return None


@bp.route('/')
def index():
    return render_template('index.html', title='Home', events=get_events(), banner=True)

@bp.route('/privacy')
def privacy():
    return render_template('privacy.html')

@bp.route('/robots.txt')
@bp.route('/sitemap.xml')
@bp.route('/favicon.ico')
def static_from_root():
    return send_from_directory(current_app.config['APP_STATIC'], request.path[1:])
