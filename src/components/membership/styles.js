import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	.containerInfos {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.infos {
		h1 {
			font-size: 2em;
			color: var(--theme-blue1);
			max-width: 377px;
		}
	}

	.join {
		max-width: 454px;
		display: flex;
		gap: 16px;
		margin-top: 32px;

		input {
			width: 100%;
			padding: 16px;
			border-radius: 5px;
			border: 1px solid var(--theme-blue1);
		}
	}

	.illustration {
		width: 35%;
		img {
			width: 100%;
			height: 100%;
			max-height: 672px;
		}

		@media (max-width: 1500px) {
			width: 50%;
		}
	}

	@media (max-width: 800px) {
		padding-left: 30px;
		.containerInfos {
			width: 40%;
		}
	}

	@media (max-width: 500px) {
		.infos {
			h1 {
				font-size: 1.2em;
			}
		}

		.join {
			max-width: 454px;
			display: flex;
			gap: 16px;
			margin-top: 32px;

			input {
				width: 100%;
				padding: 10px;
				border-radius: 5px;
				border: 1px solid var(--theme-blue1);
			}
		}
	}
`;
