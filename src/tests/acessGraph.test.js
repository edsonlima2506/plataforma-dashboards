import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import AcessGraphic from '../components/AcessGraphic';

describe('Testa o gráfico de assinaturas', () => {
    renderWithRouter(<AcessGraphic />);
    test('O gráfico de assinaturas deve estar na tela', () => {
        const graphEl = screen.getByTestId('acessGraph');
        expect(graphEl).toBeInTheDocument();
    });
});