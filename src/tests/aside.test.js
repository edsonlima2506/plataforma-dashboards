import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import SideMenu from '../components/SideMenu';

beforeEach(() => {
    renderWithRouter(<SideMenu/>);
  });

describe('Testa se os componentes aparece no menu lateral', () => {
    test('A lista de navegação deve estar na tela', () => {
        expect(screen.getByTestId('sideList')).toBeInTheDocument()
    });

    test('A lista tem 6 itens', () => {
        expect(screen.getAllByTestId('sideItem')).toHaveLength(6)
    });
});