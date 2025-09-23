import {
	BaseData,
	BodyData,
	Container,
	Column,
	HeadData,
	Row,
	ButtonsData,
	Spacer,
	RowData
} from './styles';

import { DeleteButton } from '../../components/DeleteButton';
import { EditButton } from '../../components/EditButton';

export function Data({ columnLabels, data, onDelete, onEdit, idKeys = [], canUpdate, canDelete }) {
	const { columns = [], rows = [] } = data;

	const getKeyObject = (item) =>
		idKeys.reduce((acc, key) => ({ ...acc, [key]: item[key] }), {});

	return (
		<Container>
			<BaseData>
				<HeadData>
					{columns.map((col) => (
						<Column key={col}>{columnLabels[col] || col}</Column>
					))}
					<Spacer $display={canDelete} />
					<Spacer $display={canUpdate} />
				</HeadData>

				<BodyData>
					{rows.map((item, index) => (
						<Row key={index}>
							<RowData>
								{columns.map((col) => (
									<Column key={col}>
										<span>{columnLabels[col] || col}:</span> {item[col]}
									</Column>
								))}
							</RowData>

							<ButtonsData>
								<DeleteButton
									display={canDelete}
									onClick={() => onDelete(getKeyObject(item))}
								/>
								<EditButton
									display={canUpdate}
									onClick={() => onEdit(item)}
								/>
							</ButtonsData>
						</Row>
					))}
				</BodyData>
			</BaseData>
		</Container>
	);
}