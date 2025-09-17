import { MenuButton } from '../MenuButton';
import { Container, Content, H4 } from './styles';

export function HomeSection({ title, menus }) {
	return (
		<Container>
			<H4>{title}</H4>
			<Content>
				{menus &&
					menus.length > 0 &&
					menus.map((item, index) =>
						<MenuButton
							title={item.menu}
							description={item.description}
							address={item.address}
							key={index}
						/>
					)}
			</Content>
		</Container>
	);
}
