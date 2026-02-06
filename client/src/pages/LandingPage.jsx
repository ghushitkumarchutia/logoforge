import { Navbar } from "../components/layout/Navbar.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { Hero } from "../components/landing/Hero.jsx";
import { TrustedBy } from "../components/landing/TrustedBy.jsx";
import { Features } from "../components/landing/Features.jsx";
import { HowItWorks } from "../components/landing/HowItWorks.jsx";
import { LogoShowcase } from "../components/landing/LogoShowcase.jsx";
import { Stats } from "../components/landing/Stats.jsx";
import { Testimonials } from "../components/landing/Testimonials.jsx";
import { Pricing } from "../components/landing/Pricing.jsx";
import { FAQ } from "../components/landing/FAQ.jsx";
import { CTA } from "../components/landing/CTA.jsx";

export const LandingPage = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <LogoShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
