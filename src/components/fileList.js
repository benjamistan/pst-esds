import React, { useState } from 'react';
import { Container, Typography, List, ListItem } from '@material-ui/core';

const FileList = () => {
	const AWS = require('aws-sdk');

	AWS.config.getCredentials(function (err) {
		if (err) console.log(err.stack);
		else {
			console.log('Access key:', AWS.config.credentials.accessKeyId);
			console.log('Region:', AWS.config.region);
		}
	});

	const S3_BUCKET = 'esds-incident-files';
	const REGION = 'eu-west-2';

	const bucket = new AWS.S3({
		params: { Bucket: S3_BUCKET },
		region: REGION,
	});

	const [s3Objects, setS3Objects] = useState(null);

	bucket.listObjects(bucket.params, function (err, data) {
		if (err) {
			console.log(err);
		} else {
			setS3Objects(data.Contents);
			console.log('s3Objects: ', s3Objects);
		}
	});

	return (
		<Container>
			<Typography>Data is {s3Objects}</Typography>
		</Container>
	);
};

export default FileList;
