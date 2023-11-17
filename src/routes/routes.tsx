import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { ProductInfo } from '../components/ProductInfo/ProductInfo';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: '/products/:id', element: <ProductInfo />, errorElement: <ErrorPage /> },
]);
