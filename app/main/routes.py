import datetime
from boto3.dynamodb.conditions import Key
from flask import render_template
from app.main import bp
import boto3
from flask import current_app




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
