# AWS S3 Object Lambda Workshop
### Lab 4 - Image to thumbnail

Altering images is one of the most common Lambda use-cases. It is often used in conjugation with [AWS Rekognition](https://aws.amazon.com/rekognition/) to do some fancy machine-learning stuff. In this lab, we will keep it simple and use open-source image processing libraries to convert images into thumbnails. 

Perform all the steps as you had in Lab 1 with the new code, except while creating the Lambda you will reuse the IAM role which has permissions to interact with S3 Object Lambda. 

We will mix things up in this lab and instead of a python function to manipulate the image, we will use Node.js with its fantastic [sharp](https://sharp.pixelplumbing.com/) package.

Note: Sharp has platform-specific requirements and hence you'll notice the anomalous [package.json](./solution/package.json#L7) installation script. This is not best practice and you would really be using [Docker with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html) and/or [Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). This is however is beyond the scope of this workshop. 

Finally, before you can try this out you'd that you'd also have to increase the execution time of your lambda to ~20 seconds. 

This is the final lab. Once you're done, be sure to check out the `cleanup` branch to delete your resources. 

*** 

#### Image resources
To avoid a copyright notice, I have refrained from adding any images in the [files](./files) folder. However, there are several websites you can use to download stock free images like [Unsplash](https://unsplash.com/images/people)

***

#### Challenge
Fairly easy one once you've had a peek at Sharp API documentation. 
We want to make these thumbnails a bit retro so make the images _greyscale_ before we write it out to object lambda.

</p>
</details>
<details>
<summary>Solution</summary>
<p>

```javascript

const resized = await sharp(data)
    .resize({ width: 256, height: 256 })
    .greyscale() //Add this line. 
    .toBuffer();

```

</p>
</details>

