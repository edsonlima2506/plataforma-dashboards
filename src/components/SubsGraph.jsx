import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

export default function SubsGraph() {
    return(
        <Doughnut
				data-testid="subsGraph"
				data={{
					labels: ['Gratuitos', 'Pagos'],
					datasets: [{
						label: 'Usuários',
						data: [95, 12],
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
	);
}