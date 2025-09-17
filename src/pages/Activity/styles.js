import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: calc(100% - 4rem);
	min-height: auto;
	background: #4b4b4b;
    padding: 1.6rem;
	margin: 8rem 2rem 0 2rem;
    border-radius: 1.2rem;
    box-shadow: #00000026 2px 2px 6px;

	@media (max-width: 520px) {
		margin: 7rem 1rem 0 1rem;
		width: calc(100% - 2rem);
	}
`;
