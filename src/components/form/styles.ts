import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.form {
		width: 100%;
    display: flex;
    flex-direction: column;
    border: 3px solid var(--theme-green);
    padding: 20px;
    gap:5px;
	}

  label{
    font-family: 'Mulish', sans-serif;
    color: var(--theme-blue1);
  }

  .field{
    border: 2px solid var(--theme-green);
    padding:5px;
    font-family: 'Mulish', sans-serif;
  }

  .error {

        h1{
          color:red;
          font-family: 'Mulish', sans-serif;
          font-size: .875em;
        }
      }

  button{
    width:100px;
    align-self: center;
    background-color: var(--theme-green);
    padding:10px;
    color:var(--theme-blue1);
    font-weight: 700;
    text-transform: uppercase;
  }    
`;


