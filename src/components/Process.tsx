import { motion } from 'motion/react';
import { ClipboardList, Lightbulb, Cog, TrendingUp, CheckCircle } from 'lucide-react';

interface ProcessProps {
  language: 'en' | 'ht';
}

export function Process({ language }: ProcessProps) {
  const content = {
    en: {
      badge: 'Our Methodology',
      title: 'How We Transform Your Food Business',
      subtitle: 'A proven 5-step process that takes your food business from concept to sustainable success',
      steps: [
        {
          icon: ClipboardList,
          title: 'Discovery & Assessment',
          description: 'We analyze your current operations, challenges, and goals to create a customized roadmap for success.'
        },
        {
          icon: Lightbulb,
          title: 'Strategic Planning',
          description: 'Develop comprehensive business plans, HACCP protocols, and operational systems tailored to your needs.'
        },
        {
          icon: Cog,
          title: 'Implementation',
          description: 'We work alongside you to implement new systems, train your team, and establish best practices.'
        },
        {
          icon: TrendingUp,
          title: 'Optimization',
          description: 'Fine-tune operations for maximum efficiency, profitability, and compliance with industry standards.'
        },
        {
          icon: CheckCircle,
          title: 'Ongoing Support',
          description: 'Continuous guidance and support to ensure long-term growth and sustained success.'
        }
      ]
    },
    ht: {
      badge: 'Metòd Nou',
      title: 'Kijan Nou Transfòme Biznis Manje Ou',
      subtitle: 'Yon pwosesis 5 etap ki pwouve ki mennen biznis manje ou soti nan konsèp rive nan siksè dirab',
      steps: [
        {
          icon: ClipboardList,
          title: 'Dekouvri & Evalyasyon',
          description: 'Nou analize operasyon aktyèl ou, defi ou, ak objektif ou pou kreye yon plan pèsonalize pou siksè.'
        },
        {
          icon: Lightbulb,
          title: 'Planifikasyon Estratejik',
          description: 'Devlope plan biznis konplè, pwotokòl HACCP, ak sistèm operasyonèl ki adapte pou bezwen ou.'
        },
        {
          icon: Cog,
          title: 'Enplemantasyon',
          description: 'Nou travay avèk ou pou enplemante nouvo sistèm, fòme ekip ou, epi etabli bon pratik.'
        },
        {
          icon: TrendingUp,
          title: 'Optimize',
          description: 'Ajiste operasyon pou maksimòm efikasite, pwofitabilite, ak konfòmite ak estanda endistri a.'
        },
        {
          icon: CheckCircle,
          title: 'Sipò Kontinyèl',
          description: 'Gid ak sipò kontinyèl pou asire kwasans alontèm ak siksè dirab.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {text.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-xl transition-all hover:border-emerald-300 h-full">
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-emerald-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-emerald-700 text-center mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
