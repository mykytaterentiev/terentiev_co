import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import CalculatorSection from './components/sections/CalculatorSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Each section should have an id matching the Navbar links */}
        <HeroSection id="home" />
        <AboutSection id="about" /> {/* Added an About section for better structure */}
        <ServicesSection id="services" />
        <CalculatorSection id="calculator" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;