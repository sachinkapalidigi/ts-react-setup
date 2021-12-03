import React from 'react';
import './App.css';
import Body from './Body';
import ThemeProvider from './contexts/ThemeProvider';
import Footer from './Footer';
import Header from './Header';
import ThemeSelector from './ThemeSelector';

function App() {
  return (
    <ThemeProvider>
      <div className="">
        <ThemeSelector />
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
