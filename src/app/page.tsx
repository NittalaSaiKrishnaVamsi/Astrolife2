import type { Metadata } from 'next';

import './globals.css'; // Import your global CSS
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import InteractiveSection from './InteractiveSection';
import Experts from './Experts';
import Footer from './Footer';
import SocialMediaSidebar from './SocialMediaSidebar';
import AstroOffers from './AstroOffers';
import CosmicJourney from './CosmicJourney';
import DNAAstrology from './DNAAstrology';
import WHYASTROLOGY from './WHYASTROLOGY';
import AstrologyConsultation from './AstrologyConsultation';
import ContactForm from './ContactForm'; // Import the DailyHoroscope component
import Carousel from './Carousel';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <main className='bg-white'> {/* Add bg-white to the main element */}
      <Header />
      <Carousel />
      <Hero />
      <Features />
      <InteractiveSection />
      <Experts />
       {/* Add the Daily Horoscope Section here */}
      <AstroOffers />
      <CosmicJourney />
      <DNAAstrology />
      <WHYASTROLOGY />
      <AstrologyConsultation />
      <ContactForm />
      <Footer />
      <SocialMediaSidebar />
       {/* Include the SocialMediaSidebar component */}
    </main>
  );
}
