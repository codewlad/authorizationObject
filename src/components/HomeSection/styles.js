import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;	
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 1.6rem;

	width: 100%;
	padding: 0 4.5rem;

	@media (max-width: 520px) {
        padding: 0 1rem;      
    }
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
	gap: 2rem;
	width: 100%;
`

export const H4 = styled.h4`
	width: 100%;
	color: rgb(225, 225, 225);
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    text-transform: uppercase;
	font-size: 24px;
`;
