import styled from 'styled-components';

export const Button = styled.button`
	background: var(--theme-green);
	border-radius: 5px;
	padding: 14px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		transition: 0.3s ease-in-out;
	}

	@media (max-width: 535px) {
		padding: 6px;
	}

	@media (max-width: 370px) {
		padding: 3px;
	}
`;
