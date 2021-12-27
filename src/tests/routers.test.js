import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import SideMenu from '../components/SideMenu';

describe('Testa os links para telas', () => {
    test('Testa se o link Inicio está funcionando', () => {
      const { history } = renderWithRouter(<SideMenu />);
    
      const principalPageLink = screen.getByRole('link', { name: 'Início' });
      expect(principalPageLink).toBeInTheDocument();
      userEvent.click(principalPageLink);
    
      const { pathname } = history.location;
      expect(pathname).toBe('/principal');
    });

    test('Testa se o link Usuários está funcionando', () => {
        const { history } = renderWithRouter(<SideMenu />);
      
        const usersLink = screen.getByRole('link', { name: 'Usuários' });
        expect(usersLink).toBeInTheDocument();
        userEvent.click(usersLink);
      
        const { pathname } = history.location;
        expect(pathname).toBe('/users');
      });

      test('Testa se o link Lojas está funcionando', () => {
        const { history } = renderWithRouter(<SideMenu />);
      
        const storesLink = screen.getByRole('link', { name: 'Lojas' });
        expect(storesLink).toBeInTheDocument();
        userEvent.click(storesLink);
      
        const { pathname } = history.location;
        expect(pathname).toBe('/stores');
      });

      test('Testa se o link Carteira está funcionando', () => {
        const { history } = renderWithRouter(<SideMenu />);
      
        const walletLink = screen.getByRole('link', { name: 'Carteira' });
        expect(walletLink).toBeInTheDocument();
        userEvent.click(walletLink);
      
        const { pathname } = history.location;
        expect(pathname).toBe('/wallet');
      });

      test('Testa se o link Marketing está funcionando', () => {
        const { history } = renderWithRouter(<SideMenu />);
      
        const marketingLink = screen.getByRole('link', { name: 'Marketing' });
        expect(marketingLink).toBeInTheDocument();
        userEvent.click(marketingLink);
      
        const { pathname } = history.location;
        expect(pathname).toBe('/marketing');
      });

      test('Testa se o link Marketing está funcionando', () => {
        const { history } = renderWithRouter(<SideMenu />);
      
        const goalsLink = screen.getByRole('link', { name: 'Metas' });
        expect(goalsLink).toBeInTheDocument();
        userEvent.click(goalsLink);
      
        const { pathname } = history.location;
        expect(pathname).toBe('/goals');
      });
});