import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Principal from '../pages/PrincipalPage';

beforeEach(() => {
    renderWithRouter(<Principal/>);
  });

describe('Testa se os componentes estão na tela', () => {
    test('Deve haver um header na tela', () => {
        const headerElement = screen.getByTestId(/header/i);
        expect(headerElement).toBeInTheDocument();
    });
});