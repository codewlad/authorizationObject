import { Header } from '../../components/Header';
import { HomeSection } from '../../components/HomeSection';
import { NavButton } from '../../components/NavButton';
import { Search } from '../../components/Search';
import { Container } from './styles';

const categories = ['Autorização'];
const menus = ['Campos', 'Objetos'];

export function Home() {
	return (
		<Container>
			<Header />
			<Search placeholder={'Digite um texto a ser buscado...'} />
			<NavButton />
			{categories &&
				categories.length > 0 &&
				categories.map((categorie, index) => (
					<HomeSection
						title={categorie}
						menus={menus}
						key={index}
					/>
				))}
		</Container>
	);
}
