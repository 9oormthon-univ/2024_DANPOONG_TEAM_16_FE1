import { RouterProvider } from 'react-router-dom';
import router from './routes';

import GlobalStyle from './GlobalStyle';

function App() {
    return (
        <>
          <GlobalStyle />
          <RouterProvider router={router} />
        </>
    );
}

export default App;
