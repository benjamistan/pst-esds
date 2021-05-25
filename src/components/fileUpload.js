import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Container, Typography, List, ListItem } from '@material-ui/core';

const S3_BUCKET = 'pst-incident-files';
const REGION = 'eu-west-2';

AWS.config.update({
	accessKeyId: 'AKIAQDNR2JQWYE3LUB7Y',
	secretAccessKey: '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',
});

const bucket = new AWS.S3({
	params: { Bucket: S3_BUCKET },
	region: REGION,
});

const FileList = () => {
	const [progress, setProgress] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileInput = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const uploadFile = (file) => {
		const params = {
			ACL: 'public-read',
			Body: file,
			Bucket: S3_BUCKET,
			Key: file.name,
		};

		bucket
			.putObject(params)
			.on('httpUploadProgress', (evt) => {
				setProgress(Math.round((evt.loaded / evt.total) * 100));
			})
			.send((err) => {
				if (err) console.log(err);
			});
	};

	return (
		<Container>
			<div>
				<div>Native SDK File Upload Progress is {progress}%</div>
				<input type='file' onChange={handleFileInput} />
				<button onClick={() => uploadFile(selectedFile)}>Upload File</button>
			</div>
			<List>
				<ListItem>filename</ListItem>
				<ListItem>filename</ListItem>
			</List>
			{/* <Typography component='div' style={{ height: '50vh' }}>
                This is the file list
            </Typography> */}
		</Container>
	);
};

export default FileList;
