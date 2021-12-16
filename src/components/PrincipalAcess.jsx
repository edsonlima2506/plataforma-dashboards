import '../styles/principalAcess.css';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto'

Chart.register(CategoryScale)
export default function PrincipalAcess() {
    return(
        <div className="principalAcess">
          <Bar
            data={
              {
                labels: ['Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [{
                  label: 'Acessos',
                  data: [37 ,52, 31, 49, 26, 10],
                  backgroundColor: [
                    '#0B9851',
                    '#0B9851',
                    '#0B9851',
                    '#0B9851',
                    '#0B9851',
                    '#0B9851',
                  ] 
                }],
            }}
            height={ 100 }
            width={ 200 }
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
    );
}