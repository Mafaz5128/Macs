import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Contact Form Section */}
            <div className="p-10 md:p-12 lg:p-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Get In Touch
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Have a project in mind or want to discuss how we can help your business? Fill out the form and our team will get back to you within 24 hours.
              </motion.p>

              <motion.form 
                action="https://formspree.io/f/yourformid" 
                method="POST"
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="John Doe" 
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="john@example.com" 
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                  <textarea 
                    name="message" 
                    id="message"
                    rows="5"
                    placeholder="Tell us about your project..." 
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </motion.form>
            </div>

            {/* Contact Info Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 md:p-12 lg:p-16 border-l border-gray-700">
              <motion.h3 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Contact Information
              </motion.h3>
              
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/20 p-3 rounded-full">
                    <FaEnvelope className="text-teal-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase font-semibold mb-1">Email</h4>
                    <p className="text-white text-lg">contact@macstech.com</p>
                    <p className="text-gray-400 text-sm">Response time: 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <FaPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase font-semibold mb-1">Phone</h4>
                    <p className="text-white text-lg">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm uppercase font-semibold mb-1">Headquarters</h4>
                    <p className="text-white text-lg">123 Tech Park Avenue</p>
                    <p className="text-white text-lg">San Francisco, CA 94107</p>
                    <p className="text-gray-400 text-sm">United States</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12 pt-8 border-t border-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Facebook'].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}