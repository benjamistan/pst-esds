import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
	return (
		<div>
			<Container>
				<Typography
					component='div'
					style={{ color: 'black', fontSize: '1.5vh', height: '15vh' }}
				>
					&copy; {new Date().getFullYear()} Peter Stanley Training Ltd
				</Typography>
			</Container>
		</div>
	);
};

export default Footer;
