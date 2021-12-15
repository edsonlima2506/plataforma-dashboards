import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import SideMenu from '../components/SideMenu';

beforeEach(() => {
    renderWithRouter(<SideMenu/>);
  });

describe('Testa se os componentes aparece no menu laterar', () => {
    test('A lista de navegação deve estar na tela', () => {
        const menuList = screen.getByTestId('sideList')
        expect(menuList).toBeInTheDocument()
    })

    test('A lista tem 6 itens', () => {
        const menuItems = screen.getAllByTestId('sideItem')
        expect(menuItems).toHaveLength(6)
    })
});