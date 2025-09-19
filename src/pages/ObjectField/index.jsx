import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ObjectFieldContext } from '../../context/objectFieldContext';
import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { ObjectFieldModal } from '../../components/ObjectFieldModal';

import { Container, Main } from './styles';

export function ObjectFieldPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { objectField, deleteRow, addRow, updateRow } = useContext(ObjectFieldContext);

	const columnLabels = {
		object: "Objeto de autorização",
		field: "Campo"
	};

	const idKeys = ["object", "field"];
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
					data={objectField}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
				/>
			</Main>

			<ObjectFieldModal
				visible={modalOpen}
				onClose={closeModal}
				onSubmit={handleSubmit}
				values={formData}
				setValues={setFormData}
				fieldsConfig={{
					object: { type: 'select', source: 'objects', label: 'Objeto de autorização' },
					field: { type: 'select', source: 'fields', label: 'Campo' }
				}}
				disabledKeys={editing ? ['object', 'field'] : []}
			/>

		</Container>
	);
}