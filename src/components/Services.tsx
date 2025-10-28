import { Card } from './ui/card';
import { Settings, Shield, Palette, Users, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesProps {
  language: 'en' | 'ht';
}

export function Services({ language }: ServicesProps) {
  const content = {
    en: {
      badge: 'What We Offer',
      title: 'Our Services',
      subtitle: 'At Marsan Food Business Consultant, we help food entrepreneurs, restaurant owners, and catering professionals create organized, compliant, and profitable businesses. We combine culinary experience, operations management, and practical strategies to help you grow with confidence.',
      cta: 'Book a Consultation',
      ctaText: "Let's discuss how we can strengthen your food business today.",
      services: [
        {
          icon: Settings,
          title: 'Operations & Systems Consulting',
          description: 'We design efficient systems to streamline your daily operations—from scheduling and cost control to inventory and workflow.',
          included: 'SOP development, cost analysis, inventory tracking templates, scheduling guides.'
        },
        {
          icon: Shield,
          title: 'HACCP & Food Safety Compliance',
          description: 'We assist you in meeting industry standards through HACCP plans, sanitation training, and compliance audits.',
          included: 'HACCP plan creation, food safety training, sanitation logs, and internal audit preparation.'
        },
        {
          icon: Palette,
          title: 'Branding & Menu Development',
          description: 'We help you design or refresh your brand and menu to attract the right customers and boost sales.',
          included: 'Menu layout, product naming, pricing strategy, and visual branding guidance.'
        },
        {
          icon: Users,
          title: 'Staff Training & Leadership Coaching',
          description: 'We provide training for managers and staff to strengthen teamwork, service quality, and operational excellence.',
          included: 'Service standards, communication, leadership skills, and performance monitoring tools.'
        },
        {
          icon: TrendingUp,
          title: 'Business Growth & Strategy',
          description: 'We help you build a sustainable business model, plan for expansion, and create strategies for long-term profitability.',
          included: 'Business planning, marketing calendar, financial projections, and growth tracking.'
        }
      ]
    },
    ht: {
      badge: 'Sa Nou Ofri',
      title: 'Sèvis Nou Yo',
      subtitle: 'Nan Marsan Food Business Consultant, nou ede antreprenè manje, pwopriyetè restoran, ak moun k ap fè sèvis manje bati biznis ki òganize, ki konfòm ak règleman, epi ki bay pwofi. Nou konbine eksperyans nan kizin, jesyon operasyon, ak bon estrateji pou ede ou grandi avèk konfyans.',
      cta: 'Pran yon Konsiltasyon',
      ctaText: 'Ann diskite kijan nou ka ranfòse biznis manje ou jodi a.',
      services: [
        {
          icon: Settings,
          title: 'Konsiltasyon Sou Sistem ak Operasyon',
          description: 'Nou ede ou mete bon estrikti pou fasilite operasyon chak jou — depi nan orè travay, kontwòl depans, rive nan jesyon envantè.',
          included: 'Devlopman SOP, analiz depans, modèl pou swiv envantè, ak gid planifikasyon orè.'
        },
        {
          icon: Shield,
          title: 'Sekirite Manje & Konfomite HACCP',
          description: 'Nou prepare ou pou respekte tout estanda endistri a atravè plan HACCP, fòmasyon ijyèn, ak odit entèn.',
          included: 'Plan HACCP, fòmasyon sekirite manje, fich ijyèn, ak preparasyon pou enspeksyon.'
        },
        {
          icon: Palette,
          title: 'Devlopman Mak & Meni',
          description: 'Nou ede ou kreye oswa rafrechi mak ou ak meni ou pou atire bon kliyan epi ogmante lavant.',
          included: 'Layout meni, non pwodwi, estrateji pri, ak konsèy maketing vizyèl.'
        },
        {
          icon: Users,
          title: 'Fomasyon Pèsonèl & Lidechip',
          description: 'Nou bay fòmasyon pou anplwaye ak manadjè pou ranfòse travay ann ekip, kalite sèvis, ak efikasite operasyonèl.',
          included: 'Estanda sèvis, kominikasyon, lidèchip, ak zouti pou suiv pèfòmans.'
        },
        {
          icon: TrendingUp,
          title: 'Kwasans Biznis & Estrateji',
          description: 'Nou ede ou bati yon modèl biznis solid, prepare pou ekspansyon, epi devlope estrateji pou pwofi alontèm.',
          included: 'Plan biznis, kalandriye maketing, pwojeksyon finansye, ak zouti pou swiv kwasans.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {text.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-emerald-600 bg-white group">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-emerald-700 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="border-t border-emerald-100 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        {service.included}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1525968965209-1c3e895e0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDA3MTE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative text-center text-white py-16 px-8">
            <h3 className="text-white mb-4">{text.cta}</h3>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              → {text.ctaText}
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-emerald-700 hover:bg-gray-100 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {text.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
