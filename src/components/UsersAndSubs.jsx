import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

export default function UsersAndSubs() {
    return(
    	<Doughnut
				data={{
					labels: ['Gratuitos', 'Pagos'],
					datasets: [{
						label: 'Usuários',
						data: [95, 12],
						backgroundColor: [
							'#0B9851',
							'#000000',
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
			/>);
}