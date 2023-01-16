import React from 'react';
import './App.css';
import Image from './components/Image.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-container">
        <Image />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
