import { FiEdit } from "react-icons/fi";

import { Button, Container } from './styles';

export function EditButton({ display, onClick }) {

	return (
		<Container>
			<Button $display={display} onClick={onClick}><FiEdit /></Button>
		</Container>
	);
}
