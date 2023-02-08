import React from 'react';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer.js';
import Home from './pages/HomePage.js'
import Nosotros from './pages/NosotrosPage'
import Novedades from './pages/NovedadesPage'
import Contacto from './pages/contactoPage'
//import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return(
    <div className="App">
    <Header />
    

    <Footer />
    </div>
    
    );
    }
export default App;

