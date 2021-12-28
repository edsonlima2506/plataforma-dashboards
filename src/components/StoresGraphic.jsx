import '../styles/storesGraphic.css';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import { storeMounths, storesPerMounth } from '../data/stores';

export default function StoresGraphic() {
    return(
        <div className="storesGraph">
            <Line
                data={
                  {
                    labels: storeMounths,
                    datasets: [{
                      label: 'Lojas',
                      data: storesPerMounth,
                      backgroundColor: [
                        '#0B9851',
                        '#0B9851',
                        '#0B9851',
                        '#0B9851',
                        '#0B9851',
                        '#0B9851',
                      ],
                    },
                  ],
                }}
                height={ 100 }
                width={ 200 }
                options={{
                    borderColor: '#111315',
                    hoverBackgroundColor: '#FFFFFF',
                }
                }
            />
        </div>
    );
}