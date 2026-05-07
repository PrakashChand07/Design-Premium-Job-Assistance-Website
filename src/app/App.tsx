import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CompanyOverview } from "./components/CompanyOverview";
import { TrustSection } from "./components/TrustSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowItWorks } from "./components/HowItWorks";
import { DashboardPreview } from "./components/DashboardPreview";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CompanyOverview />
      <TrustSection />
      <ServicesSection />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <CTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}