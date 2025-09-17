import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { Container } from './styles';

export function BackButton({ display }) {
	return (
		<Link to="/">
			<Container $display={display}>
				<FiHome size={20} />
			</Container>
		</Link>
	)
}
