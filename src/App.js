import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import BooksList from './components/BooksList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <BooksList />,
        },
        {
          path: '/categories',
          element: <Categories />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
