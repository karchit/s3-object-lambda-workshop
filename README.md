# AWS S3 Object Lambda Workshop

This repo contains code and instructions to understand and dive deep into AWS S3 Object Lambda. It contains a series of Labs which have been inspired by real industry tested use cases for this feature.

### S3 and S3 Object Lambda
S3 or Simple Storage Service provides object storage in a scalable and secure environment. 

Sometimes, however, you want to be able to share different views of your objects.  Traditionally this would be done by creating multiple copies of the objects or adding your own proxy layer in front of the S3 bucket, both of which are complex and difficult to develop and maintain.

With S3 object lambda, you can write your own function which can process, transform or alter your files in any way you please before it is returned to your application or user. 

Example Use Cases:
- If you have a CSV file which needs to be translated into XML for one application and into JSON for another. 
- Removing sensitive or PII from documents used for analytics
- Image editing (resize, reshaping, watermarking etc.) on the fly
- Adding finer access controls to objects such as authorisation against a database
 *** 

 S3 Object Lambda AWS Video (taken from [here](https://aws.amazon.com/s3/features/object-lambda/))

<a href="http://www.youtube.com/watch?feature=player_embedded&v=uTBgpK07E38" target="_blank"><img src="http://img.youtube.com/vi/uTBgpK07E38/0.jpg" /></a>

Illustration of AWS S3 Object Lambda
![image](https://d1.awsstatic.com/product-page-diagram_S3-Object-Lambda%402x.b5b78c632ed6d6145efb03ab6c338ac4375d1fdf.png)

*** 
Important Note:
- The dependencies for Lab 1-3 lambda are the same, so you can copy-paste in your `lambda_function.py` via the lambda console. You needn't redownload the dependencies and upload the archive until the last Lab, Lab 4.
- Once you're done, be sure to check out the `cleanup` branch to delete your resources.

***
Once you're good to dive in to creating your own Object Lambdas, checkout `Lab1` branch in this repo.
