import { useLocation } from 'react-router-dom';

import { Header } from '../../components/Header';
import { HeaderMain } from '../../components/HeaderMain';
import { Container, Main } from './styles';

import { activities } from '../../database/db';

export function ActivityPage() {

	const { columns, rows } = activities;

	const location = useLocation();
	const { title, description } = location.state || {};

	return (
		<Container>
			<Header backButtonDisplay={true} />
			<Main>
				<HeaderMain title={title} description={description} />
				{
					(
						columns && columns.length > 0 && columns.map((item, index) =>
							<p key={index}>{item}</p>)
					)
				}
				{
					(
						rows && rows.length > 0 && rows.map((item, index) =>
							<div key={index}>
								<p>{item.actvt}</p>
								<p>{item.actvtName}</p>
							</div>
						)
					)
				}
			</Main>
		</Container>
	);
}
