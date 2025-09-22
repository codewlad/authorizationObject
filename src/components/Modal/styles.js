import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 8px;
	width: 90%;
	max-width: 500px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	background: #4b4b4b;
	padding: 2rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	color: #e1e1e6;
	font-size: 3rem;
	cursor: pointer;
`;