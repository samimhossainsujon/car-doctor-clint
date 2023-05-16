import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Proveiders/AuthProvider';
import BookServices from './Pages/BookServices/BookServices';
import PrivetRoutes from './PrivetRoutes';
import Bookings from './Pages/Bookings/Bookings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/book/:id",
        element: <PrivetRoutes><BookServices /></PrivetRoutes>,
        loader: ({ params }) => fetch(`https://car-doctor-server-samimhossainsujon.vercel.app/services/${params.id}`)
      },
      {
        path: "bookings",
        element: <PrivetRoutes><Bookings></Bookings> </PrivetRoutes>

      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);

reportWebVitals();
