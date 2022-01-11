import React from 'react';
import * as S from './styles';
import img1 from '../../assets/bloco_final_image.svg';


const Membership = () => {
	return (
		<S.Wrapper id='membership'>
			<div className='containerInfos'>
				<div className='infos'>
					<h1>Join our membership to get special offer</h1>

					<div className='join'>
						<input type='text' placeholder='Enter your email adress' />
						<button>Join</button>
					</div>
				</div>
			</div>
			<div className='illustration'>
				<img src={img1} alt='Illustration' />
			</div>
		</S.Wrapper>
	);
};

export default Membership;
