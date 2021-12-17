import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Principal from '../pages/PrincipalPage';
import 'jest-canvas-mock';

beforeEach(() => {
    renderWithRouter(<Principal/>);
  });

describe('Testa se os componentes estão na tela', () => {
    test('Deve haver um header na tela', () => {
        const headerElement = screen.getByTestId(/header/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('Deve haver um menu lateral na tela', () => {
        const asideElement = screen.getByTestId(/sideMenu/i);
        expect(asideElement).toBeInTheDocument();
    })
});