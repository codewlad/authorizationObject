import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 3.2rem;

	padding: 0.25rem 1rem;
	background: #969696;
	color: #404040;
	outline: 0px;
	border: 1px solid transparent;
	border-radius: 4px;
	transition: 0.1s;

	&:hover {
		background-color: ${({ theme }) => theme.COLORS.TRIJAY_COLOR};
		border: 1px solid ${({ theme }) => theme.COLORS.TRIJAY_COLOR};
		font-weight: bold;
		color: #ffffff;
	}
`;
