import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import '../styles/principalAcess.css';

export default function AcessGraphic() {
    return(
      <div className="principalAcess">
        <Bar
            data-testid="acessGraph"
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
                  ],
                },
                {
                  label: 'Cadastros',
                  data: [17 ,25, 15, 29, 23, 11],
                  backgroundColor: [
                    '#47E686',
                    '#47E686',
                    '#47E686',
                    '#47E686',
                    '#47E686',
                    '#47E686',
                  ],
                }
              ],
            }}
            height={ 100 }
            width={ 200 }
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