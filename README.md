# AWS S3 Object Lambda Workshop
### Lab 4 - Image to thumbnail

Perform all the steps as you had in Lab 1 with the new code, except while creating the Lambda you will reuse the IAM role which has permissions to interact with S3 Object Lambda. 

We will mix things up in this lab and instead of a python function to manipulate the image, we will use Node.js with its fantastic [sharp](https://sharp.pixelplumbing.com/) package.

Note: Sharp has platform-specific requirements. Hence, you will notice that the anomalous [package.json](./solution/package.json) installation script. This is not the best practice and you would really be using Docker with Lambda. However, that is beyond the scope of this workshop. If you'd like to learn more, have a look at this [AWS Doc](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html)

Finally, before you can try this out you'd that you'd also have to increase the execution time of your lambda to ~20 seconds. 

*** 

#### Image resources
To avoid a copyright notice, I have refrained from adding any images in the [files](./files) folder which you can use for testing. However, there are several websites you can use to download stock free images like [Unsplash](https://unsplash.com/images/people)

***

#### Challenge
Fairly easy one once you've had a peek at Sharp API documentation. 
We want to make these thumbnails a bit retro so the challenge is to make the images _greyscale_ before we write it out to object lambda.

</p>
</details>
<details>
<summary>Solution</summary>
<p>

```javascript

const resized = await sharp(data)
    .resize({ width: 256, height: 256 })
    .greyscale() //We added this line. 
    .toBuffer();

```

</p>
</details>

