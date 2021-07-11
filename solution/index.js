const { S3 } = require('aws-sdk');
const axios = require('axios').default;
const sharp = require('sharp');

exports.handler = async (event) => {
    const s3 = new S3();

    // Retrieve the operation context object from event. This has info to where the WriteGetObjectResponse request
    // should be delivered and a presigned URL in `inputS3Url` where we can download the requested object from
    const { getObjectContext } = event;
    const { outputRoute, outputToken, inputS3Url } = getObjectContext;

    // In this case we're resizing `.png` images which are stored in S3 and are accessible via the presigned url
    // `inputS3Url`.
    const { data } = await axios.get(inputS3Url, { responseType: 'arraybuffer' });

    // Resizing the image
    const resized = await sharp(data)
        .resize({ width: 256, height: 256 })
        .greyscale()
        .toBuffer();

    // Sending the resized image back to the client
    await s3.writeGetObjectResponse({
        RequestRoute: outputRoute,
        RequestToken: outputToken,
        Body: resized,
    }).promise();

    // Gracefully exit the Lambda function
    return { statusCode: 200 };
}