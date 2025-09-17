import { FiPlusCircle } from "react-icons/fi";

import { Button, Container } from './styles';

export function AddButton({ display }) {

	return (
		<Container>
			<Button $display={display}><FiPlusCircle />Novo</Button>
		</Container>
	);
}
