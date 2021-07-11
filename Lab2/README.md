# AWS S3 Object Lambda Workshop
### Lab 2 - Redact PII using AWS Comprehend

Perform all the steps as you had in Lab 1 with the new code and S3 files in Lab2 directory, except while creating the Lambda you will reuse the IAM role which has permissions to interact with S3 Object Lambda. Also, be sure to review the python code to get an understanding of how comprehend is being leveraged to censor PII. 

1. Add the following Comprehend policy to your inline policy created in Lab 1 
![image](./images/comprehend-policy.png)

2. When creating your lambda, click on _Change default execution role_ and select _Use an existing role_. From the dropdown below, use the Role you had noted down in Lab1. 
![image](./images/existing-role-lambda.png)


#### Challenge 1
As part of this challenge, try to do the following which will require you to go over the response from AWS Comprehend's Detect PII Entities API [found here](https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html):

1. Instead of replacing PII with asterisks, replace it with `<type_of_PII>`. So the string, `My mobile number is 04000 000 000` will be transformed to `My mobile number is <PHONE>`.
2. For the purpose of this challenge, we deem that `NAME` is no longer considered PII. So alter your code so it no longer redacts names from our text. 

<details><summary>Solution</summary>
<p>
One possible solution:
```python
    for entity in filter(lambda pe: pe["Type"].lower() != "name", pii_entities['Entities']):
        secret_entity = original_object[entity["BeginOffset"] : entity["EndOffset"]]
        transformed_object = transformed_object.replace(secret_entity, "<" + entity["Type"] + ">")
```
</p>
</details>

#### Challenge 2
In this challenge you will create another Lambda. 

A third-party application requires access to your bucket and its files. However, business requirements dictate that any file which _contains any_ PII, should not be returned. Instead, if the application requests for a doc with PII, we should return an `Unauthorized` error. 

<details><summary>Hint</summary>
<p>
Detect PII Entities is an expnsive (computationally and otherwise) API call. Does [AWS Comprehend Docs](https://docs.aws.amazon.com/comprehend/latest/dg/API_Operations_Amazon_Comprehend.html) mention any other API which can be used instead?
</p>
</details>
<details><summary>Solution</summary>
<p>
One possible solution:
```python
    for entity in filter(lambda pe: pe["Type"].lower() != "name", pii_entities['Entities']):
        secret_entity = original_object[entity["BeginOffset"] : entity["EndOffset"]]
        transformed_object = transformed_object.replace(secret_entity, "<" + entity["Type"] + ">")
```
</p>
</details>