import os
import json
import logging
from prefect_flow import handler

def main(event, context):
    env_var=os.environ.get('PREFECT_HOME', 'Ya Failed')
    
    handler(event, context)

    return {
        "statusCode": 200,
        "body": f"Hello, World! {env_var} \n Your request was received at {event['requestContext']['time']}."
    }