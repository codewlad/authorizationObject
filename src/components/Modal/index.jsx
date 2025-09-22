import React from 'react';
import { Overlay, ModalContainer, ModalHeader, CloseButton, Content } from './styles';

export function Modal({ visible, onClose, title, children }) {
	if (!visible) return null;

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					<h2>{title}</h2>
					<CloseButton type="button" onClick={onClose}>
						&times;
					</CloseButton>
				</ModalHeader>
				<Content>{children}</Content>
			</ModalContainer>
		</Overlay>
	);
}