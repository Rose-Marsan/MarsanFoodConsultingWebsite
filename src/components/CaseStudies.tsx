import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Users, DollarSign, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudiesProps {
  language: 'en' | 'ht';
}

export function CaseStudies({ language }: CaseStudiesProps) {
  const content = {
    en: {
      badge: 'Success Stories',
      title: 'Real Results, Real Impact',
      subtitle: 'Discover how we\'ve helped food entrepreneurs transform their businesses from struggling to thriving',
      cases: [
        {
          name: 'Caribbean Spice Kitchen',
          category: 'Restaurant Startup',
          location: 'Miami, FL',
          challenge: 'New restaurant struggling with high costs, inconsistent quality, and failing health inspections',
          solution: 'Implemented HACCP protocols, redesigned menu for profitability, trained staff on food safety, and optimized kitchen workflow',
          results: [
            { icon: DollarSign, label: 'Revenue Increase', value: '250%' },
            { icon: TrendingUp, label: 'Cost Reduction', value: '35%' },
            { icon: Star, label: 'Health Rating', value: 'A Grade' },
            { icon: Users, label: 'Customer Satisfaction', value: '4.8/5' }
          ],
          timeline: '6 months',
          image: 'https://images.unsplash.com/photo-1642741580389-87dd75d913f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjAwNzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"Rose transformed our business from the ground up. We went from barely surviving to thriving with a waitlist every weekend."'
        },
        {
          name: 'Island Flavors Catering',
          category: 'Catering Business',
          location: 'Brooklyn, NY',
          challenge: 'Established catering business hitting revenue plateau, lacking systems for scaling',
          solution: 'Developed scalable operations systems, created strategic pricing model, implemented booking software, and expanded service offerings',
          results: [
            { icon: DollarSign, label: 'Revenue Growth', value: '180%' },
            { icon: Users, label: 'Client Base', value: '3x' },
            { icon: TrendingUp, label: 'Profit Margin', value: '+22%' },
            { icon: Star, label: 'Event Capacity', value: '2x' }
          ],
          timeline: '8 months',
          image: 'https://images.unsplash.com/photo-1525968965209-1c3e895e0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDA3MTE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"The systems Rose put in place allowed us to triple our business without tripling our stress. Game changer!"'
        },
        {
          name: 'Ayiti Soul Food Truck',
          category: 'Food Truck Launch',
          location: 'Orlando, FL',
          challenge: 'First-time entrepreneur with a dream but no business plan, systems, or compliance knowledge',
          solution: 'Created comprehensive business plan, secured permits, developed brand identity, established HACCP compliance, and launched marketing strategy',
          results: [
            { icon: DollarSign, label: 'First Year Revenue', value: '$185k' },
            { icon: Star, label: 'Social Media', value: '12k Followers' },
            { icon: TrendingUp, label: 'Monthly Growth', value: '25%' },
            { icon: Users, label: 'Daily Customers', value: '150+' }
          ],
          timeline: '4 months to launch',
          image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3VjY2VzcyUyMHN0b3J5fGVufDF8fHx8MTc2MDA3MTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"Rose didn\'t just help me start a business—she helped me build a legacy. I couldn\'t have done this without her expertise."'
        }
      ],
      cta: 'Ready to Write Your Success Story?',
      ctaButton: 'Book a Consultation'
    },
    ht: {
      badge: 'Istwa Siksè',
      title: 'Rezilta Reyèl, Enpak Reyèl',
      subtitle: 'Dekouvri kijan nou te ede antreprenè manje transfòme biznis yo soti nan pwoblèm rive nan siksè',
      cases: [
        {
          name: 'Caribbean Spice Kitchen',
          category: 'Nouvo Restoran',
          location: 'Miami, FL',
          challenge: 'Nouvo restoran k ap lite ak depans wo, kalite enkonsistan, ak echèk nan enspeksyon sante',
          solution: 'Enplemante pwotokòl HACCP, redesine meni pou pwofitabilite, fòme pèsonèl sou sekirite manje, ak optimize travay nan kizin',
          results: [
            { icon: DollarSign, label: 'Ogmantasyon Revni', value: '250%' },
            { icon: TrendingUp, label: 'Rediksyon Depans', value: '35%' },
            { icon: Star, label: 'Nòt Sante', value: 'Nòt A' },
            { icon: Users, label: 'Satisfaksyon Kliyan', value: '4.8/5' }
          ],
          timeline: '6 mwa',
          image: 'https://images.unsplash.com/photo-1642741580389-87dd75d913f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjAwNzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"Rose transfòme biznis nou de tèt anba. Nou soti nan kote nou te prèske pa sirviv rive nan kote nou gen lis datant chak wikenn."'
        },
        {
          name: 'Island Flavors Catering',
          category: 'Biznis Katering',
          location: 'Brooklyn, NY',
          challenge: 'Biznis katering etabli k ap frape plafon revni, ki manke sistèm pou grandi',
          solution: 'Devlope sistèm operasyon ki ka grandi, kreye modèl estratejik pou pri, enplemante lojisyèl pou rezèvasyon, ak elaji sèvis yo',
          results: [
            { icon: DollarSign, label: 'Kwasans Revni', value: '180%' },
            { icon: Users, label: 'Baz Kliyan', value: '3x' },
            { icon: TrendingUp, label: 'Maj Pwofi', value: '+22%' },
            { icon: Star, label: 'Kapasite Evenman', value: '2x' }
          ],
          timeline: '8 mwa',
          image: 'https://images.unsplash.com/photo-1525968965209-1c3e895e0a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDA3MTE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"Sistèm Rose mete an plas pèmèt nou triple biznis nou san nou pa triple estrès nou. Sa chanje jwe a!"'
        },
        {
          name: 'Ayiti Soul Food Truck',
          category: 'Lanse Kamyon Manje',
          location: 'Orlando, FL',
          challenge: 'Premye fwa antreprenè ak yon rèv men san plan biznis, sistèm, oswa konesans konfòmite',
          solution: 'Kreye plan biznis konplè, jwenn pèmi, devlope idantite mak, etabli konfòmite HACCP, ak lanse estrateji maketing',
          results: [
            { icon: DollarSign, label: 'Revni Premye Ane', value: '$185k' },
            { icon: Star, label: 'Medya Sosyal', value: '12k Swivan' },
            { icon: TrendingUp, label: 'Kwasans Chak Mwa', value: '25%' },
            { icon: Users, label: 'Kliyan Chak Jou', value: '150+' }
          ],
          timeline: '4 mwa pou lanse',
          image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3VjY2VzcyUyMHN0b3J5fGVufDF8fHx8MTc2MDA3MTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          testimonial: '"Rose pa jis ede m kòmanse yon biznis—li ede m bati yon eritaj. Mwen pa t ap ka fè sa san ekspètiz li."'
        }
      ],
      cta: 'Pare pou Ekri Istwa Siksè Ou?',
      ctaButton: 'Pran yon Konsiltasyon'
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {text.cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-2xl">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ImageWithFallback
                      src={caseStudy.image}
                      alt={caseStudy.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
                    
                    {/* Overlay badges */}
                    <div className="absolute top-6 left-6 flex gap-2">
                      <Badge className="bg-white text-emerald-700 border-2 border-emerald-600">
                        {caseStudy.category}
                      </Badge>
                      <Badge className="bg-emerald-700 text-white">
                        {caseStudy.timeline}
                      </Badge>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white mb-2">{caseStudy.name}</h3>
                      <p className="text-emerald-100">{caseStudy.location}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-emerald-700 mb-3">
                          {language === 'en' ? 'The Challenge' : 'Defi a'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-emerald-700 mb-3">
                          {language === 'en' ? 'Our Solution' : 'Solisyon Nou'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-emerald-700 mb-4">
                          {language === 'en' ? 'The Results' : 'Rezilta yo'}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {caseStudy.results.map((result, idx) => {
                            const Icon = result.icon;
                            return (
                              <div key={idx} className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                                <Icon className="h-6 w-6 text-emerald-700 mb-2" />
                                <div className="text-2xl text-emerald-700 mb-1">
                                  {result.value}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {result.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-6 rounded-lg border-l-4 border-emerald-600">
                        <p className="text-gray-800 italic leading-relaxed">
                          {caseStudy.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-12 text-white">
            <h3 className="text-white mb-6">{text.cta}</h3>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-700 hover:bg-gray-100"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {text.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
