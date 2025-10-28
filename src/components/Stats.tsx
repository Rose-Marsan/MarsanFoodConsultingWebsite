import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

interface StatsProps {
  language: 'en' | 'ht';
}

export function Stats({ language }: StatsProps) {
  const stats = {
    en: [
      { icon: Users, value: '50+', label: 'Businesses Helped' },
      { icon: TrendingUp, value: '200%', label: 'Avg. Revenue Growth' },
      { icon: Award, value: '100%', label: 'HACCP Compliance' },
      { icon: Target, value: '95%', label: 'Client Retention' }
    ],
    ht: [
      { icon: Users, value: '50+', label: 'Biznis nou ede' },
      { icon: TrendingUp, value: '200%', label: 'Mwayen Kwasans Revni' },
      { icon: Award, value: '100%', label: 'Konfòmite HACCP' },
      { icon: Target, value: '95%', label: 'Kliyan ki Rete' }
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats[language].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Icon className="h-8 w-8 text-emerald-200 mx-auto mb-3" />
                  <div className="text-4xl text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-emerald-100">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
