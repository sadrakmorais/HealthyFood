import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;

	div {
		flex: 1;
		img {
			width: 100%;
			height: 100%;
		}
	}
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 136px 20px;
		gap: 32px;

		h1 {
			font-size: 2em;
			color: var(--theme-blue1);
			width: 100%;
			max-width: 414px;
		}

		span {
			width: 100%;
			max-width: 414px;
			color: #bcbcbc;
			font-size: clamp(0.875em, 0.9em + 1vh, 1em);
		}
	}

	@media (max-width: 800px) {
		div {
			min-width: 50%;
			img {
				width: 100%;
				height: 100%;
			}
		}

		section {
			padding: 20px 0;
			gap: 14px;

			h1 {
				font-size: 1.5em;
			}

			span {
				width: 100%;
				max-width: 414px;
				color: #bcbcbc;
				font-size: clamp(0.875em, 0.9em + 1vh, 1em);
			}
		}
	}

	@media (max-width: 500px) {
		div {
			display: none;
		}

		section {
			padding: 0 20px;
			align-items: center;
			text-align: center;
		}
	}
`;
