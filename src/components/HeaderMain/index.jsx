import { AddButton } from '../AddButton';
import { Container } from './styles';

export function HeaderMain({ title, description }) {
	return (
		<Container>
			<h2>{title}</h2>
			<p><label>{description}</label></p>
			<AddButton display={true} />
		</Container>
	);
}
