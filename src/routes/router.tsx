import { PATH } from '@/constants/path';
import { Home } from '@/pages/Home';
import { Layout } from '@/pages/Layout';
import { New } from '@/pages/New';
import { WikiDetail } from '@/pages/WikiDetail';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      { path: PATH.HOME, element: <Home /> },
      { path: PATH.WIKI_DETAIL + '/:id', element: <WikiDetail /> },
      { path: PATH.NEW, element: <New /> },
      { path: PATH.EDIT, element: <New /> },
    ],
  },
]);

export default router;
