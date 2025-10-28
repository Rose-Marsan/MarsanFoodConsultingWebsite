import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

interface FAQProps {
  language: 'en' | 'ht';
}

export function FAQ({ language }: FAQProps) {
  const content = {
    en: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about working with us',
      faqs: [
        {
          question: 'What types of food businesses do you work with?',
          answer: 'We work with a wide range of food businesses including restaurants, catering companies, food trucks, bakeries, cafes, and food startups. Whether you\'re just starting out or looking to scale, we have the expertise to help you succeed.'
        },
        {
          question: 'Do you offer services in Haitian Creole?',
          answer: 'Yes! We are proud to offer all our consulting services in both English and Haitian Creole. We understand the importance of clear communication and cultural understanding in building successful food businesses.'
        },
        {
          question: 'How long does the consulting process take?',
          answer: 'The timeline varies based on your needs and goals. Initial assessments typically take 1-2 weeks, while full implementation of systems can take 2-6 months. We work at your pace and provide ongoing support throughout the journey.'
        },
        {
          question: 'What is HACCP and why is it important?',
          answer: 'HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to food safety. It\'s crucial for compliance with health regulations and protecting your customers. We help you develop and implement HACCP plans tailored to your business.'
        },
        {
          question: 'Can you help with menu development and pricing?',
          answer: 'Absolutely! We provide comprehensive menu development services including recipe costing, pricing strategy, menu design, and product positioning to maximize profitability while maintaining quality.'
        },
        {
          question: 'What makes Marsan different from other consultants?',
          answer: 'We combine culinary expertise with operations management and a deep understanding of Caribbean food culture. Our founder holds both a Culinary Arts degree and a Bachelor\'s in Operations Management, giving us a unique perspective on food business success.'
        }
      ]
    },
    ht: {
      badge: 'Kesyon yo Poze Souvan',
      title: 'Kesyon yo Poze Souvan',
      subtitle: 'Tout sa ou bezwen konnen sou travay avèk nou',
      faqs: [
        {
          question: 'Ki kalite biznis manje nou travay avèk yo?',
          answer: 'Nou travay avèk tout kalite biznis manje tankou restoran, konpayi katering, kamyon manje, boulanjri, kafe, ak nouvo biznis manje. Kit ou fenk kòmanse oswa ou vle grandi, nou gen ekspètiz pou ede w reyisi.'
        },
        {
          question: 'Èske nou ofri sèvis an Kreyòl Ayisyen?',
          answer: 'Wi! Nou fyè pou n ofri tout sèvis konsiltasyon nou yo an Angle ak an Kreyòl Ayisyen. Nou konprann enpòtans bon kominikasyon ak konpreyansyon kiltirèl nan bati biznis manje ki gen siksè.'
        },
        {
          question: 'Konbyen tan pwosesis konsiltasyon an pran?',
          answer: 'Tan an varye selon bezwen ou ak objektif ou. Evalyasyon inisyal yo tipikman pran 1-2 semèn, pandan tout enplemantasyon sistèm yo ka pran 2-6 mwa. Nou travay ak vitès ou epi nou bay sipò kontinyèl pandan tout vwayaj la.'
        },
        {
          question: 'Kisa HACCP ye epi poukisa li enpòtan?',
          answer: 'HACCP (Analiz Risk ak Pwen Kontwòl Kritik) se yon apwòch sistematik pou sekirite manje. Li enpòtan pou konfòmite ak règleman sante ak pou pwoteje kliyan ou yo. Nou ede w devlope ak enplemante plan HACCP ki adapte pou biznis ou.'
        },
        {
          question: 'Èske ou ka ede avèk devlopman meni ak pri?',
          answer: 'Absoliman! Nou bay sèvis konplè pou devlopman meni ki enkli kalkilasyon pri resèt, estrateji pri, konsepsyon meni, ak pozisyon pwodwi pou maksimize pwofitabilite pandan w kenbe kalite.'
        },
        {
          question: 'Kisa ki fè Marsan diferan de lòt konsiltan?',
          answer: 'Nou konbine ekspètiz kizin avèk jesyon operasyon ak yon konpreyansyon pwofon kilti manje Karayib. Fondatè nou gen tou de yon diplòm nan Atizay Kizin ak yon Lisans nan Jesyon Operasyon, sa ki bay nou yon pèspektiv inik sou siksè biznis manje.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-600">
            {text.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {text.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-emerald-100 rounded-lg px-6 hover:border-emerald-300 transition-colors"
              >
                <AccordionTrigger className="text-left text-emerald-700 hover:text-emerald-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
