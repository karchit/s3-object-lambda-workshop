# AWS S3 Object Lambda Workshop
### Lab 3 - Convert CSV to JSON

Perform all the steps as you had in Lab 1 with the new code and S3 files in Lab2 directory, except while creating the Lambda you will reuse the IAM role which has permissions to interact with S3 Object Lambda. 

Consider the new lambda code which converts a csv file into a json stream and returns it back to the object lambda.

As you had in Lab 2, when creating your lambda, click on _Change default execution role_ and select _Use an existing role_. From the dropdown below, use the Role you had noted down in Lab1. 
![image](./images/existing-role-lambda.png)

#### Challenge 1
You can find a csv file with 1,00,00 rows here.
If you upload it to your bucket and try to fetch the JSON of it from your object lambda, you'll see an error message. 

Why could this be happening? And how can you fix it? 

<details><summary>Hint</summary>
<p>

By default, lambda has permissions to write out logs to Cloudwatch. 
Go to _Monitor_ tab in your lambda > Logs > View Logs in Cloudwatch. From there click on "Search Log Group" and you'd notice that a log message *after* your lambda execution has concluded

</p>
</details>

<details>
<summary>Solution</summary>
<p>

Increase your lambda timeout to a  higher value ~ around 10 seconds should be enough for this challenge. 
It is worth noting that S3 Object Lambdas are required to WriteGetObjectResponse within 60 seconds. 

You can do so by going to _Configuration_ tab > General Configuration and change your timeout value. ⏱️

</p>
</details>
