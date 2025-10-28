import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FounderProfile } from './components/FounderProfile';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Values } from './components/Values';
import { Stats } from './components/Stats';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Button } from './components/ui/button';
import { Globe, Menu, ArrowUp } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ht'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ht' : 'en');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = {
    en: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      // { href: '#case-studies', label: 'Success Stories' },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#contact', label: 'Contact' }
    ],
    ht: [
      { href: '#home', label: 'Akèy' },
      { href: '#about', label: 'Ki Moun Nou Ye' },
      { href: '#services', label: 'Sèvis' },
      { href: '#process', label: 'Pwosesis' },
      // { href: '#case-studies', label: 'Istwa Siksè' },
      { href: '#testimonials', label: 'Temwayaj' },
      { href: '#contact', label: 'Kontakte Nou' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={scrollToTop}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="Images\Gemini_Generated_Image_s58pns58pns58pns (1)-modified.png"
                  alt="Marsan Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-emerald-700">Marsan</h1>
                <p className="text-xs text-gray-600 italic -mt-1">
                  {language === 'en' ? 'Consult. Create. Celebrate.' : 'Konsèy. Kreye. Selebre.'}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-700 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all group-hover:w-full" />
                </a>
              ))}
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-600"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'Kreyòl' : 'English'}
              </Button>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'en' ? 'Book Consultation' : 'Pran Konsiltasyon'}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
              >
                <Globe className="h-4 w-4" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems[language].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-emerald-700 py-2 border-b"
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button className="bg-emerald-700 hover:bg-emerald-800 mt-4">
                      {language === 'en' ? 'Book Consultation' : 'Pran Konsiltasyon'}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main >
        <Hero language={language} />
        <Stats language={language} />
        <About language={language} />
        <FounderProfile language={language} />
        <Certifications language={language} />
        <Services language={language} />
        <Process language={language} />
        <Values language={language} />
        {/* <div id="case-studies">
          <CaseStudies language={language} />
        </div> */}
        <Testimonials language={language} />
        <FAQ language={language} />
        {/* <Newsletter language={language} /> */}
        <Contact language={language} />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src="Images\Gemini_Generated_Image_s58pns58pns58pns (1)-modified.png"
                    alt="Marsan Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-white">Marsan Food Business Consultant</h3>
                  <p className="text-sm text-gray-400 italic">
                    {language === 'en' ? 'Consult. Create. Celebrate.' : 'Konsèy. Kreye. Selebre.'}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md mb-4">
                {language === 'en' 
                  ? 'Empowering food entrepreneurs to build sustainable, profitable businesses while celebrating Caribbean culinary heritage.' 
                  : 'Nou bay antreprenè manje yo fòs pou yo bati biznis ki dirab ak pwofitab pandan n ap selebre eritaj kizin Karayib la.'}
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-emerald-700">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-emerald-700">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-emerald-700">
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">{language === 'en' ? 'Quick Links' : 'Lyen Rapid'}</h4>
              <ul className="space-y-2">
                {navItems[language].slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">{language === 'en' ? 'Contact' : 'Kontakte'}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>rosemarsan@gmail.com</li>
                <li>(617) 828-0346</li>
                <li>
                  {language === 'en' 
                    ? 'Serving nationwide' 
                    : 'Sèvis nasyonal'}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Marsan Food Business Consultant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politik Konfidansyalite'}
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Tèm ak Kondisyon'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
