import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;

	background: linear-gradient(to right, #323232 60%, #3a3a3a 100%);
	min-width: 30rem;
	height: 10rem;
	padding: 1.2rem;
	border-radius: 6px;
	border: 1px solid #626262;
	box-shadow: #00000040 3px 4px 4px;
	transition: 0.1s;

	&:hover {
		transition: 0.2s;
		filter: brightness(0.9);
	}
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 5rem;
	height: 5rem;

	border-radius: 50%;
	background-color: #4a4848;

	svg {
		width: 3rem;
		height: 3rem;
		color: ${({ theme }) => theme.COLORS.TRIJAY_COLOR};
	}
`

export const ButtonTexts = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	flex: 1;	

	p {
		border: 1px solid red;
	}
`

export const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
	color: #e1e1e1;
`

export const SubTitle = styled.div`
	font-size: 12px;
	color: #b1b1b1;
`

export const Pipe = styled.div`
	color: #929292;
`