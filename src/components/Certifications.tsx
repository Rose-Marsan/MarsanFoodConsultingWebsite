import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Award, BookOpen, Users, CheckCircle2, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CertificationsProps {
  language: 'en' | 'ht';
}

export function Certifications({ language }: CertificationsProps) {
  const content = {
    en: {
      badge: 'Credentials & Expertise',
      title: 'Certified Excellence in Food Business Consulting',
      subtitle: 'Our qualifications ensure you receive industry-leading guidance backed by formal education and professional certifications',
      certifications: [
        {
          icon: Shield,
          title: 'HACCP Certified Consultant',
          issuer: 'International HACCP Alliance',
          description: 'Certified to develop, implement, and audit Hazard Analysis and Critical Control Points systems for food safety compliance',
          year: '2018',
          skills: ['Food Safety Plans', 'Compliance Audits', 'Risk Assessment', 'Documentation Systems']
        },
        {
          icon: Award,
          title: 'Certified Food Safety Manager',
          issuer: 'National Registry of Food Safety Professionals',
          description: 'Advanced certification in food safety management, sanitation protocols, and regulatory compliance',
          year: '2017',
          skills: ['Sanitation Standards', 'Temperature Control', 'Cross-Contamination Prevention', 'Employee Training']
        },
        {
          icon: BookOpen,
          title: 'ServSafe Manager Certification',
          issuer: 'National Restaurant Association',
          description: 'Industry-recognized certification demonstrating expertise in food safety practices and regulations',
          year: '2016',
          skills: ['Food Handling', 'Storage Procedures', 'Cleaning Protocols', 'Allergen Management']
        },
        {
          icon: Users,
          title: 'Small Business Management Certificate',
          issuer: 'U.S. Small Business Administration',
          description: 'Specialized training in supporting small businesses, startups, and entrepreneurs',
          year: '2019',
          skills: ['Business Planning', 'Financial Management', 'Marketing Strategy', 'Growth Consulting']
        }
      ],
      education: [
        {
          degree: 'Bachelor of Science in Operations Management',
          institution: 'Florida International University',
          year: '2015',
          highlights: ['Supply Chain Management', 'Process Optimization', 'Quality Control', 'Business Analytics']
        },
        {
          degree: 'Associate Degree in Culinary Arts',
          institution: 'Le Cordon Bleu',
          year: '2012',
          highlights: ['Professional Cooking', 'Menu Development', 'Kitchen Management', 'Food Costing']
        }
      ],
      memberships: [
        'National Restaurant Association Member',
        'Caribbean American Restaurant Association',
        'Women in Food Industry Network',
        'Small Business Development Council'
      ],
      stats: {
        title: 'By The Numbers',
        items: [
          { value: '15+', label: 'Professional Certifications' },
          { value: '500+', label: 'Training Hours Completed' },
          { value: '10+', label: 'Years Experience' },
          { value: '100%', label: 'Compliance Success Rate' }
        ]
      }
    },
    ht: {
      badge: 'Akreditasyon & Ekspètiz',
      title: 'Ekselans Sètifye nan Konsiltasyon Biznis Manje',
      subtitle: 'Kalifikasyon nou asire ou resevwa gid ki mennen nan endistri a, sipòte pa edikasyon fòmèl ak sètifikasyon pwofesyonèl',
      certifications: [
        {
          icon: Shield,
          title: 'Konsiltan Sètifye HACCP',
          issuer: 'International HACCP Alliance',
          description: 'Sètifye pou devlope, enplemante, ak verifye sistèm Analiz Risk ak Pwen Kontwòl Kritik pou konfòmite sekirite manje',
          year: '2018',
          skills: ['Plan Sekirite Manje', 'Odit Konfòmite', 'Evalyasyon Risk', 'Sistèm Dokimantasyon']
        },
        {
          icon: Award,
          title: 'Manadjè Sekirite Manje Sètifye',
          issuer: 'National Registry of Food Safety Professionals',
          description: 'Sètifikasyon avanse nan jesyon sekirite manje, pwotokòl ijyèn, ak konfòmite regilatwa',
          year: '2017',
          skills: ['Estanda Ijyèn', 'Kontwòl Tanperati', 'Prevansyon Kontaminasyon Kwaze', 'Fòmasyon Anplwaye']
        },
        {
          icon: BookOpen,
          title: 'Sètifikasyon Manadjè ServSafe',
          issuer: 'National Restaurant Association',
          description: 'Sètifikasyon rekonèt nan endistri a ki demontre ekspètiz nan pratik sekirite manje ak règleman',
          year: '2016',
          skills: ['Manipilasyon Manje', 'Pwosedi Depo', 'Pwotokòl Netwayaj', 'Jesyon Alèjèn']
        },
        {
          icon: Users,
          title: 'Sètifika Jesyon Ti Biznis',
          issuer: 'U.S. Small Business Administration',
          description: 'Fòmasyon espesyalize nan sipò ti biznis, nouvo biznis, ak antreprenè',
          year: '2019',
          skills: ['Planifikasyon Biznis', 'Jesyon Finansye', 'Estrateji Maketing', 'Konsiltasyon Kwasans']
        }
      ],
      education: [
        {
          degree: 'Lisans nan Syans Jesyon Operasyon',
          institution: 'Florida International University',
          year: '2015',
          highlights: ['Jesyon Chèn Aprovizònman', 'Optimize Pwosesis', 'Kontwòl Kalite', 'Analitik Biznis']
        },
        {
          degree: 'Diplòm Asosye nan Atizay Kizin',
          institution: 'Le Cordon Bleu',
          year: '2012',
          highlights: ['Kizin Pwofesyonèl', 'Devlopman Meni', 'Jesyon Kizin', 'Kalkilasyon Pri Manje']
        }
      ],
      memberships: [
        'Manm National Restaurant Association',
        'Caribbean American Restaurant Association',
        'Women in Food Industry Network',
        'Small Business Development Council'
      ],
      stats: {
        title: 'Pa Chif',
        items: [
          { value: '15+', label: 'Sètifikasyon Pwofesyonèl' },
          { value: '500+', label: 'Èdtan Fòmasyon Konplete' },
          { value: '10+', label: 'Ane Eksperyans' },
          { value: '100%', label: 'To Siksè Konfòmite' }
        ]
      }
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8">
            <h3 className="text-center text-white mb-8">{text.stats.title}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {text.stats.items.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-white mb-2">{stat.value}</div>
                  <div className="text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {text.certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all border-t-4 border-emerald-600 bg-gradient-to-br from-white to-emerald-50/30">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-emerald-700 mb-2">{cert.title}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <Badge className="mt-2 bg-emerald-100 text-emerald-700 border border-emerald-300">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="border-t border-emerald-200 pt-4">
                    <p className="text-sm text-emerald-700 mb-3">
                      {language === 'en' ? 'Key Skills:' : 'Konpetans Kle:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-emerald-300 text-gray-700">
                          <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-600" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-emerald-700 mb-8">
            {language === 'en' ? 'Formal Education' : 'Edikasyon Fòmèl'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {text.education.map((edu, index) => (
              <Card key={index} className="p-8 border-l-4 border-emerald-600 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-emerald-700 mb-1">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <Badge className="mt-2 bg-white border border-emerald-300 text-emerald-700">
                      {edu.year}
                    </Badge>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-8">
            <h3 className="text-center text-emerald-700 mb-6">
              {language === 'en' ? 'Professional Memberships' : 'Manm Pwofesyonèl'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {text.memberships.map((membership, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{membership}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
