import { useState } from 'react';

export function useGenericProvider(initialState, compositeKeys) {
	const [state, setState] = useState(initialState);

	const isSameCompositeKey = (item, id, keys) =>
		keys.every((key) => item[key] === id[key]);

	const deleteRow = (id) => {
		const updatedRows = state.rows.filter((item) => !isSameCompositeKey(item, id, compositeKeys));
		setState({ ...state, rows: updatedRows });
	};

	const addRow = (newItem) => {
		const exists = state.rows.some((item) =>
			isSameCompositeKey(item, newItem, compositeKeys)
		);
		if (!exists) {
			const updatedRows = [...state.rows, newItem];
			setState({ ...state, rows: updatedRows });
		} else {
			console.warn(`O item com chave composta ${compositeKeys.map(k => newItem[k]).join('-')} já existe no sistema.`);
		}
	};

	const updateRow = (updatedItem) => {
		const updatedRows = state.rows.map((item) =>
			isSameCompositeKey(item, updatedItem, compositeKeys) ? updatedItem : item
		);
		setState({ ...state, rows: updatedRows });
	};

	return { state, setState, deleteRow, addRow, updateRow };
}