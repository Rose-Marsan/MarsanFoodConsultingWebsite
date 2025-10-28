import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface ContactProps {
  language: 'en' | 'ht';
}

export function Contact({ language }: ContactProps) {
  const content = {
    en: {
      badge: 'Let\'s Connect',
      title: 'Get In Touch',
      subtitle: "Ready to take your food business to the next level? Let's connect and discuss how we can help you succeed.",
      email: 'Email',
      phone: 'Phone',
      location: 'Service Area',
      hours: 'Business Hours',
      hoursText: 'Mon-Fri: 9AM - 6PM EST',
      cta: 'Send a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formPhone: 'Phone Number',
      formMessage: 'Tell us about your food business',
      formSubmit: 'Send Message',
      responseTime: 'We typically respond within 24 hours'
    },
    ht: {
      badge: 'Ann Konekte',
      title: 'Kontakte Nou',
      subtitle: 'Ou pare pou pran biznis manje ou nan yon lòt nivo? Ann pale sou kijan nou ka ede ou reyisi.',
      email: 'Imèl',
      phone: 'Telefòn',
      location: 'Zòn Sèvis',
      hours: 'Èdtan Travay',
      hoursText: 'Lendi-Vandredi: 9AM - 6PM EST',
      cta: 'Voye yon Mesaj',
      formName: 'Non Ou',
      formEmail: 'Imèl Ou',
      formPhone: 'Nimewo Telefòn',
      formMessage: 'Di nou plis sou biznis manje ou',
      formSubmit: 'Voye Mesaj',
      responseTime: 'Nou reponn an 24 èdtan tipikman'
    }
  };

  const text = content[language];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-emerald-700" />
            <span className="text-sm text-emerald-700">{text.badge}</span>
          </div>
          <h2 className="text-emerald-700 mb-4">{text.title}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">{text.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-emerald-700 mb-2">{text.email}</h4>
                  <a href="mailto:info@marsanfoodconsulting.com" className="text-gray-700 hover:text-emerald-700 transition-colors">
                    rosemarsan@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-emerald-700 mb-2">{text.phone}</h4>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-emerald-700 transition-colors">
                    (617) 828-0346
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-emerald-700 mb-2">{text.location}</h4>
                  <p className="text-gray-700">
                    {language === 'en' 
                      ? 'Serving food businesses nationwide' 
                      : 'Nou sèvi biznis manje nan tout peyi a'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-emerald-700 mb-2">{text.hours}</h4>
                  <p className="text-gray-700">{text.hoursText}</p>
                </div>
              </div>
            </Card>

            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 lg:p-10 shadow-2xl border-t-4 border-emerald-600">
              <h3 className="text-emerald-700 mb-6">{text.cta}</h3>
              <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
                {/* REQUIRED hidden access key */}
                <input type="hidden" name="access_key" value="bedcd5f4-3eed-411e-9643-35c452852288" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {text.formName} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder={language === 'en' ? 'John Doe' : 'Non ou'}
                      className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {text.formEmail} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {text.formPhone}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {text.formMessage} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    rows={6}
                    placeholder={
                      language === 'en'
                        ? 'Tell us about your food business goals, challenges, and how we can help...'
                        : 'Pale nou de objektif biznis manje ou, defi ou, ak kijan nou ka ede w...'
                    }
                    className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Send className="h-4 w-4 text-emerald-600" />
                  <span>{text.responseTime}</span>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg text-lg py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {text.formSubmit}
                </Button>
              </form>

            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





// import { Card } from './ui/card';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { motion } from 'motion/react';
// import { useState } from 'react';

// interface ContactProps {
//   language: 'en' | 'ht';
// }

// export function Contact({ language }: ContactProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const content = {
//     en: {
//       badge: "Let's Connect",
//       title: 'Get In Touch',
//       subtitle:
//         "Ready to take your food business to the next level? Let's connect and discuss how we can help you succeed.",
//       email: 'Email',
//       phone: 'Phone',
//       location: 'Service Area',
//       hours: 'Business Hours',
//       hoursText: 'Mon-Fri: 9AM - 6PM EST',
//       cta: 'Send a Message',
//       formName: 'Your Name',
//       formEmail: 'Your Email',
//       formPhone: 'Phone Number',
//       formMessage: 'Tell us about your food business',
//       formSubmit: 'Send Message',
//       responseTime: 'We typically respond within 24 hours',
//       successMsg: '✅ Message sent successfully!',
//       errorMsg: '❌ Something went wrong. Please try again.',
//     },
//     ht: {
//       badge: 'Ann Konekte',
//       title: 'Kontakte Nou',
//       subtitle:
//         'Ou pare pou pran biznis manje ou nan yon lòt nivo? Ann pale sou kijan nou ka ede ou reyisi.',
//       email: 'Imèl',
//       phone: 'Telefòn',
//       location: 'Zòn Sèvis',
//       hours: 'Èdtan Travay',
//       hoursText: 'Lendi-Vandredi: 9AM - 6PM EST',
//       cta: 'Voye yon Mesaj',
//       formName: 'Non Ou',
//       formEmail: 'Imèl Ou',
//       formPhone: 'Nimewo Telefòn',
//       formMessage: 'Di nou plis sou biznis manje ou',
//       formSubmit: 'Voye Mesaj',
//       responseTime: 'Nou reponn an 24 èdtan tipikman',
//       successMsg: '✅ Mesaj ou voye avèk siksè!',
//       errorMsg: '❌ Gen yon erè. Eseye ankò.',
//     },
//   };

//   const text = content[language];

//   // Handle form submission manually for better UX
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);

//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData,
//     });

//     const result = await response.json();
//     setIsSubmitting(false);

//     if (result.success) {
//       alert(text.successMsg);
//       e.currentTarget.reset();
//     } else {
//       alert(text.errorMsg);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
//             <MessageCircle className="h-4 w-4 text-emerald-700" />
//             <span className="text-sm text-emerald-700">{text.badge}</span>
//           </div>
//           <h2 className="text-emerald-700 mb-4">{text.title}</h2>
//           <p className="text-gray-700 max-w-2xl mx-auto text-lg">{text.subtitle}</p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Contact Information */}
//           {/* unchanged code above omitted for brevity */}

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-3"
//           >
//             <Card className="p-8 lg:p-10 shadow-2xl border-t-4 border-emerald-600">
//               <h3 className="text-emerald-700 mb-6">{text.cta}</h3>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-6"
//               >
//                 <input type="hidden" name="access_key" value="a81f7872-4105-4e16-8ca2-984d1f61104c" />
//                 <input
//                   type="hidden"
//                   name="subject"
//                   value="New Consultation Message from Website"
//                 />

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 mb-2">
//                       {text.formName} <span className="text-red-500">*</span>
//                     </label>
//                     <Input
//                       type="text"
//                       name="name"
//                       placeholder={language === 'en' ? 'John Doe' : 'Non ou'}
//                       className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2">
//                       {text.formEmail} <span className="text-red-500">*</span>
//                     </label>
//                     <Input
//                       type="email"
//                       name="email"
//                       placeholder="email@example.com"
//                       className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     {text.formPhone}
//                   </label>
//                   <Input
//                     type="tel"
//                     name="phone"
//                     placeholder="(555) 123-4567"
//                     className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2">
//                     {text.formMessage} <span className="text-red-500">*</span>
//                   </label>
//                   <Textarea
//                     name="message"
//                     rows={6}
//                     placeholder={
//                       language === 'en'
//                         ? 'Tell us about your food business goals, challenges, and how we can help...'
//                         : 'Pale nou de objektif biznis manje ou, defi ou, ak kijan nou ka ede w...'
//                     }
//                     className="border-gray-300 focus:ring-emerald-700 focus:border-emerald-700 resize-none"
//                     required
//                   />
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Send className="h-4 w-4 text-emerald-600" />
//                   <span>{text.responseTime}</span>
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg text-lg py-6"
//                 >
//                   <Send className="mr-2 h-5 w-5" />
//                   {isSubmitting ? 'Sending...' : text.formSubmit}
//                 </Button>
//               </form>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
