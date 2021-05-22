import React from 'react';
import {
	AppBar,
	Link,
	Typography,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='static'>
			<Toolbar variant='dense'>
				<IconButton
					aria-controls='home-menu'
					aria-haspopup='true'
					onClick={handleClick}
				>
					<MenuIcon style={{ color: 'white' }} />
				</IconButton>
				<Menu
					id='home-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem>
						<Link
							href='https://peterstanleytraining.com'
							style={{ color: 'black', textDecoration: 'none' }}
						>
							PST Home
						</Link>
					</MenuItem>
					<MenuItem>
						<Link
							href='https://peterstanleytraining.com'
							style={{ color: 'black', textDecoration: 'none' }}
							href='mailto:info@peterstanleytraining.com'
						>
							Email Us
						</Link>
					</MenuItem>
				</Menu>
				<Typography variant='h6'>Emergency Services Document Store</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
