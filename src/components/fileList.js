import React from 'react';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';


const FileList = () => {
    function listS3Objects() {
        const REGION = 'eu-west-2';
        const bucketParams = { Bucket: 'pts-incident-files' };
        const s3 = new S3Client({ region: REGION });
        const run = async () => {
            try {
                const data = await s3.send(new ListObjectsCommand(bucketParams));
                console.log("Success", data);
                return data;
            } catch (err) {
                console.log("Fail", err);
            }
        };
        run();
    };
    
    return (
        <div>List goes here...{listS3Objects()}</div>
    );
    
};

export default FileList;