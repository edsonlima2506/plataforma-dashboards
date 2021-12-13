import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Login from '../pages/Login';

beforeEach(() => {
    renderWithRouter(<Login/>);
  });

describe('Testa se os inputs e o botão estão na tela', () => {
    test('Deve haver um input para email na tela', () => {
        const inputEmail = screen.getByPlaceholderText(/email/i);
        expect(inputEmail).toBeInTheDocument();
    });

    test('Deve haver um input para senha na tela', () => {
        const inputPassword = screen.getByPlaceholderText(/senha/i);
        expect(inputPassword).toBeInTheDocument();
    });

    test('Deve haver um botão "entrar" na tela', () => {
        const buttonLogin = screen.getByRole('button', { name: /entrar/i });
        expect(buttonLogin).toBeInTheDocument();
    });
});