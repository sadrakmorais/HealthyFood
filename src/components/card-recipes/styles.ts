import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
	border-radius: 5px;
	flex: 1;
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
		transition: 0.3s ease-in-out;
	}

	img {
		border-radius: 0;
	}

	div {
		width: 100%;
		display: flex;
		padding: 0 20px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 5px;
		text-align: initial;
		h1 {
			font-size: 1.5em;
			color: var(--theme-blue1);
			font-weight: 700;
		}
	}

	@media (max-width: 500px) {
		width: 100%;
		div {
			padding: 15px 20px;

			h1 {
				font-size: 1.1em;

				font-weight: 700;
			}
		}
	}

	@media (max-width: 331px) {
		width: 60%;
	}
`;
