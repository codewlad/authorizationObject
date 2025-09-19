import { TfiTrash } from "react-icons/tfi";

import { Button, Container } from './styles';

export function DeleteButton({ display, onClick }) {

	return (
		<Container>
			<Button $display={display} onClick={onClick}><TfiTrash /></Button>
		</Container>
	);
}
