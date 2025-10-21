import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './common/Header';
import Search from './common/Search';
import Login from './common/Login';
import Shopping from './common/Shopping';
import Footer from './common/Footer';
import Home from './common/Home';
import Category from './common/Category';
import About from './common/About';
import Popular from './common/Popular';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './common/Banner';
import Menu from './common/Menu';
import Order from './common/Order';
import Blogs from './common/Blogs';

function App() {
  // utilisation des react hooks(useState) pour activer et désactiver les fenêtres du logging, de Search et du Panier
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.classList.remove('modal-open');
  };

  // On ferme la modale lorsqu'on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeModal && 
          !event.target.closest('.search-form-container') && 
          !event.target.closest('.shopping-cart-container') && 
          !event.target.closest('.login-form-container') &&
          !event.target.closest('.icons div')) {
        closeModal();
      }
    };

    if (activeModal) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeModal]);
  // fin de la gestion de nos modales

  return (
    <Router>
      <div className="App">
        <Header onIconClick={openModal} />
        <Home />
        <Category />
        <About />
        <Popular />
        <Banner />
        <Menu />
        <Order />
        <Blogs />
        <Footer />

        {/* Modales conditionnelles */}
        <Search isActive={activeModal === 'search'} onClose={closeModal} />
        <Shopping isActive={activeModal === 'shopping'} onClose={closeModal} />
        <Login isActive={activeModal === 'login'} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;