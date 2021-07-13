# AWS S3 Object Lambda Workshop
### Lab 3 - Convert CSV to JSON

In this Lab, our lambda will convert a CSV file to JSON using in-built python functions. Converting CSV to JSON can help us feed data into a REST API.

As you had in Lab 2, update the lambda code by fetching the pip dependencies and recreating your archive uploading it to Lambda via the console.

***

#### Challenge

You can find a csv file with 1,00,00 rows [here](http://eforexcel.com/wp/wp-content/uploads/2017/07/10000-Sales-Records.zip).
If you upload it to your bucket and try to fetch from the object lambda access point, you'll see an error message. 
(N.B: The lambda may successfully process the records w/o an error. If this happens, you can duplicate several thousand records in your to reproduce the error)

Why could this be happening? And how can you fix it? 

<details><summary>Hint</summary>
<p>

By default, lambda has permissions to write out logs to Cloudwatch. 
Go to _Monitor_ tab in your lambda > Logs > View Logs in Cloudwatch. From there click on "Search Log Group" and you'd notice that log message *after* your lambda execution has concluded.

If you cannot see logs or get an error on the Cloudwatch console, you'd need to extend your lambda role. It should already have Cloudwatch log permissions but maybe restricted on `Resources`, so change that to `*` so it has unfettered access to create and add logs.

</p>
</details>

<details>
<summary>Solution</summary>
<p>

Increase your lambda timeout to a  higher value ~ around 10 seconds should be enough for this challenge. 
You can do so by going to _Configuration_ tab > _General Configuration_ and change your timeout value. 

It is worth noting that S3 Object Lambdas are required to WriteGetObjectResponse within 60 seconds. ⏱️


</p>
</details>
