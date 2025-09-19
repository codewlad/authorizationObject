import { Container, Button } from './styles';

export function NavButton({ categories, onNavigate }) {
	return (
		<Container>
			{categories.map((item, index) => (
				<Button key={index} onClick={() => onNavigate(item.categoryName)}>
					{item.categoryName}
				</Button>
			))}
		</Container>
	);
}