import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LegalModal from './components/LegalModal';
import Toast from './components/Toast';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('color-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    key: '',
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const openModal = (modalKey) => {
    setModalState({ isOpen: true, key: modalKey });
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setModalState({ isOpen: false, key: '' });
    document.body.classList.remove('overflow-hidden');
  };

  const handleFormSubmitSuccess = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div class="min-h-screen bg-slate-50 text-slate-800 dark:bg-navy-950 dark:text-slate-100 font-sans">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Contact
          openPrivacyModal={() => openModal('modalPrivacidad')}
          onFormSubmitSuccess={handleFormSubmitSuccess}
        />
      </main>

      <Footer openModal={openModal} />
      
      <WhatsAppFloat />
      
      <LegalModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        modalKey={modalState.key}
      />

      <Toast show={showToast} />
    </div>
  );
}
