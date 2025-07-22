import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGlobe, FaChartLine, FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="p-10 md:p-12 lg:p-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About Our Company
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-white">MACS Technologies</span> is a premier IT services and digital transformation partner, empowering businesses globally with cutting-edge technology solutions tailored for the modern enterprise.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/30 hover:border-teal-400/30 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full mr-4">
                    <FaRocket className="text-xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300">
                  To accelerate digital transformation through innovative technology solutions that drive measurable business outcomes, operational efficiency, and competitive advantage for our clients.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-700/50 p-8 rounded-xl border border-gray-600/30 hover:border-teal-400/30 transition-all"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-fuchsia-600 p-3 rounded-full mr-4">
                    <FaGlobe className="text-xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Global Reach</h3>
                </div>
                <p className="text-gray-300">
                  Serving clients across 5 continents with regional expertise centers in North America, Europe, and Asia-Pacific, delivering localized solutions with global best practices.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <p className="text-gray-300 mb-6">
                    Our unique combination of technical expertise, industry knowledge, and client-first approach sets us apart in the competitive IT services landscape.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "150+ certified technology experts",
                      "97% client retention rate",
                      "ISO 27001 certified security",
                      "Agile delivery methodology",
                      "24/7 global support"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-teal-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center justify-center border border-gray-600/30">
                    <FaUsers className="text-4xl text-blue-400 mb-3" />
                    <span className="text-3xl font-bold text-white">200+</span>
                    <span className="text-gray-400 text-sm">Clients Worldwide</span>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center justify-center border border-gray-600/30">
                    <FaChartLine className="text-4xl text-teal-400 mb-3" />
                    <span className="text-3xl font-bold text-white">15+</span>
                    <span className="text-gray-400 text-sm">Years Experience</span>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center justify-center border border-gray-600/30">
                    <FaCode className="text-4xl text-purple-400 mb-3" />
                    <span className="text-3xl font-bold text-white">500+</span>
                    <span className="text-gray-400 text-sm">Projects Delivered</span>
                  </div>
                  <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col items-center justify-center border border-gray-600/30">
                    <FaRocket className="text-4xl text-amber-400 mb-3" />
                    <span className="text-3xl font-bold text-white">40+</span>
                    <span className="text-gray-400 text-sm">Technologies</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all">
                Meet Our Team
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}