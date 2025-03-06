import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cabinet from "./pages/Cabinet";
import Sign from "./pages/Sign";
import LogoutAlert from './pages/LogoutAlert';

const App = () => {
  return (
    <Router>
      <LogoutAlert />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
