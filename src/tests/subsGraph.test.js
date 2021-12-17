import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import SubsGraph from '../components/SubsGraph';

describe('Testa o gráfico de assinaturas', () => {
    renderWithRouter(<SubsGraph />);
    test('O gráfico de assinaturas deve estar na tela', () => {
        const graphEl = screen.getByTestId('subsGraph');
        expect(graphEl).toBeInTheDocument();
    });
});