# AWS S3 Object Lambda Workshop

This repo contains code and instructions to build S3 Object Lambda. It is split into 3 branches, each containing instructions and code for a different use-case.

### S3 and S3 Object Lambda
S3 or Simple Storage Service provides object storage in a scalable and secure environment. 

Sometimes, however, you want to be able to share different versions/views of your objects.  Traditionally this would be done by creating multiple copies of the objects or adding your own proxy layer in front of the S3 bucket, both of which are complex and difficult to develop and maintain.

With S3 object lambda, you can write your own function which can process, transform or alter your files in any way you please before it is returned to your application or user. 

Example Use Cases:
- If you have a CSV file which needs to be translated into XML for one application and into JSON for another. 
- Removing sensitive or PII from documents used for analytics
- Image editing (resize, reshaping, watermarking etc.) on the fly
- Adding finer access controls to objects such as authorisation against a database

Important Note:
To maintain consistency, we will only use US East (N. Virginia) (us-east-1) region for this workshop. 
