import { useState, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthorizationCheck } from '../../hooks/userAuthorizationCheck';
import { useModal } from '../../hooks/useModal';

import { ProjectsContext } from '../../context/projectsContext';
import { userLogged } from '../../database/db';

import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { ProjectModal } from '../../components/ProjectModal';
import { AuthorizationStatusModal } from '../../components/AuthorizationStatusModal';

import { Container, Main } from './styles';

export function ProjectPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const { title, description } = location.state || {};

	const { projects, deleteRow, addRow, updateRow } = useContext(ProjectsContext);

	const columnLabels = {
		project: "Projeto",
		projectName: "Nome do projeto",
		manager: "Gerente"
	};
	const idKeys = ["project"];
	const fieldKeys = Object.keys(columnLabels);
	const initialFormData = useMemo(
		() => fieldKeys.reduce((acc, key) => ({ ...acc, [key]: "" }), {}),
		[fieldKeys]
	);

	const {
		isOpen: modalOpen,
		values: formData,
		setValues: setFormData,
		isEditing: editing,
		open: openModal,
		close: closeModal
	} = useModal(initialFormData);

	const [authModalVisible, setAuthModalVisible] = useState(false);
	const [modalAlreadyShown, setModalAlreadyShown] = useState(false);

	// Autorizações necessárias
	const authRequest = {
		AuthObject: "PROJECT",
		User: 0,
		Fields: [
			{ Field: "ACTVT", Value: "02" }
		]
	};

	const result = useAuthorizationCheck({ authRequest, userLogged });

	useEffect(() => {
		if (result?.Authorized === false && !modalAlreadyShown) {
			setAuthModalVisible(true);
			setModalAlreadyShown(true);
		}
	}, [result, modalAlreadyShown]);

	const closeAuthModalAndRedirect = () => {
		setAuthModalVisible(false);
		navigate('/');
	};

	const handleSubmit = (data) => {
		editing ? updateRow(data) : addRow(data);
		closeModal();
	};

	return (
		<Container>
			<Header backButtonDisplay />
			<Main>
				<HeaderMain
					title={title}
					description={description}
					onAdd={openModal}
				/>

				<AuthorizationStatusModal
					visible={authModalVisible}
					onClose={closeAuthModalAndRedirect}
					result={result}
				/>

				{result?.Authorized && (
					<Data
						columnLabels={columnLabels}
						data={projects}
						onDelete={deleteRow}
						onEdit={openModal}
						idKeys={idKeys}
					/>
				)}
			</Main>

			<ProjectModal
				visible={modalOpen}
				onClose={closeModal}
				onSubmit={handleSubmit}
				values={formData}
				setValues={setFormData}
				fieldsConfig={{
					project: { type: 'text', source: 'projects', label: 'Projeto' },
					projectName: { type: 'text', source: 'projectsName', label: 'Nome do projeto' },
					user: { type: 'select', source: 'users', label: 'Manager' }
				}}
				disabledKeys={editing ? ['project'] : []}
			/>
		</Container>
	);
}