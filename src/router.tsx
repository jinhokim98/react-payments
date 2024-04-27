import { createHashRouter } from 'react-router-dom';
import App from './App';
import CardRegisterForm from './pages/CardRegisterForm/CardRegisterForm';
import SuccessRegister from './pages/SuccessRegister/SuccessRegister';
import URLS from './constants/Urls';
import Fallback from './pages/fallback/Fallback';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: URLS.register,
        element: <CardRegisterForm />,
      },
      {
        path: URLS.success,
        element: <SuccessRegister />,
      },
      {
        path: '*',
        element: <Fallback />,
      },
    ],
  },
]);

export default router;
