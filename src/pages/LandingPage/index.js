import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Intro from '../../components/intro';
import Recipes from '../../components/recipes';
import BestServices from '../../components/best-services';
import Blog from '../../components/blog';
import Membership from '../../components/membership';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import * as Scroll from 'react-scroll';

const LandingPage = () => {
	const [goToTop, setGoToTop] = useState(false);

	useEffect(() => {
		const scrollListener = () => {
			window.scrollY > 300 ? setGoToTop(true) : setGoToTop(false);
		};
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, []);

	return (
		<S.Wrapper>
			<Intro />
			<Recipes />
			<BestServices />
			<Blog />
			<Membership />
			<S.Footer>
				<span>© Copyrights 2019 Stack. All Rights Reserved.</span>
				<ul>
					<li>Privacy Policy</li>
					<li>Terms and Conditions</li>
				</ul>
			</S.Footer>

			<div className={goToTop ? 'goTop active' : 'goTop deactivate'}>
				<div className='icon'>
					<Scroll.Link to='intro' smooth={true} duration={500}>
						<ArrowUpwardIcon />
					</Scroll.Link>
				</div>
			</div>
		</S.Wrapper>
	);
};

export default LandingPage;
