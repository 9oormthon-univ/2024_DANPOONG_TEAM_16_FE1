import { RouterProvider } from 'react-router-dom';
import { OnboardingProvider } from './contexts/OnboardingContext';

import router from './routes/Router';

import GlobalStyle from './styles/globalStyle'; 

function App() {
    return (
      <>
        <OnboardingProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </OnboardingProvider>
      </>
    );
}

export default App;
