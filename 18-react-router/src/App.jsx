import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';

import Hompage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import ProductDetailPage from './pages/ProductDetail.jsx';

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Hompage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Hompage /> }, // path: ''
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
