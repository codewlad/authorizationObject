import { TfiTrash } from "react-icons/tfi";

import { Button, Container } from './styles';

export function DeleteButton({ display, onClick }) {

	return (
		<Container $display={display}>
			<Button onClick={onClick}><TfiTrash /></Button>
		</Container>
	);
}
