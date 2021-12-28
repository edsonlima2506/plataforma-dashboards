import React from 'react';
import '../styles/principalSubs.css';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)
import { freeUsers, subsUsers } from '../data/users';

export default function SubsGraphic() {
    return(
		<div className="principalSubs">
			<Doughnut
				data-testid="subsGraph"
				data={{
					labels: ['Gratuitos', 'Pagos'],
					datasets: [{
						label: 'Usuários',
						data: [freeUsers, subsUsers],
						backgroundColor: [
							'#0B9851',
							'#47E686',
						],
					}],
				}}
				height={ 80 }
				width={ 150 }
				options={{
			    maintainAspectRatio: false,
					layout: {
				  padding: 20
			    }
			  }}
			/>
		</div>
	);
}