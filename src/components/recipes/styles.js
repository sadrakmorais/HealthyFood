import styled from 'styled-components';

export const Recipes = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 50px 30px 98px 30px;
	text-align: center;

	h1 {
		font-size: 1.875em;
		color: var(--theme-blue1);
		font-weight: 700;
	}

	span {
		max-width: 512px;
		width: 100%;
		padding-top: 16px;
		text-align: center;
		color: #9e9baf;
	}

	section {
		width: 100%;
		max-width: 1092px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 36px;
		margin-top: 32px;
		justify-content: space-between;
		padding: 10px;
	}

	@media (max-width: 1080px) {
		margin-top: 50px;
		section {
			grid-template-columns: 1fr;
			padding: 50px 50px 38px 50px;
		}
	}

	@media (max-width: 800px) {
		margin-top: -100px;
		h1 {
			font-size: 1.5em;
		}
	}

	@media (max-width: 500px) {
		margin-top: -180px;

		section {
			gap: 14px;
			margin-top: 20px;
			padding: 0;
		}
	}
`;
