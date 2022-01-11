import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const options = ['Healthy Food', 'Blog', 'Join', 'Register'];

const ITEM_HEIGHT = 48;


const LongMenu = ({ ...rest }) => {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event:any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div {...rest}>
			<IconButton
				aria-label='more'
				id='long-button'
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup='true'
				onClick={handleClick}>
				<MoreVertIcon sx={{ color: grey[50] }} />
			</IconButton>
			<Menu
				id='long-menu'
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}>
				{options.map((option) => (
					<MenuItem key={option} onClick={handleClose}>
						{option === 'Healthy Food' ? (
							<Scroll.Link to='recipes' smooth={true} duration={500}>
								{option}
							</Scroll.Link>
						) : option === 'Blog' ? (
							<Scroll.Link to='blog' smooth={true} duration={500}>
								{option}
							</Scroll.Link>
						) : option === 'Join' ? (
							<Scroll.Link to='membership' smooth={true} duration={500}>
								{option}
							</Scroll.Link>
						) : option === 'Register' ? (
							<Link to='/signup'>{option}</Link>
						) : (
							''
						)}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default LongMenu;
