import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
`;

export const Button = styled.div`
	display: ${({ $display }) => ($display ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    background-color: #303030;
    color: ${({ theme }) => theme.COLORS.DEFAULT};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    outline: none;
    height: 4rem;
    width: 4rem;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    transition: 0.1s;
    cursor: pointer;

	&:hover {
		filter: brightness(1.2);
	}
`