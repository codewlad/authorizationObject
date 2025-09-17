import { Link } from 'react-router-dom';
import { FiDatabase } from "react-icons/fi";
import { Container, Icon, ButtonTexts, Title, SubTitle, Pipe } from './styles';

export function MenuButton({ title, description, address }) {

	return (
		<Link to={address} state={{ title, description }}>
			<Container>
				<Icon>
					<FiDatabase />
				</Icon>
				<ButtonTexts>
					<Title>{title}</Title>
					<SubTitle>{description}</SubTitle>
				</ButtonTexts>
				<Pipe>|</Pipe>
			</Container>
		</Link>
	)
}
