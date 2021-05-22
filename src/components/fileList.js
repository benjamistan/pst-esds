import React from 'react';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { Container, Typography } from '@material-ui/core';

const FileList = () => {
	function listS3Objects() {
		const REGION = 'eu-west-2';
		const bucketParams = { Bucket: 'pts-incident-files' };
		const s3 = new S3Client({ region: REGION });
		const run = async () => {
			try {
				const data = await s3.send(new ListObjectsCommand(bucketParams));
				console.log('Success', data);
				return data;
			} catch (err) {
				console.log('Fail', err);
			}
		};
		run();
	}

	return (
		<Container>
			<Typography component='div' style={{ height: '100vh' }}>
				This is the file list
			</Typography>
		</Container>
	);
};

export default FileList;
