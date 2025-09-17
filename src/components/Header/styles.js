import styled from 'styled-components';

import TrijayLogo from '../../assets/icone-vermelho.svg';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60px;
	background-color: #3e3e3e;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 4px 0px;
`;

export const Logo = styled.img.attrs({
	src: TrijayLogo,
	alt: 'Logo Trijay',
})`
	width: 30px;
	height: 30px;
`;
