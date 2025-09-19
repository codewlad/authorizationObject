import { FiPlusCircle } from "react-icons/fi";

import { Button, Container } from './styles';

export function AddButton({ display, onClick }) {

	return (
		<Container>
			<Button $display={display} onClick={onClick}><FiPlusCircle />Novo</Button>
		</Container>
	);
}
