import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Container, Typography, List, ListItem } from '@material-ui/core';

const S3_BUCKET = 'esds-incident-files';
const REGION = 'eu-west-2';

const bucket = new AWS.S3({
	params: { Bucket: S3_BUCKET },
	region: REGION,
});

const FileList = () => {
	const [s3Objects, setS3Objects] = useState('objects go here');

	function data() {
		bucket.listObjects(bucket.params, function (err, data) {
			if (err) {
				console.log(err);
			} else {
				setS3Objects(data.Contents);
				console.log('s3Objects: ', s3Objects);
			}
		});
	}

	return (
		<Container>
			<Typography>Data is {s3Objects}</Typography>
		</Container>
	);
};

export default FileList;
