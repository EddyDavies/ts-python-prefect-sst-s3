import os

def handler(event, context):
  env_var=os.environ.get('TEST_ENV', 'Ya Failed')
  return {
    "statusCode": 200,
    "body": f"Hello, World! {env_var} \n Your request was received at {event['requestContext']['time']}."
  }
