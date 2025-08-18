import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CasesSection from '../components/CasesSection';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import SEOContent from '../components/SEOContent';
import { Toaster } from '../components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />

      <main>
        <HeroSection />
        <CasesSection />
        <ContactForm />
        <FAQSection />
        <SEOContent />
      </main>

      <footer className="animate-slide-in-up" style={{ padding: '2rem 0', borderTop: '1px solid rgba(44, 44, 43, 0.3)' }}>
        <div className="container text-center" style={{ color: '#a08670' }}>
          <p>&copy; 2024 Phenix-project. Все права защищены.</p>
          <div className="flex justify-center space-x-4 stagger-animation" style={{ marginTop: '1rem' }}>
            <a href="tel:+79023845591" style={{ color: '#d4c4b0' }}>
              +7 902 384-55-91
            </a>
            <span>•</span>
            <a href="mailto:XSchoolbiz@yandex.ru" style={{ color: '#d4c4b0' }}>
              XSchoolbiz@yandex.ru
            </a>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Index;
