import { BackButton } from '../BackButton';
import { BackButtonSpace, Container, Logo, UserButton } from './styles';

export function Header({ backButtonDisplay }) {
	return (
		<Container>
			<BackButtonSpace><BackButton display={backButtonDisplay} /></BackButtonSpace>
			<Logo />
			<UserButton />
		</Container>
	);
}
