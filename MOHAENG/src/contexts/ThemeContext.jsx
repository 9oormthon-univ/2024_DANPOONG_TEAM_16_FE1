import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import themes from '../styles/theme'; 

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('default');

    const toggleTheme = (themeName) => {
        if (themeName !== currentTheme) {
            setCurrentTheme(themeName);
        }
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            <StyledThemeProvider theme={themes[currentTheme]}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
