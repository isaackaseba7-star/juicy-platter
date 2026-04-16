/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Reservations } from './components/Reservations';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-amber/30 selection:text-amber">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Menu />
      <About />
      <Reservations />
      <Reviews />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

