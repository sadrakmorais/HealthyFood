import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.svg';
import * as S from './styles';
import Button from '../button';
import SearchIcon from '@mui/icons-material/Search';
import LongMenu from '../menu-mobile';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const Intro = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	return (
		<>
			<S.Intro id='intro'>
				<S.Header>
					<h1>Healthy Food</h1>
					<LongMenu className={width < 800 ? 'active' : 'deactivate'} />
					<ul className={width < 800 ? 'deactivate' : 'active'}>
						<Scroll.Link to='recipes' smooth={true} duration={500}>
							<li>HELTHY RECIPES</li>
						</Scroll.Link>
						<Scroll.Link to='blog' smooth={true} duration={500}>
							<li>BLOG</li>
						</Scroll.Link>
						<Scroll.Link to='membership' smooth={true} duration={500}>
							<li>JOIN</li>
						</Scroll.Link>

						<Link to='/signup'>
							<button>REGISTER</button>
						</Link>
					</ul>
				</S.Header>

				<S.Content>
					<h1>Ready for Trying a new recipe?</h1>

					<div>
						<input type='text' placeholder='Search healthy recipes' />
						<Button>
							<SearchIcon />
						</Button>
					</div>
				</S.Content>
			</S.Intro>
			<S.BGINTRO>
				<div></div>
				<section>
					<img src={img1} alt='' />
				</section>
			</S.BGINTRO>
		</>
	);
};

export default Intro;
