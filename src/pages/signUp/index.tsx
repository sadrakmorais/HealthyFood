import React from 'react';
import * as S from './styles'
import img1 from '../../assets/marginalia-1188.png';
import FormSignup from '../../components/form'

const SignUp = () => {


	return (
		<S.Wrapper>
			<div className='illustration'>
				<img src={img1} alt='' />
			</div>
			<div className='signup'>
				<h1>Register</h1>

				<S.Form>
			<FormSignup/>
				</S.Form>
				<span>
					By proceeding, you agree to the Healthy <strong>Terms of Service</strong>
					Food and confirm that you have read our <strong>Privacy Policy</strong>{' '}
				</span>
			</div>
		</S.Wrapper>
	);
};

export default SignUp;
