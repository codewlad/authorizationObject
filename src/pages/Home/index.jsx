import React, { useState, useRef } from 'react';

import { Header } from '../../components/Header';
import { HomeSection } from '../../components/HomeSection';
import { NavButton } from '../../components/NavButton';
import { Search } from '../../components/Search';
import { Container } from './styles';

import { categories } from '../../database/db'

export function HomePage() {

	const [search, setSearch] = useState("");

	const filteredCategories = categories.map((categorie) => {
		const filteredMenus = categorie.menus.filter((menuItem) =>
			menuItem.menu.toLowerCase().includes(search.toLowerCase()) ||
			menuItem.description.toLowerCase().includes(search.toLowerCase())
		);

		return {
			...categorie,
			menus: filteredMenus
		};
	}).filter(categorie => categorie.menus.length > 0);

	const sectionRefs = useRef({});

	filteredCategories.forEach((cat) => {
		if (!sectionRefs.current[cat.categoryName]) {
			sectionRefs.current[cat.categoryName] = React.createRef();
		}
	});

	const scrollToCategory = (categoryName) => {
		const ref = sectionRefs.current[categoryName];
		if (ref?.current) {
			const offset = 7 * 10;
			const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({
				top,
				behavior: 'smooth'
			});
		}
	};

	return (
		<Container>
			<Header backButtonDisplay={false} />
			<Search
				placeholder={'Digite um texto a ser buscado...'}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<NavButton categories={filteredCategories} onNavigate={scrollToCategory} />
			{filteredCategories.map((categorie, index) => (
				<div ref={sectionRefs.current[categorie.categoryName]} key={index}>
					<HomeSection
						title={categorie.categoryName}
						menus={categorie.menus}
					/>
				</div>
			))}
		</Container>
	);
}
