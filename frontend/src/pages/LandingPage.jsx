import Footer from '../components/partials/Footer.component';
import Header from '../components/partials/Header.component';
import FeatureSection from '../components/sections/Features.component';
import HeroSection from '../components/sections/HeroSection.component';
import PricingSection from '../components/sections/PricingSection.component';
import Testimonials from '../components/sections/TestimonialSection.component';

export default function LandingPage () {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
