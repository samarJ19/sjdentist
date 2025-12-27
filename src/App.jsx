import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './component/Navbar';
import Home from "./component/Home";
import BlogSection from './component/BlogSection';
import Gallery from './component/Gallery';
import Footer from './component/Footer';

// Context
import { LanguageProvider } from './context/LanguageContext';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="font-sans antialiased bg-white">
          {/* Navbar stays outside Routes so it's visible on EVERY page */}
          <Navbar />
          
          <Routes>
            {/* The Main Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* The Separate Blog Page */}
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;