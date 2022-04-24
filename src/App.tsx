import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "components/routes/Home";
import Layout from "components/layouts";

import { routes } from "utils/enum";

const App = () => {
  return (
      <Routes>
            <Route path={routes.HOME} element={<Layout> <Home /> </Layout>} />     
      </Routes>
  )
}

export default App
