import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { HomeSection } from '../../components/HomeSection';
import { NavButton } from '../../components/NavButton';
import { Search } from '../../components/Search';
import { Container } from './styles';

import { categories, userLogged } from '../../database/db';
import { useAuthorizationCheck } from '../../hooks/userAuthorizationCheck';
import { AuthorizationStatusModal } from '../../components/AuthorizationStatusModal';

export function HomePage() {
	const navigate = useNavigate();
	const [authModalVisible, setAuthModalVisible] = useState(false);
	const [modalAlreadyShown, setModalAlreadyShown] = useState(false);
	const [search, setSearch] = useState("");

	// Autorizações necessárias
	const authRequest = {
		AuthObject: "Z_MENU",
		User: 0,
		Fields: [
			{ Field: "ACTVT", Value: "02" }
		]
	};

	const result = useAuthorizationCheck({ authRequest, userLogged });

	// Filtro combinado: autorizações + busca
	const filteredCatMenus = useMemo(() => {
		const filterValues = result?.Authorizations
			?.filter(f => f.Field === "F_MENU")
			.map(f => f.Value);

		const shouldFilter = filterValues && filterValues.length > 0;

		return categories
			.map(category => {
				const filteredMenus = category.menus
					.filter(menu => {
						// Se houver F_MENU, filtra pelos valores autorizados
						if (shouldFilter && !filterValues.includes(menu.menu)) {
							return false;
						}
						// Aplica filtro de busca
						return (
							menu.name.toLowerCase().includes(search.toLowerCase()) ||
							menu.description.toLowerCase().includes(search.toLowerCase())
						);
					});

				if (filteredMenus.length > 0) {
					return {
						categoryName: category.categoryName,
						menus: filteredMenus
					};
				}

				return null;
			})
			.filter(category => category !== null);
	}, [categories, result, search]);

	// Referências para scroll
	const sectionRefs = useRef({});

	filteredCatMenus.forEach((cat) => {
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

	const closeAuthModalAndRedirect = () => {
		setAuthModalVisible(false);
		navigate('/');
	};

	useEffect(() => {
		if (result?.Authorized === false && !modalAlreadyShown) {
			setAuthModalVisible(true);
			setModalAlreadyShown(true);
		}
	}, [result, modalAlreadyShown]);

	return (
		<Container>
			<AuthorizationStatusModal
				visible={authModalVisible}
				onClose={closeAuthModalAndRedirect}
				result={result}
			/>
			<Header backButtonDisplay={false} />
			{result?.Authorized && (
				<>
					<Search
						placeholder={'Digite um texto a ser buscado...'}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<NavButton categories={filteredCatMenus} onNavigate={scrollToCategory} />
					{filteredCatMenus.map((categorie, index) => (
						<div ref={sectionRefs.current[categorie.categoryName]} key={index}>
							<HomeSection
								title={categorie.categoryName}
								menus={categorie.menus}
							/>
						</div>
					))}
				</>
			)}
		</Container>
	);
}