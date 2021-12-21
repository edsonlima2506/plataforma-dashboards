import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import PrincipalPage from '../pages/PrincipalPage';

beforeEach(() => {
    renderWithRouter(<PrincipalPage />);
});

describe('Testa tela principal', () => {
    test('Testa se possui um header na tela', () => {
        const headerEl = screen.getByTestId('header');
        expect(headerEl).toBeInTheDocument();
    });
});