import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
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

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.containerCarousel {
		width: 100%;
		display: flex;
		max-width: 1200px;
		align-self: center;
		margin-top: 32px;
	}

	@media (max-width: 800px) {
		h1 {
			font-size: 1.5em;
		}
	}
`;
