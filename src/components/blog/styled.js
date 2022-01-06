import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	padding: 10px;
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

	@media (max-width: 800px) {
		h1 {
			font-size: 1.5em;
		}
	}
`;
export const PostList = styled.section`
	display: flex;
	width: 100%;
	margin-top: 32px;
	max-width: 1092px;
	overflow-x: auto;
	gap: 16px;
`;
