import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { activities, categories } from '../../database/db';

import { AuthGroupContext } from '../../context/authGroupContext';
import { GroupsContext } from '../../context/groupsContext';
import { ObjectsContext } from '../../context/objectsContext';
import { FieldsContext } from '../../context/fieldsContext';

import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Data } from '../../components/Data';
import { AuthGroupModal } from '../../components/AuthGroupModal';

import { Container, Main } from './styles';

export function AuthGroupPage() {
	const location = useLocation();
	const { title, description } = location.state || {};

	const { authGroup, deleteRow, addRow, updateRow } = useContext(AuthGroupContext);
	const { groups } = useContext(GroupsContext);
	const { objects } = useContext(ObjectsContext);
	const { fields } = useContext(FieldsContext);

	const columnLabels = {
		auth: "Autenticação",
		group: "Grupo",
		object: "Objeto de Autorização",
		field: "Campo",
		value: "Valor"
	};

	const idKeys = ["auth"];
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

	const groupNameMap = Array.isArray(groups?.rows)
		? groups.rows.reduce((acc, item) => {
			acc[item.group] = item.groupName;
			return acc;
		}, {})
		: {};

	const objectNameMap = Array.isArray(objects?.rows)
		? objects.rows.reduce((acc, item) => {
			acc[item.object] = item.objectName;
			return acc;
		}, {})
		: {};

	const fieldNameMap = Array.isArray(fields?.rows)
		? fields.rows.reduce((acc, item) => {
			acc[item.field] = item.fieldName;
			return acc;
		}, {})
		: {};

	const menuNameMap = categories
		.flatMap(category => category.menus)
		.reduce((acc, menu) => {
			acc[menu.menu] = menu.name;
			return acc;
		}, {});

	const activityNameMap = Array.isArray(activities?.rows)
		? activities.rows.reduce((acc, item) => {
			acc[item.actvt] = item.actvtName;
			return acc;
		}, {})
		: {};

	const displayRows = Array.isArray(authGroup?.rows)
		? authGroup.rows.map(row => {
			let displayValue = row.value;

			if (row.field === "F_MENU") {
				displayValue = menuNameMap[row.value] || row.value;
			} else if (row.field === "ACTVT") {
				displayValue = activityNameMap[row.value] || row.value;
			}

			return {
				...row,
				object: objectNameMap[row.object] || row.object,
				group: groupNameMap[row.group] || row.group,
				field: fieldNameMap[row.field] || row.field,
				value: displayValue
			};
		})
		: [];

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
					data={{ columns: authGroup.columns, rows: displayRows }}
					onDelete={(keyObj) => deleteRow(keyObj)}
					onEdit={openModal}
					idKeys={idKeys}
					canUpdate={true}
					canDelete={true}
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
				disabledKeys={editing ? ['auth'] : []}
			/>
		</Container>
	);
}