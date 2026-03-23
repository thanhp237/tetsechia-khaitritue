import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Finances from './components/Finances';
import Resources from './components/Resources';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Timeline />
        <Gallery />
        <Finances />
        <Resources />
      </main>
      <Contact />

      {/* Decorative floating apricot flower (hoa mai) */}
      <div className="fixed bottom-6 right-6 w-12 h-12 bg-brand-yellow/30 backdrop-blur-md border border-brand-yellow/50 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none z-50 mix-blend-multiply opacity-50">
        <span className="text-2xl drop-shadow-md">🏵️</span>
      </div>
    </div>
  );
}

export default App;
