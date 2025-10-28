import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

interface TestimonialsProps {
  language: 'en' | 'ht';
}

export function Testimonials({ language }: TestimonialsProps) {
  const content = {
    en: {
      badge: 'Success Stories',
      title: 'What Our Clients Say',
      subtitle: 'Real results from food entrepreneurs who transformed their businesses with our guidance',
      testimonials: [
        {
          name: 'Maxime Gabriel',
          role: 'Owner, Caribbean Fusion Restaurant',
          content: 'Marsan helped us streamline our kitchen operations and achieve HACCP compliance. Our costs dropped 30% and customer satisfaction increased dramatically.',
          rating: 5,
          initials: 'MR'
        },
        {
          name: 'Marie Saintil',
          role: 'Catering Business Owner',
          content: 'The business planning and branding guidance was invaluable. We went from struggling to thriving, with bookings up 150% in just 6 months.',
          rating: 5,
          initials: 'JT'
        },
        {
          name: 'Rosena Jean',
          role: 'Food Startup Founder',
          content: 'As a first-time food entrepreneur, I was overwhelmed. Rose provided the expertise and support I needed to launch successfully and scale confidently.',
          rating: 5,
          initials: 'SL'
        }
      ],
      comingSoon: 'More success stories coming soon from our growing list of satisfied clients.'
    },
    ht: {
      badge: 'Istwa Siksè',
      title: 'Sa Kliyan Nou Yo Di',
      subtitle: 'Rezilta reyèl de antreprenè manje ki transfòme biznis yo avèk gid nou',
      testimonials: [
        {
          name: 'Maxime Gabriel',
          role: 'Pwopriyetè, Restoran Fizyòn Karayib',
          content: 'Marsan te ede nou amelyore operasyon kizin nou epi jwenn konfòmite HACCP. Depans nou te bese 30% epi satisfaksyon kliyan te ogmante anpil.',
          rating: 5,
          initials: 'MR'
        },
        {
          name: 'Marie Saintil',
          role: 'Pwopriyetè Biznis Katering',
          content: 'Konsèy sou planifikasyon biznis ak mak te enpòtan anpil. Nou te soti nan pwoblèm pou nou vin reyisi, avèk rezèvasyon ki monte 150% nan jis 6 mwa.',
          rating: 5,
          initials: 'JT'
        },
        {
          name: 'Rosena Jean',
          role: 'Fondatè Nouvo Biznis Manje',
          content: 'Kòm premye fwa m kòmanse biznis manje, mwen te santi m depase. Rose te bay mwen ekspètiz ak sipò mwen te bezwen pou m lanse avèk siksè epi grandi avèk konfyans.',
          rating: 5,
          initials: 'SL'
        }
      ],
      comingSoon: 'Plis istwa siksè ap vini byento de lis nou ki ap grandi de kliyan ki kontan.'
    }
  };

  const text = content[language];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {text.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all border-t-4 border-emerald-600 relative">
                <Quote className="h-10 w-10 text-emerald-200 absolute top-4 right-4" />
                
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-emerald-600 to-emerald-700">
                    <AvatarFallback className="text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-emerald-100 p-8 rounded-xl"
        >
          <p className="text-emerald-800 italic">
            {text.comingSoon}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
