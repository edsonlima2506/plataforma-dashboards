import { screen } from '@testing-library/react';
import Header from '../components/Header';
import renderWithRouter from '../renderWithRouter';


beforeEach(() => {
    renderWithRouter(<Header/>);
  });

describe('Testa se o componente Header possui as imagens necessarias', () => {

    test('Deve haver um icone de notificação na tela', () => {
        expect(screen.getByAltText(/notification/i)).toBeInTheDocument();
    });

    test('Deve haver um icone de calendário na tela', () => {
        expect(screen.getByAltText(/calendar/i)).toBeInTheDocument();
    });

    test('Deve haver um icone de email na tela', () => {
        expect(screen.getByAltText(/email/i)).toBeInTheDocument();
    });

    test('Deve haver uma foto de perfil na tela', () => {
        expect(screen.getByAltText(/profilepicture/i)).toBeInTheDocument();
    });

    test('Deve haver a logo da Tower na tela', () => {
        expect(screen.getByAltText(/Logo da Tower/i)).toBeInTheDocument();
    });
});