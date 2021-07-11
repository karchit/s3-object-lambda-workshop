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

<a href="http://www.youtube.com/watch?feature=player_embedded&v=uTBgpK07E38" target="_blank"><img src="http://img.youtube.com/vi/uTBgpK07E38/0.jpg" width="240" height="180" border="10" /></a>

![image](https://d1.awsstatic.com/product-page-diagram_S3-Object-Lambda%402x.b5b78c632ed6d6145efb03ab6c338ac4375d1fdf.png)

Important Note:
- To maintain consistency, we will only use US East (N. Virginia) (us-east-1) region for this workshop. 
- Once you're done, be sure to check out the `cleanup` branch to delete your resources.


Once you're good to dive in to creating your own Object Lambdas, checkout `Lab1` branch in this repo.