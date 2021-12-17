import { screen } from '@testing-library/react';
import Header from '../components/Header';
import renderWithRouter from '../renderWithRouter';
import 'jest-canvas-mock';


beforeEach(() => {
    renderWithRouter(<Header/>);
  });

describe('Testa se o componente Header possui as imagens necessarias', () => {

    test('Deve haver um icone de notificação na tela', () => {
        const notificationElement = screen.getByAltText(/notification/i);
        expect(notificationElement).toBeInTheDocument();
    });

    test('Deve haver um icone de calendário na tela', () => {
        const calendarElement = screen.getByAltText(/calendar/i);
        expect(calendarElement).toBeInTheDocument();
    });

    test('Deve haver um icone de email na tela', () => {
        const emailElement = screen.getByAltText(/email/i);
        expect(emailElement).toBeInTheDocument();
    });

    test('Deve haver uma foto de perfil na tela', () => {
        const profileElement = screen.getByAltText(/profilepicture/i);
        expect(profileElement).toBeInTheDocument();
    });

    test('Deve haver a logo da Tower na tela', () => {
        const logoElement = screen.getByAltText(/Logo da Tower/i);
        expect(logoElement).toBeInTheDocument();
    });
});