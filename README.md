# AWS S3 Object Lambda Workshop
### Cleanup

Due to several resources being dependent on one another, we'd have to delete them in a specific order. 

Almost all resources that you've created should have your name as suffix. 

1. First off, we'll delete the IAM roles and policies that we've created. Go to [IAM Console](https://console.aws.amazon.com/iam/home#/home) > Roles and delete any that you've created

2. Go to [Lambda console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions) and delete your functions.

3. Go to [Object Lambda Access Points console](https://s3.console.aws.amazon.com/s3/olap?region=us-east-1) and delete 'em.

4. Go to [Access points console](https://s3.console.aws.amazon.com/s3/ap?region=us-east-1) and again kill any you've created.

5. Finally go to the _Buckets_ page, and empty out your S3 buckets. This is required before you can delete them. Once your bucket is empty, you should be able to delete them.

6. That is it! Fin. 