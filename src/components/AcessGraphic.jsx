import React from 'react';
import '../styles/principalAcess.css';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import { acess } from '../data/users';

export default function AcessGraphic() {
    return(
      <div className="principalAcess">
        <Bar
            data-testid="acessGraph"
            data={
              {
                labels: acess.mounths,
                datasets: [{
                  label: 'Acessos',
                  data: acess.values,
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