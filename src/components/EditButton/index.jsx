import { FiEdit } from "react-icons/fi";

import { Button, Container } from './styles';

export function EditButton({ display, onClick }) {

	return (
		<Container $display={display}>
			<Button onClick={onClick}><FiEdit /></Button>
		</Container>
	);
}
