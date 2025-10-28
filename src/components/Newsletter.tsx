import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsletterProps {
  language: 'en' | 'ht';
}

export function Newsletter({ language }: NewsletterProps) {
  const content = {
    en: {
      badge: 'Stay Updated',
      title: 'Get Food Business Insights Delivered',
      subtitle: 'Subscribe to receive expert tips, industry trends, and exclusive resources for food entrepreneurs.',
      placeholder: 'Enter your email',
      cta: 'Subscribe Now',
      privacy: 'We respect your privacy. Unsubscribe anytime.',
      benefits: [
        'Weekly food business tips',
        'HACCP compliance updates',
        'Exclusive templates & guides'
      ]
    },
    ht: {
      badge: 'Rete Enfòme',
      title: 'Resevwa Konsèy pou Biznis Manje',
      subtitle: 'Abòne w pou resevwa konsèy ekspè, tandans endistri a, ak resous eksklizif pou antreprenè manje.',
      placeholder: 'Antre imèl ou',
      cta: 'Abòne Kounye a',
      privacy: 'Nou respekte vi prive w. Dezabòne nenpòt lè.',
      benefits: [
        'Konsèy biznis manje chak semèn',
        'Mizajou sou konfòmite HACCP',
        'Modèl ak gid eksklizif'
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1721314678207-8b7bd43e677b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBjdWlzaW5lJTIwcGxhdGV8ZW58MXx8fHwxNzYwMDcxMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Caribbean cuisine"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Mail className="h-4 w-4 text-white" />
            <span className="text-sm text-white">{text.badge}</span>
          </div>
          <h2 className="text-white mb-4">{text.title}</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3">
                {text.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <Send className="h-4 w-4 text-emerald-700" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder={text.placeholder}
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <Send className="mr-2 h-4 w-4" />
                    {text.cta}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  {text.privacy}
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
