import { createBrowserRouter } from 'react-router-dom';

import Step1 from '../pages/Onboarding/Step1Page';

const router = createBrowserRouter([
  {
    path: '/onboarding-step1',
    element: <Step1 />,
  },
]);

export default router;
