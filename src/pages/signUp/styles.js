import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	padding: 50px;
	overflow-y: auto;

	.signup {
		width: 70%;
		padding: 50px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
		h1 {
			color: var(--theme-green);
		}

		span {
			color: var(--theme-blue2);
		}
		strong {
			color: var(--theme-blue1);
		}
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 0px;

		.illustration {
			width: 50%;
		}
	}

	@media (max-width: 600px) {
		.signup {
			width: 90%;
		}
	}
`;

export const Form = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	form {
		width: 100%;
	}
`;
