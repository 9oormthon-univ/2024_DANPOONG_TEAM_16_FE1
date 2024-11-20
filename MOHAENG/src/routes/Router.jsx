import { createBrowserRouter } from 'react-router-dom';

import Step1 from '../pages/Onboarding/Step1Page';
import Step2 from '../pages/Onboarding/Step2Page';
import Step3 from '../pages/Onboarding/Step3Page';

const router = createBrowserRouter([
  {
    path: '/onboarding-step1',
    element: <Step1 />,
  },
  {
    path: '/onboarding-step2', 
    element: <Step2 />,
  },
  {
    path: '/onboarding-step3',
    element: <Step3 />,
  },
]);

export default router;
