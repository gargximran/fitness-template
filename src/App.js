import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import components
import HomeLayout from "./Layouts/HomeLayout";

// import routes
import Routes from "./router";


const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
        <HomeLayout>
            <Routes />
        </HomeLayout>
    </BrowserRouter>
  );
};
export default App;
