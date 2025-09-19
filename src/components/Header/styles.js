import styled from 'styled-components';

import TrijayLogo from '../../assets/icone-vermelho.svg';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	z-index: 9999;

	width: 100%;
	height: 6rem;
	padding: 0 2rem;

	background-color: #3e3e3e;
	box-shadow: #00000033 0px 5px 4px 0px;

	@media (max-width: 520px) {
		padding: 0 1rem;
	}
`;

export const BackButtonSpace = styled.div`
	width: 4.2rem;
	height: 4.2rem;
`

export const UserButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 4.2rem;
	height: 4.2rem;
`

export const Logo = styled.img.attrs({
	src: TrijayLogo,
	alt: 'Logo Trijay',
})`
	width: 3rem;
	height: 3rem;
`;
