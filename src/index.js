import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './sections/Header/Header';
import Home from './sections/Home/Home';
import Project from './sections/Projects/Project'
import LastSection from './sections/LastSection/Last'
import Footer from './sections/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Project/>
    <LastSection/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
