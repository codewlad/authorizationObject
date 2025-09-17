import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	max-width: 50rem;
	width: 100%;
	height: 4.2rem;
	padding: 0 1.5rem;

	background-color: #2f2f2f;
	color: #e1e1e6;
	border: 1px solid #626262;
	border-radius: 4px;
`;

export const Content = styled.input`
	display: flex;
	align-items: center;
	justify-content: left;

	width: 100%;
	height: 100%;

	color: #e1e1e6;
	outline: none;
	border: none;

	background-color: transparent;

	font: ${({ theme }) => theme.FONTS.UBUNTU_16};

	::placeholder {
		color: #e1e1e6;
	}
`;
