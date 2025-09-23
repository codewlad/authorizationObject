import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ObjectsContext } from '../../context/objectsContext';
import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { AddModal } from '../../components/AddModal';

import { Container, Main } from './styles';

export function ObjectPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { objects, deleteRow, addRow, updateRow } = useContext(ObjectsContext);

	const columnLabels = {
		object: "Objeto de autorização",
		objectName: "Nome do objeto de autorização"
	};

	const idKeys = ["object"];
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
					canCreate={true}
				/>
				<Data
					columnLabels={columnLabels}
					data={objects}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
					canUpdate={true}
					canDelete={true}
				/>
			</Main>

			<AddModal
				visible={modalOpen}
				onClose={closeModal}
				onSubmit={handleSubmit}
				fields={fieldKeys}
				values={formData}
				setValues={setFormData}
				disabledKeys={editing ? idKeys : []}
				idKeys={idKeys}
			/>
		</Container>
	);
}