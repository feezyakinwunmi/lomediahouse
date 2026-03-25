import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import NextSection from './components/NextSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection'
import MissionSection from './components/MissionSection';

export default function Home() {
  return (
    <>
     
      <Hero />
      <ServicesSection/>
      <MissionSection/>
      <WhySection/>
      <NextSection/>
      <StatsSection/>
      <TestimonialsSection/>

     
    </>
  );
}