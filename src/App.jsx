import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <About />
        <InstagramFeed />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
