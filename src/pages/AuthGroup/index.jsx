import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthGroupContext } from '../../context/authGroupContext';
import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { AuthGroupModal } from '../../components/AuthGroupModal';

import { Container, Main } from './styles';

export function AuthGroupPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { authGroup, deleteRow, addRow, updateRow } = useContext(AuthGroupContext);

	const columnLabels = {
		auth: "Autenticação",
		group: "Grupo",
		object: "Objeto",
		field: "Campo",
		value: "Valor"
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
					data={authGroup}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
				/>
			</Main>

			<AuthGroupModal
				visible={modalOpen}
				onClose={closeModal}
				onSubmit={handleSubmit}
				values={formData}
				setValues={setFormData}
				fieldsConfig={{
					auth: { type: 'text', source: '', label: 'Autorização' },
					group: { type: 'select', source: 'groups', label: 'Grupo' },
					object: { type: 'select', source: 'objects', label: 'Objeto' },
					field: { type: 'select', source: 'fields', label: 'Campo' },
					value: { type: 'text', source: '', label: 'Valor' }
				}}
				disabledKeys={editing ? ['project'] : []}
			/>

		</Container>
	);
}