import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;