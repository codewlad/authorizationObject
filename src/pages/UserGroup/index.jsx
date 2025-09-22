import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { UserGroupContext } from '../../context/userGroupContext';
import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { UserGroupModal } from '../../components/UserGroupModal';

import { Container, Main } from './styles';

export function UserGroupPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { userGroup, deleteRow, addRow, updateRow } = useContext(UserGroupContext);

	const columnLabels = {
		user: "Usuário",
		group: "Grupo"
	};

	const idKeys = ["user", "group"];
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
					data={userGroup}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
				/>
			</Main>

			<UserGroupModal
				visible={modalOpen}
				onClose={closeModal}
				onSubmit={handleSubmit}
				values={formData}
				setValues={setFormData}
				fieldsConfig={{
					object: { type: 'select', source: 'users', label: 'Usuário' },
					field: { type: 'select', source: 'groups', label: 'Grupo' }
				}}
				disabledKeys={editing ? ['user', 'group'] : []}
			/>

		</Container>
	);
}