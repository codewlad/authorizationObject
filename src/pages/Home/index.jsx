import React, { useState } from 'react';

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

	return (
		<Container>
			<Header backButtonDisplay={false} />
			<Search
				placeholder={'Digite um texto a ser buscado...'}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<NavButton categories={filteredCategories} />
			{filteredCategories.map((categorie, index) => (
				<HomeSection
					title={categorie.categoryName}
					menus={categorie.menus}
					key={index}
				/>
			))}
		</Container>
	);
}
