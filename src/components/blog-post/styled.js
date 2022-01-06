import styled from 'styled-components';

export const Wrapper = styled.div`
	flex: 1;
	min-width: 348px;

	.containerInfos {
		display: flex;
		flex-direction: column;
		height: 203px;
		padding: 32px 24px;
		justify-content: space-between;

		h1 {
			font-size: 1.5em;
			color: var(--theme-blue1);
		}
	}
	.infosAuthor {
		display: flex;

		gap: 8px;
	}
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	}

	@media (max-width: 500px) {
		min-width: 200px;

		.containerInfos {
			display: flex;
			flex-direction: column;
			height: 150px;
			padding: 20px 16px;
			justify-content: space-between;

			h1 {
				font-size: 1em;
			}
		}
		.infosAuthor {
			display: flex;
			gap: 4px;
			img {
				max-width: 50px;
			}
		}
	}
`;
