import { Container, H4 } from './styles';

export function HomeSection({ title, menus }) {
	return (
		<Container>
			<H4>{title}</H4>
			{menus &&
				menus.length > 0 &&
				menus.map((menu, index) => <p key={index}>{menu}</p>)}
		</Container>
	);
}
