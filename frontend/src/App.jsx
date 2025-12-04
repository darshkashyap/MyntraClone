import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import "./App.css"
import About from '../Pages/About.jsx'
import Home from '../Pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;