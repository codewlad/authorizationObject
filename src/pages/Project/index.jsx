import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ProjectsContext } from '../../context/projectsContext';
import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { ProjectModal } from '../../components/ProjectModal';

import { Container, Main } from './styles';

export function ProjectPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { projects, deleteRow, addRow, updateRow } = useContext(ProjectsContext);

	const columnLabels = {
		project: "Projeto",
		projectName: "Nome do projeto",
		manager: "Gerente"
	};

	const idKeys = ["project"];
	const fieldKeys = Object.keys(columnLabels);

	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({});
	const [editing, setEditing] = useState(false);

	const openModal = (data = null) => {
		setFormData(
			data || fieldKeys.reduce((acc, key) => ({ ...acc, [key]: "" }), {})
		);
		setEditing(!!data);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setFormData({});
		setEditing(false);
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
					onAdd={() => openModal()}
				/>
				<Data
					columnLabels={columnLabels}
					data={projects}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
				/>
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
					manager: { type: 'select', source: 'groups', label: 'Manager' }
				}}
				disabledKeys={editing ? ['project'] : []}
			/>

		</Container>
	);
}