// Import required AWS SDK clients and commands for Node.js.
const AWS = require('aws-sdk');

module.exports = {
    addMedia: async function (req, res) {
        const S3_BUCKET ='artistcontent';
        const REGION ='us-east-2';
        const {file, filename} = req.body;

        AWS.config.update({
            accessKeyId: 'AKIARD6LUUTFREA4QL4A',
            secretAccessKey: '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'
        })

        const myBucket = new AWS.S3({
            params: { Bucket: S3_BUCKET},
            region: REGION,
        })

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: filename
        };

        try {
            myBucket.putObject(params)
            .send((err) => {
                if (err) {
                    console.log(err)
                    res.status(500).send("Error adding media - " + err);
                } else {
                    res.status(200).send("success");
                }
            })
        } catch (err) {
            res.status(500).send("Error adding media - " + err);
        }
        
    },
    deleteMedia: async function(req, res) {
        const S3_BUCKET ='artistcontent';
        const REGION ='us-east-2';
        const {filename} = req.body;

        AWS.config.update({
            accessKeyId: 'AKIARD6LUUTFREA4QL4A',
            secretAccessKey: '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'
        })

        const myBucket = new AWS.S3({
            params: { Bucket: S3_BUCKET},
            region: REGION,
        })


        var params = {  Bucket: S3_BUCKET, Key: filename };

        myBucket.deleteObject(params, function(err, data) {
          if (err) {
              console.log(err, err.stack);  // error
              res.status(500).send("Error Deleting Media - " + err);
          } else {
              res.status(200).send(data);         // deleted successfully
          }
        });
    }
}