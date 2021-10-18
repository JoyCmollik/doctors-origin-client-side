import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const MobileNavDrawer = () => {
	const anchor = true;
	const [state, setState] = useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
					(text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					)
				)}
			</List>
		</Box>
	);
	return (
		<div>
			<Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon />}</Button>
			<Drawer open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
				{list(anchor)}
			</Drawer>
		</div>
	);
};

export default MobileNavDrawer;
