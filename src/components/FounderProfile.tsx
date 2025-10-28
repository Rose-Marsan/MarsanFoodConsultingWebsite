import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Briefcase, GraduationCap, Heart, Users, TrendingUp, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface FounderProfileProps {
  language: 'en' | 'ht';
}

export function FounderProfile({ language }: FounderProfileProps) {
  const content = {
    en: {
      badge: 'Meet Our Founder',
      title: 'Rose Marsan',
      subtitle: 'Culinary Expert & Operations Management Specialist',
      intro: 'Rose Marsan is a passionate food industry professional dedicated to empowering entrepreneurs to build sustainable, profitable businesses while maintaining culinary excellence and authenticity.',
      background: {
        title: 'Background & Expertise',
        education: [
          {
            icon: GraduationCap,
            title: 'Associate Degree in Culinary Arts',
            description: 'Comprehensive training in professional cooking techniques, food safety, and kitchen management'
          },
          {
            icon: GraduationCap,
            title: 'Bachelor of Science in Operations Management',
            description: 'Advanced expertise in business systems, process optimization, and strategic planning'
          }
        ]
      },
      experience: {
        title: 'Professional Journey',
        items: [
          {
            icon: Briefcase,
            title: '10+ Years in Food Service Operations',
            description: 'Extensive experience managing large-scale dining operations, from fine dining establishments to high-volume catering services'
          },
          {
            icon: Users,
            title: 'Startup & Small Business Support',
            description: 'Mentored dozens of food entrepreneurs, helping them navigate the complexities of launching and scaling their businesses'
          },
          {
            icon: Award,
            title: 'HACCP Certified Consultant',
            description: 'Expert in food safety compliance, sanitation systems, and regulatory requirements for food businesses'
          },
          {
            icon: TrendingUp,
            title: 'Caribbean Cuisine Specialist',
            description: 'Deep understanding of Caribbean culinary traditions, helping businesses honor their cultural heritage while achieving commercial success'
          }
        ]
      },
      philosophy: {
        title: 'My Philosophy',
        quote: 'Every successful food business starts with three things: a deep passion for the craft, a commitment to excellence, and the right systems to support sustainable growth. My mission is to help entrepreneurs harness all three.',
        approach: 'Rose believes that food businesses thrive when they combine culinary artistry with sound business practices. Her unique background—blending hands-on culinary expertise with formal operations management training—allows her to guide clients through every aspect of building a successful food enterprise.',
        commitment: 'Whether you\'re a chef dreaming of opening your first restaurant, a caterer looking to scale, or an established business seeking to optimize operations, Rose brings the knowledge, experience, and cultural understanding to help you succeed.'
      },
      achievements: [
        '50+ Businesses Consulted',
        'HACCP Certified',
        '200% Average Revenue Growth',
        '95% Client Retention Rate'
      ]
    },
    ht: {
      badge: 'Rankontre Fondatè Nou',
      title: 'Rose Marsan',
      subtitle: 'Ekspè nan Kizin & Espesyalis nan Jesyon Operasyon',
      intro: 'Rose Marsan se yon pwofesyonèl nan endistri manje ki gen pasyon, li dedye pou bay antreprenè yo fòs pou yo bati biznis ki dirab, ki pwofitab pandan y ap kenbe ekselans kizin ak otantisite.',
      background: {
        title: 'Fòmasyon & Ekspètiz',
        education: [
          {
            icon: GraduationCap,
            title: 'Diplòm Asosye nan Atizay Kizin',
            description: 'Fòmasyon konplè nan teknik kizin pwofesyonèl, sekirite manje, ak jesyon kizin'
          },
          {
            icon: GraduationCap,
            title: 'Lisans nan Syans Jesyon Operasyon',
            description: 'Ekspètiz avanse nan sistèm biznis, optimize pwosesis, ak planifikasyon estratejik'
          }
        ]
      },
      experience: {
        title: 'Vwayaj Pwofesyonèl',
        items: [
          {
            icon: Briefcase,
            title: '10+ Ane nan Operasyon Sèvis Manje',
            description: 'Eksperyans ekstansif nan jesyon operasyon sèvis manje gwo echèl, depi restoran pou manje rafine rive nan sèvis katering gwo volim'
          },
          {
            icon: Users,
            title: 'Sipò pou Nouvo Biznis & Ti Biznis',
            description: 'Te ede plizyè dizèn antreprenè manje, ede yo navige nan konplikasyon pou lanse ak devlope biznis yo'
          },
          {
            icon: Award,
            title: 'Konsiltan Sètifye HACCP',
            description: 'Ekspè nan konfòmite sekirite manje, sistèm ijyèn, ak kondisyon regilatwa pou biznis manje'
          },
          {
            icon: TrendingUp,
            title: 'Espesyalis Kizin Karayib',
            description: 'Konpreyansyon pwofon tradisyon kizin Karayib, ede biznis yo respekte eritaj kiltirèl yo pandan y ap gen siksè komèsyal'
          }
        ]
      },
      philosophy: {
        title: 'Filozofi Mwen',
        quote: 'Chak biznis manje ki gen siksè kòmanse avèk twa bagay: yon pasyon pwofon pou metye a, yon angajman pou ekselans, ak bon sistèm pou sipòte kwasans dirab. Misyon mwen se ede antreprenè yo itilize twa sa yo.',
        approach: 'Rose kwè ke biznis manje yo rive lè yo konbine atis kizin ak bon pratik biznis. Background inik li—ki melanje ekspètiz kizin pratik ak fòmasyon fòmèl nan jesyon operasyon—pèmèt li gide kliyan yo nan chak aspè pou bati yon antrepriz manje ki gen siksè.',
        commitment: 'Kit ou se yon chef ki reve louvri premye restoran ou, yon moun k ap fè katering ki vle grandi, oswa yon biznis etabli k ap chèche optimize operasyon, Rose pote konesans, eksperyans, ak konpreyansyon kiltirèl pou ede w reyisi.'
      },
      achievements: [
        '50+ Biznis Konsèy',
        'Sètifye HACCP',
        '200% Mwayen Kwasans Revni',
        '95% To Kliyan ki Rete'
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
        </motion.div>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="Images\Picture1.jpg"
                  alt="Rose Marsan - Founder"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                
                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-white mb-2">{text.title}</h2>
                  <p className="text-emerald-100 text-lg">{text.subtitle}</p>
                </div>
              </div>

              {/* Achievement badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 w-full max-w-md px-4">
                {text.achievements.slice(0, 2).map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex-1"
                  >
                    <Badge className="w-full bg-white text-emerald-700 hover:bg-white border-2 border-emerald-600 shadow-lg py-2 px-4 justify-center">
                      {achievement}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:pt-8"
          >
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {text.intro}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-emerald-700 mb-6">{text.background.title}</h3>
              <div className="space-y-4">
                {text.background.education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <Card key={index} className="p-5 border-l-4 border-emerald-600 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <h4 className="text-emerald-700 mb-2">{edu.title}</h4>
                          <p className="text-gray-600 text-sm">{edu.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional achievements */}
            <div className="grid grid-cols-2 gap-4">
              {text.achievements.slice(2).map((achievement, index) => (
                <Badge key={index} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 py-3 px-4 justify-center border border-emerald-300">
                  {achievement}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-center text-emerald-700 mb-12">{text.experience.title}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {text.experience.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-emerald-600 bg-white">
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="text-emerald-700 mb-3">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <Quote className="h-16 w-16 text-emerald-300 mb-6 opacity-50" />
              <h3 className="text-white mb-6">{text.philosophy.title}</h3>
              
              <blockquote className="text-2xl text-emerald-50 italic mb-8 leading-relaxed">
                "{text.philosophy.quote}"
              </blockquote>
              
              <div className="space-y-4 text-emerald-100">
                <p className="leading-relaxed">{text.philosophy.approach}</p>
                <p className="leading-relaxed">{text.philosophy.commitment}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
