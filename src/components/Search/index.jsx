import { FiSearch } from 'react-icons/fi';

import { Container, Content } from './styles';

export function Search({ placeholder }) {
	return (
		<Container>
			<FiSearch color='#6d6d6d' />
			<Content placeholder={placeholder}></Content>
		</Container>
	);
}
