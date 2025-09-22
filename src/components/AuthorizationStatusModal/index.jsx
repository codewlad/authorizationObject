import React from 'react';
import { Modal } from '../../components/Modal';
import { Message, ReasonText, AuthList, AuthListLine } from './styles';

export function AuthorizationStatusModal({ visible, onClose, result }) {
	if (!result) return null;

	const { Authorized, MissingAuthorizations, Reason } = result;

	return (
		<Modal visible={visible} onClose={onClose} title="Status de Autorização">
			{Authorized ? (
				<Message $authorized={Authorized}>Usuário autorizado.</Message>
			) : (
				<>
					<Message $authorized={Authorized}>Autorizações necessárias.</Message>

					{Reason && (
						<ReasonText>{Reason}</ReasonText>
					)}

					{MissingAuthorizations.length > 0 && (
						<AuthList>
							{MissingAuthorizations.map((miss, index) => (
								<AuthListLine key={index}>- O valor <span>{miss.Value}</span> é obrigatório no campo <span>{miss.Field}</span> para o objeto de autorização <span>{miss.Object}</span>.</AuthListLine>
							))}
						</AuthList>
					)}
				</>
			)}
		</Modal>
	);
}