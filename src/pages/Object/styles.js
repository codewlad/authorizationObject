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
	gap: 1.6rem;

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

export const BaseData = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;	
	border-radius: 8px;
	overflow: hidden;

	border: 1px solid ${({ theme }) => theme.COLORS.BORDER};

	@media (max-width: 1000px) {
		border: none;
	}
`

export const HeadData = styled.div`
	display: flex;
	flex: 1;

	width: 100%;
	background-color: #303030;

	@media (max-width: 1000px) {
		display: none;
	}
`

export const Column = styled.div`
	 display: flex;
	 align-items: center;
	 flex: 1;

	 height: 4.8rem;
	 padding: 0 1rem;

	@media (max-width: 1000px) {
		padding: 0;
		margin: 0 1rem;
	}
`

export const BodyData = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (max-width: 1000px) {
		gap: 2rem;
	}
`

export const Row = styled.div`
	display: flex;

	width: 100%;

	&:hover {
		filter: brightness(0.95);
	}

	&:nth-child(even){
		background-color: #434343;
	}

	&:nth-child(odd){
		background-color: #4b4b4b;
	}

	span {
		display: none;
		padding-right: 0.4rem;
	}

	@media (max-width: 1000px) {
		padding: 1rem 0;
		border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
		border-radius: 8px;

		span {
			display: flex;
			font-weight: bold;
		}
	}

	@media (max-width: 400px) {
		flex-direction: column;
		gap: 1rem;
	}
`

export const RowData = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const ButtonsData = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.4rem;
	padding: 0 1rem;
`

export const Spacer = styled.div`
	width: 10.4rem;
	padding: 0 1rem;
`

