import boto3
import requests

def lambda_handler(event, context):
    object_get_context = event["getObjectContext"]
    request_route = object_get_context["outputRoute"]
    request_token = object_get_context["outputToken"]
    s3_url = object_get_context["inputS3Url"]

    # Get object from S3
    response = requests.get(s3_url)
    original_object = response.content.decode('utf-8')

    comprehend = boto3.client('comprehend')

    """
    Learn more about Detect PII entities feature from AWS Comprehend. 
    AWS Docs: https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html
    Boto3 Docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/comprehend.html#Comprehend.Client.detect_pii_entities
    """
    pii_entities = comprehend.detect_pii_entities(
        Text=original_object,
        LanguageCode='en'
    )

    transformed_object = original_object

    for entity in pii_entities['Entities']:
        secret_entity = original_object[entity["BeginOffset"] : entity["EndOffset"] + 1]
        transformed_object = transformed_object.replace(secret_entity, "*" * len(secret_entity))

    # Write object back to S3 Object Lambda
    s3 = boto3.client('s3')
    s3.write_get_object_response(
        Body=transformed_object,
        RequestRoute=request_route,
        RequestToken=request_token)

    return {'status_code': 200}