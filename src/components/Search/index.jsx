import { FiSearch } from 'react-icons/fi';

import { Container, Content, InputSearch } from './styles';

export function Search({ placeholder, value, onChange }) {
	return (
		<Container>
			<Content>
				<FiSearch color='#6d6d6d' />
				<InputSearch
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					id='search'
				/>
			</Content>
		</Container>
	);
}
