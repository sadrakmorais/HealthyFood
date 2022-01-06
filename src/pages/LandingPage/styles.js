import styled from 'styled-components';

export const Wrapper = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 48px;

	@media (max-width: 1080px) {
		gap: 25px;
	}

	.deactivate {
		opacity: 0;
		transition: 0.6s all ease;
	}
	.active {
		opacity: 1;
		transition: 0.6s all ease;
	}

	.goTop {
		position: fixed;
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		z-index: 5;
		margin: 85vh 0 0 90vw;
		cursor: pointer;

		.icon {
			width: 40px;
			height: 40px;
			background: var(--theme-green);
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			transition: 0.3s all ease;
			&:hover {
				transform: scale(1.2);
				box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
			}
		}
	}
`;
export const Footer = styled.main`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 30px;

	span {
		color: var(--theme-blue1);
		cursor: pointer;
	}
	ul {
		display: flex;
		gap: 32px;
		li {
			color: #9e9baf;
			cursor: pointer;
		}
	}

	@media (max-width: 500px) {
		padding: 20px;

		ul {
			gap: 20px;
		}
	}
`;
