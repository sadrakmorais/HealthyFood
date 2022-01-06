import styled from 'styled-components';

export const Intro = styled.section`
	width: 100%;
	padding: 0 60px 250px 60px;
	display: flex;
	flex-direction: column;
	z-index: 2;

	@media (max-width: 1080px) {
		padding: 0 30px 160px 30px;
	}

	@media (max-width: 800px) {
		padding: 0 30px 160px 30px;
	}
	@media (max-width: 500px) {
		padding: 0 20px 200px 20px;
	}

	@media (min-width: 1400px) {
		padding-bottom: 300px;
	}

	@media (min-width: 1850px) {
		padding-bottom: 400px;
	}
`;
export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 24px 0;
	h1 {
		font-size: 2em;
		color: var(--theme-green);
	}

	.deactivate {
		display: none;
	}
	ul {
		display: flex;
		align-items: center;
		gap: 32px;
		color: #fff;
		li {
			cursor: pointer;
			border-bottom: 2px solid transparent;
			transition: 0.3s all ease;

			&:hover {
				border-color: #fff;
			}
		}

		button {
			background-color: #fff;
			color: var(--theme-green);
			border-radius: 5px;
			padding: 12px 25px;
			cursor: pointer;
		}
	}

	@media (max-width: 800px) {
		padding: 10px 0;

		h1 {
			font-size: 1.8em;
			width: 200px;
		}
	}

	@media (max-width: 500px) {
		padding: 5px 0;

		h1 {
			font-size: 1.3em;
			width: 100px;
		}
	}

	@media (max-width: 370px) {
		padding: 3px 0;

		h1 {
			font-size: 1.1em;
			width: 100px;
		}
	}
`;

export const Content = styled.div`
	margin-top: 190px;
	width: 40%;

	h1 {
		font-size: 3em;
		color: var(--theme-blue1);
	}
	div {
		margin-top: 32px;
		width: 100%;
		display: flex;
		gap: 16px;

		input {
			width: 100%;
			padding: 16px;
			border-radius: 5px;
			border: 1px solid var(--theme-blue1);
		}
	}

	@media (max-width: 1080px) {
		margin-top: 100px;

		h1 {
			font-size: 2.2em;
		}
		div {
			margin-top: 24px;
			gap: 10px;
			input {
				padding: 10px;
			}
		}
	}

	@media (max-width: 800px) {
		margin-top: 60px;
		h1 {
			font-size: 2em;
		}
		div {
			margin-top: 18px;
			gap: 8px;
			flex-direction: column;
			align-items: flex-start;

			input {
				padding: 6px;
			}
		}
	}

	@media (max-width: 500px) {
		margin-top: 0px;
		h1 {
			font-size: 1.1em;
		}
		div {
			margin-top: 10px;
			gap: 8px;

			input {
				padding: 6px;
			}
		}
	}

	@media (max-width: 370px) {
		margin-top: 0px;
		h1 {
			font-size: 0.75em;
		}
		div {
			margin-top: 6px;
			gap: 6px;

			input {
				font-size: 0.6em;

				padding: 4px;
			}
		}
	}
`;

export const BGINTRO = styled.section`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 1;
	section {
		width: 65%;

		img {
			width: 100%;
			height: 100%;
		}
	}
	@media (min-width: 1400px) {
		section {
			width: 55%;
		}
	}

	@media (max-width: 500px) {
		section {
			width: 60%;
		}
	}
`;
