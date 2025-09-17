import styled from 'styled-components';

export const Container = styled.div`
	display: ${({ $display }) => ($display ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;

	width: 4.2rem;
	height: 4.2rem;
	
	color: #b1b1b1;
	border: 1px solid rgb(98, 98, 98);
    outline: 0px;
    border-radius: 6px;
    background: linear-gradient(to right bottom, rgb(67, 67, 67) 25%, rgb(98, 98, 98) 100%);
    transition: 0.1s;

	a{
		color: #b1b1b1;
		height: 2rem;
	}

	&:hover {
		transition: 0.2s;
		filter: brightness(0.9);
	}
`