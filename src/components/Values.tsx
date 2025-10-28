import { Card } from './ui/card';
import { Heart, Star, Users, Leaf, Handshake, TreePine, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ValuesProps {
  language: 'en' | 'ht';
}

export function Values({ language }: ValuesProps) {
  const content = {
    en: {
      badge: 'What Drives Us',
      title: 'Our Core Values',
      subtitle: 'The principles that guide everything we do',
      values: [
        {
          icon: Heart,
          title: 'Integrity',
          description: 'We operate with honesty, transparency, and accountability in every partnership.'
        },
        {
          icon: Star,
          title: 'Excellence',
          description: 'We strive for the highest standards in food safety, service, and business performance.'
        },
        {
          icon: Users,
          title: 'Empowerment',
          description: 'We educate and guide clients so they can lead their businesses confidently.'
        },
        {
          icon: Leaf,
          title: 'Cultural Pride',
          description: 'We honor Caribbean culinary heritage through authenticity and respect.'
        },
        {
          icon: Handshake,
          title: 'Collaboration',
          description: 'We believe success grows through teamwork, trust, and community support.'
        },
        {
          icon: TreePine,
          title: 'Sustainability',
          description: 'We help businesses build systems that last—ethically and economically.'
        }
      ]
    },
    ht: {
      badge: 'Sa Ki Gide Nou',
      title: 'Valè Esansyèl Nou yo',
      subtitle: 'Prensip ki gide tout sa nou fè',
      values: [
        {
          icon: Heart,
          title: 'Entegrite',
          description: 'Nou travay avèk onètete, transparans, ak responsabilite nan tout patenarya nou yo.'
        },
        {
          icon: Star,
          title: 'Ekselans',
          description: 'Nou chèche pi bon estanda nan sekirite manje, sèvis, ak pèfòmans biznis.'
        },
        {
          icon: Users,
          title: 'Otorizasyon (Empowerment)',
          description: 'Nou fòme ak gide kliyan nou yo pou yo mennen biznis yo avèk konfyans.'
        },
        {
          icon: Leaf,
          title: 'Fyète Kiltirèl',
          description: 'Nou onore eritaj kizin Karayib la avèk respè ak otantisite.'
        },
        {
          icon: Handshake,
          title: 'Kolaborasyon',
          description: 'Nou kwè siksè bati sou travay ann ekip, konfyans, ak sipò kominotè.'
        },
        {
          icon: TreePine,
          title: 'Dirabilite',
          description: 'Nou ede biznis yo bati sistèm ki solid, etik, ak ekonomikman dirab.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-emerald-600 h-full group bg-gradient-to-br from-white to-emerald-50/30">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-emerald-700 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
