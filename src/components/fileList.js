import React from 'react';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import paragraph from '../assets/paragraph.png';

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
        <div class="ui main text container">
            <h1 class="ui header">Semantic UI Fixed Template</h1>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>A text container is used for the main container, which is useful for single column layouts</p>
            <img class="wireframe" src={paragraph} />
            <img class="wireframe" src={paragraph} />
            <img class="wireframe" src={paragraph} />
            <img class="wireframe" src={paragraph} />
            <img class="wireframe" src={paragraph} />
            <img class="wireframe" src={paragraph} />
        </div>
    );  
};

export default FileList;