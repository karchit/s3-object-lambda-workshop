const { S3 } = require('aws-sdk');
const axios = require('axios').default;
const sharp = require('sharp');

exports.handler = async (event) => {
    const s3 = new S3();

    const { getObjectContext } = event;
    const { outputRoute, outputToken, inputS3Url } = getObjectContext;

    const { data } = await axios.get(inputS3Url, { responseType: 'arraybuffer' });

    // Resizing the image
    const resized = await sharp(data)
        .resize({ width: 256, height: 256 })
        .toBuffer();

    await s3.writeGetObjectResponse({
        RequestRoute: outputRoute,
        RequestToken: outputToken,
        Body: resized,
    }).promise();

    return { statusCode: 200 };
}