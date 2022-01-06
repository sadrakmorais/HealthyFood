import React from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import img1 from '../../assets/marginalia-1188.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const history = useNavigate();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		history('/');

		localStorage.setItem('Dados Cadastro', JSON.stringify(data));
		document.cookie = ` Dados Cadastro=${JSON.stringify(data)}`;
	};
	const checkCEP = (e) => {
		const cep = e.target.value.replace(/\D/g, '');
		console.log(cep);

		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setValue('city', data.localidade);

				data.logradouro
					? setValue('adress', data.logradouro)
					: setValue('adress', 'Endereço não encontrado');

				setValue('uf', data.uf);
			});
	};

	return (
		<S.Wrapper>
			<div className='illustration'>
				<img src={img1} alt='' />
			</div>
			<div className='signup'>
				<h1>Register</h1>

				<S.Form>
					<form onSubmit={handleSubmit(onSubmit)} fullWidth>
						<Box mb={1} fullWidth>
							<span>Name</span>

							<TextField
								variant='standard'
								fullWidth
								autoComplete='name'
								autoFocus
								{...register('name', {
									required: ' ',
								})}
								error={!!errors?.name}
								helperText={errors?.name ? errors.name.message : null}
							/>

							<span>Date of birth</span>
							<TextField
								variant='standard'
								fullWidth
								type='date'
								autoFocus
								{...register('date', {
									required: ' ',
								})}
								error={!!errors?.date}
								helperText={errors?.date ? errors.date.message : null}
							/>
							<span>CPF</span>
							<TextField
								variant='standard'
								fullWidth
								type='string'
								autoFocus
								onBlur={checkCEP}
								{...register('cpf', {
									required: ' ',
									pattern: {
										value: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/i,
									},
								})}
								error={!!errors?.cpf}
								helperText={errors?.cpf ? errors.cpf.message : null}
							/>
							<span>CEP</span>
							<TextField
								variant='standard'
								fullWidth
								type='text'
								{...register('cep', {
									required: ' ',
								})}
								onBlur={checkCEP}
								error={!!errors?.cep}
								helperText={errors?.cep ? errors.cep.message : null}
							/>

							<span>City</span>
							<TextField
								variant='standard'
								fullWidth
								type='string'
								autoFocus
								{...register('city', {
									required: ' ',
								})}
								error={!!errors?.city}
								helperText={errors?.city ? errors.city.message : null}
							/>
							<span>Adress</span>
							<TextField
								variant='standard'
								fullWidth
								type='string'
								autoFocus
								{...register('adress', {
									required: ' ',
								})}
								error={!!errors?.adress}
								helperText={errors?.adress ? errors.adress.message : null}
							/>

							<span>State</span>
							<TextField
								variant='standard'
								fullWidth
								type='string'
								autoFocus
								{...register('uf', {
									required: ' ',
								})}
								error={!!errors?.uf}
								helperText={errors?.uf ? errors.uf.message : null}
							/>
						</Box>
						<Button
							type='submit'
							variant='contained'
							sx={{ background: ' #badc58' }}
							fullWidth>
							REGISTER
						</Button>
					</form>
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
