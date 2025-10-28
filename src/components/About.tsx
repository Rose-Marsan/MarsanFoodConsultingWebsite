import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  language: 'en' | 'ht';
}

export function About({ language }: AboutProps) {
  const content = {
    en: {
      badge: 'Our Story',
      title: 'About Marsan Food Business Consultant',
      intro: 'At Marsan Food Business Consultant, we help food entrepreneurs, restaurant owners, and caterers strengthen their operations, branding, and compliance to achieve lasting success.',
      founder: 'Founded by Rose Marsan, a Culinary Arts graduate with an Associate Degree and a Bachelor of Science in Operations Management, the company blends food industry expertise with business strategy to help clients grow confidently.',
      experience: 'With years of experience managing large dining operations and supporting startups, Rose understands the challenges food businesses face from sanitation systems and staff training to menu design and workflow efficiency.',
      mission: 'Her mission is simple: to empower food entrepreneurs to build sustainable, compliant, and profitable businesses while maintaining quality and authenticity.',
      visionTitle: 'Our Vision',
      vision: 'To become a trusted leader in helping food entrepreneurs build sustainable, compliant, and profitable businesses while celebrating the rich flavors and culture of the Caribbean. We envision a future where small food businesses operate with confidence, creativity, and integrity—transforming their passion into success stories that inspire communities.',
      missionTitle: 'Our Mission',
      missionStatement: 'To empower food entrepreneurs through professional consulting, education, and operational support helping them grow with excellence, efficiency, and authenticity.'
    },
    ht: {
      badge: 'Istwa Nou',
      title: 'Nan Marsan Food Business Consultant',
      intro: 'Nan Marsan Food Business Consultant, nou ede antreprenè manje, pwopriyetè restoran, ak moun k ap fè sèvis manje ranfòse operasyon yo, amelyore mak yo, epi respekte tout règleman pou yo kapab reyisi alontèm.',
      founder: 'Konpayi an te fonde pa Rose Marsan, ki gen yon Asosye nan Atizay Kizin (Culinary Arts) ak yon Lisans nan Jesyon Operasyon (Operations Management). Li konbine eksperyans nan endistri manje ak konesans nan biznis pou ede kliyan devlope avèk konfyans.',
      experience: 'Avèk anpil ane eksperyans nan jesyon sèvis manje ak sipò pou nouvo biznis, Rose konnen defi ke biznis manje yo rankontre depi nan ijyèn ak fòmasyon pèsonèl, rive nan konsepsyon meni ak bon estrikti travay.',
      mission: 'Misyon li senp: ede antreprenè manje bati biznis ki dirab, ki konfòm, ki pwofitab, pandan yo kenbe bon jan kalite ak otantisite.',
      visionTitle: 'Vizyon Nou',
      vision: 'Vin tounen yon lidè ki merite konfyans nan sipòte antreprenè manje yo pou yo bati biznis ki dirab, ki konfòm, ak pwofitab pandan n ap selebre richès gou ak kilti Karayib la. Nou wè yon avni kote ti biznis manje yo ap fonksyone ak konfyans, kreyativite, ak entegrite — pou yo transfòme pasyon yo an siksè ki enspire kominote yo.',
      missionTitle: 'Misyon Nou',
      missionStatement: 'Nou vize pou n bay antreprenè manje yo fòs ak konesans atravè konsiltasyon pwofesyonèl, fòmasyon, ak sipò operasyonèl pou yo grandi avèk ekselans, efikasite, ak otantisite.'
    }
  };

  const text = content[language];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-700 mb-6">{text.title}</h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">{text.intro}</p>
              <p className="text-gray-700 leading-relaxed">{text.founder}</p>
              <p className="text-gray-700 leading-relaxed">{text.experience}</p>
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-6 rounded-lg border-l-4 border-emerald-600">
                <p className="text-gray-800 italic">{text.mission}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1713547174010-b53fa1cc4b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYwMDcxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant interior"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1621494548002-bfc916172ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYnVzaW5lc3MlMjBraXRjaGVufGVufDF8fHx8MTc2MDA3MDE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional kitchen operations"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642741580389-87dd75d913f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBmb29kJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjAwNzAxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Caribbean food culture"
              className="rounded-xl shadow-lg w-full h-48 object-cover"
            />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-white">{text.visionTitle}</h3>
            </div>
            <p className="text-emerald-50 leading-relaxed">{text.vision}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-white">{text.missionTitle}</h3>
            </div>
            <p className="text-emerald-50 leading-relaxed">{text.missionStatement}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
