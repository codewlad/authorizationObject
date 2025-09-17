import { Container, Button } from './styles';

export function NavButton({ categories }) {
	return (
		<Container>
			{
				categories && categories.length > 0 && categories.map((item, index) =>
					<Button key={index}>{item.categoryName}</Button>)
			}
		</Container>

	)
};
