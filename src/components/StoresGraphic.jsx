import '../styles/stores.css';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import { storeMounths, storesPerMounth } from '../data/stores';
import food from '../images/icons/iconsCategories/food.png';
import clothing from '../images/icons/iconsCategories/clothing.png';
import estetic from '../images/icons/iconsCategories/estetic.png';
import perfume from '../images/icons/iconsCategories/perfume.png';
import barber from '../images/icons/iconsCategories/barber.png';

export default function StoresGraphic() {
    return(
        <div>
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
            <section className="categories">
                <h1>Categorias</h1>
                <ul>
                    <li><img src={ food } className="categoryIcon"></img>Alimentação</li>
                    <li><img src={ clothing } className="categoryIcon"></img>Vestuário</li>
                    <li><img src={ estetic } className="categoryIcon"></img>Estética</li>
                    <li><img src={ perfume } className="categoryIcon"></img>Perfumaria</li>
                    <li><img src={ barber } className="categoryIcon"></img>Barbearia</li>
                </ul>
            </section>
        </div>
    );
}