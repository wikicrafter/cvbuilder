import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';

const MockTheme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Main Component', () => {
    test('renders without crashing', () => {
        render(
            <MockTheme>
                <Main />
            </MockTheme>
        );
        expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
    });

    test('updates personal info state', () => {
        render(
            <MockTheme>
                <Main />
            </MockTheme>
        );

        const firstNameInput = screen.getByPlaceholderText(/First Name/i);
        fireEvent.change(firstNameInput, { target: { value: 'John' } });

        expect(firstNameInput.value).toBe('John');
    });

    test('shows alert when generating PDF with empty fields', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

        render(
            <MockTheme>
                <Main />
            </MockTheme>
        );

        const generateButton = screen.getByText(/Generate PDF/i);
        fireEvent.click(generateButton);

        expect(alertMock).toHaveBeenCalledWith("Please fill in the essential personal information fields.");

        alertMock.mockRestore();
    });
});
