import React from 'react';
import { Formik ,Field, Form,  FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import getCep from '../../services/api';
import * as S from './styles'




interface personalData {
  name: string;
  email: string;
  birthdate: string;
  cpf: string;
  cep: string;
  street: string;
  city: string;
  state: string;
}

interface Errors {
  name?: string;
  email?: string;
  birthdate?: string;
  cpf?: string;
  cep?: string;
  street?: string;
  city?: string;
  state?: string;
}


const FormSignup = () => {

  const history = useNavigate();

  const checkCEP = (e: any, setFieldValue: any) => {
		const cep = e.target.value.replace(/\D/g, '');
		getCep(cep).then((data) => {
			data.logradouro
			? setFieldValue('street', data.logradouro)
			: setFieldValue('street', 'Street not found');
				setFieldValue('city', data.localidade);
				setFieldValue('state', data.uf);

		}) 
	};

 const validation = (values: personalData) =>{

    const errors = {} as Errors;

    if (!values.name)
      errors.name = 'Insert your name';

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = 'Invalid email';
    else if (!values.email)
      errors.email = 'Insert your email?'

    if (!values.birthdate) {
      errors.birthdate = "Insert your birth?";
    }

    if (!values.cpf) {
      errors.cpf = "Insert your CPF";
    }

    if (!values.cep)
      errors.cep = 'Insert your CEP';

    if (!values.street)
      errors.street = 'Insert your street';

    if (!values.city)
      errors.city = 'Insert your city';

    return errors;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        birthdate: '',
        cpf: '',
        cep: '',
        street: '',
        city: '',
        state: '',
      }}
      validate={validation}
      onSubmit={(

        values: personalData,
        { setSubmitting }: FormikHelpers <personalData>

      ) => {
        
          localStorage.setItem('Dados Cadastro', JSON.stringify(values));
	      	document.cookie = ` Dados Cadastro=${JSON.stringify(values)}`;
          history('/');
          setSubmitting(false);
      }}
    >
      {({ setFieldValue, errors }) => (
        <S.Wrapper>
        <Form className='form'>
          
              <label htmlFor="name">Name</label>
              <Field
                className='field'
                id="name"
                name="name"
                placeholder="Your name" />
              <div className="error">
                <h1>{errors.name}</h1>
              </div>
            
              <label htmlFor="email">Email</label>
              <Field
                className='field'
                id="email"
                name="email"
                placeholder="youremail@123.com"
                type="email"
              />
              <div className="error">
                <h1>{errors.email}</h1>
              </div>

              <label htmlFor="birthdate">Birth date</label>
              <Field
                className='field'
                id="birthdate"
                name="birthdate"
                type="date"
              />
              <div className="error">
                <h1>{errors.birthdate}</h1>
              </div>
         

          
              <label htmlFor="cpf">CPF</label>
              <Field
                className='field'
                id="cpf"
                name="cpf"
                type="text"
                placeholder="12345678910"
                maxlength="11"
              />
              <div className="error">
                <h1>{errors.cpf}</h1>
              </div>

              <label htmlFor="cep">CEP</label>
              <Field
                className='field'
                id="cep"
                name="cep"
                placeholder="55555555"
                type="text"
                accept="number"
                maxlength="8"
                onBlur={(event: any) => checkCEP(event, setFieldValue)}
              />
              <div className="error">
                <h1>{errors.cep}</h1>
              </div>

              <label htmlFor="street">Street</label>
              <Field
                className='field'
                id="street"
                name="street"
                placeholder="Fifth Avenue"
                type="text"
              />
              <div className="error">
                <h1>{errors.street}</h1>
              </div>

              <label htmlFor="state">State</label>
              <Field
                className='field'
                id="state"
                name="state"
                placeholder="NY"
                type="text"
              />
              <div className="error">
                <h1>{errors.state}</h1>
              </div>

              <label htmlFor="city">City / Town</label>
              <Field
                className='field'
                id="city"
                name="city"
                placeholder="New york"
                type="text"
              />
              <div className="error">
                <h1>{errors.city}</h1>
              </div>
        
          <button type="submit">Submit</button>
  
        </Form>
        </S.Wrapper>
      )
      }

    </Formik >
  );

}

export default FormSignup



