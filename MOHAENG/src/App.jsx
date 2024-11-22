import { RouterProvider } from 'react-router-dom';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useEffect } from 'react';
import router from './routes/Router';
import GlobalStyle from './styles/globalStyle';

function App() {
  const { toggleTheme, currentTheme } = useTheme();

  useEffect(() => {
      const url = window.location.pathname;
      if (url.includes('/high-contrast') && currentTheme !== 'highContrast') {
          toggleTheme('highContrast');
      } else if (!url.includes('/high-contrast') && currentTheme !== 'default') {
          toggleTheme('default');
      }
  }, [currentTheme, toggleTheme]);

  return (
      <OnboardingProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
      </OnboardingProvider>
  );
}

const Root = () => (
  <ThemeProvider>
      <App />
  </ThemeProvider>
);

export default Root;
