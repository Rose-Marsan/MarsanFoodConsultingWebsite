import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  language: 'en' | 'ht';
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      badge: 'Professional Food Business Consulting',
      headline: 'Building Food Businesses. Empowering Culinary Entrepreneurs.',
      subheadline: 'Helping restaurant owners, caterers, and food startups develop strong operations, branding, and systems for long-term success.',
      intro: 'At Marsan Food Business Consultant, we specialize in guiding food entrepreneurs toward sustainable growth. From business planning and HACCP compliance to brand development and operational efficiency, we help you turn your culinary passion into a thriving business.',
      goal: 'Our goal is simple: to make your food business more profitable, organized, and ready to scale.',
      cta: 'Book a Free Consultation',
      ctaSecondary: 'View Our Services',
      ctaText: "Let's build your food business together.",
      benefits: [
        'HACCP Certified Consulting',
        'Operations Management Expertise',
        'Caribbean Food Specialists'
      ]
    },
    ht: {
      badge: 'Konsiltasyon Pwofesyonèl pou Biznis Manje',
      headline: 'Nou bati biznis manje. Nou ankouraje antreprenè kizin yo.',
      subheadline: 'Nou ede pwopriyetè restoran, moun k ap fè sèvis manje, ak nouvo biznis manje devlope bon estrikti, bon mak, ak bon sistèm pou reyisi alontèm.',
      intro: 'Nan Marsan Food Business Consultant, nou espesyalize nan akonpaye antreprenè manje pou yo grandi avèk estabilite. Depi nan plan biznis, konfòmite HACCP, rive nan devlopman mak ak efikasite operasyon, nou ede w transfòme pasyon kizin ou an yon biznis ki bay bon rezilta.',
      goal: 'Objektif nou senp: pou fè biznis manje ou vin pi òganize, plis pwofitab, epi pare pou grandi.',
      cta: 'Pran yon Konsiltasyon Gratis',
      ctaSecondary: 'Gade Sèvis Nou',
      ctaText: 'Ann bati biznis manje ou ansanm.',
      benefits: [
        'Konsiltasyon Sètifye HACCP',
        'Ekspètiz nan Jesyon Operasyon',
        'Espesyalis Manje Karayib'
      ]
    }
  };

  const text = content[language];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span className="text-sm text-emerald-700">{text.badge}</span>
            </div>
            
            <h1 className="text-emerald-700 mb-6 leading-tight">
              {text.headline}
            </h1>
            
            <p className="text-gray-700 mb-6 text-lg">
              {text.subheadline}
            </p>
            
            <div className="space-y-3 mb-8">
              {text.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-emerald-100 rounded-full p-1">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {text.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {text.ctaSecondary}
              </Button>
            </div>

            <p className="text-sm text-gray-600 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-emerald-600" />
              {text.ctaText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent z-10" />
              <ImageWithFallback
                src="logo.png"
                alt="Professional food business consulting"
                className="w-full h-[550px] object-cover"
              />
            </div>

            {/* Floating Stats Cards
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-emerald-100"
            >
              <div className="text-3xl text-emerald-700 mb-1">10+</div>
              <div className="text-sm text-gray-600">
                {language === 'en' ? 'Years Experience' : 'Ane Eksperyans'}
              </div>
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-emerald-100"
            >
              <div className="text-3xl text-emerald-700 mb-1">100%</div>
              <div className="text-sm text-gray-600">
                {language === 'en' ? 'Client Success' : 'Siksè Kliyan'}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
