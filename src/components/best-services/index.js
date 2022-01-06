import React from 'react';
import * as S from './styles';
import Button from '../button';
import img1 from '../../assets/bloco_services.svg';

const BestServices = () => {
	return (
		<S.Wrapper id='services'>
			<div>
				<img src={img1} alt='' />
			</div>
			<section>
				<h1>The best services ready To serve you</h1>
				<span>
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia, there live the blind texts.
				</span>
				<span>
					Separated they live in Bookmarksgrove right at the coast of the Semantics, a
					large language ocean.
				</span>
				<span>
					A small river named Duden flows by their place and supplies it with the
					necessary regelialia.
				</span>
				<Button style={{ width: '150px' }}>Know More</Button>
			</section>
		</S.Wrapper>
	);
};

export default BestServices;
