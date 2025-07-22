import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import DataAnalytics from './DataAnalytics.jpg';
import AiPowered from './AiPowered.jpg';
import IOT from './IOT.jpg';
import CloudComputing from './CloudComputing.jpg';
import Cybersecurity from './Cybersecurity.jpg';
import SoftwareDev from './SoftwareDev.jpg';

const ServiceCard = ({ title, description, icon, delay, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl shadow-xl group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 text-4xl">{icon}</div>
      </div>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const TechPill = ({ children, index }) => {
  const colors = [
    'bg-teal-500/10 text-teal-400 border-teal-400/20',
    'bg-purple-500/10 text-purple-400 border-purple-400/20',
    'bg-amber-500/10 text-amber-400 border-amber-400/20',
    'bg-blue-500/10 text-blue-400 border-blue-400/20',
    'bg-emerald-500/10 text-emerald-400 border-emerald-400/20'
  ];
  const color = colors[index % colors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`px-4 py-2 rounded-full border ${color} backdrop-blur-sm flex items-center`}
    >
      <span className="mr-2">•</span>
      {children}
    </motion.div>
  );
};

export default function Home() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Build intelligent systems with our cutting-edge AI solutions.",
      icon: "🤖",
      image: AiPowered
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure tailored to your needs.",
      icon: "☁️",
      image: CloudComputing
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights.",
      icon: "📊",
      image: DataAnalytics
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions.",
      icon: "🔐",
      image: Cybersecurity
    },
    {
      title: "Software Development",
      description: "Custom solutions for unique requirements.",
      icon: "💻",
      image: SoftwareDev
    },
    {
      title: "IoT Solutions",
      description: "Connect physical and digital worlds.",
      icon: "🌐",
      image: IOT
    }
  ];

  const techStack = [
    "AI/ML", "TensorFlow", "PyTorch", "Cloud", "AWS", 
    "Azure", "GCP", "React", "Node.js", "Python", 
    "Blockchain", "IoT", "Big Data", "Kubernetes", 
    "Docker", "Cybersecurity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('./pattern.svg')] bg-cover opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                Next-Gen IT Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Harness cutting-edge technology to transform your business
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all">
                Get Started
              </button>
              <button className="border-2 border-gray-500 text-gray-300 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-gray-800/30 hover:border-teal-400 hover:text-white transition-all">
                Our Services
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl text-center font-bold mb-12 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Our Technology Stack
            </span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <TechPill key={tech} index={index}>
                {tech}
              </TechPill>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Our Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Comprehensive solutions tailored to your business needs
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Focus Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={AiPowered} 
                alt="AI Solutions" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-600/20" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                AI-Powered Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Leverage our AI expertise to automate processes and gain competitive insights.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Predictive analytics for smarter decisions",
                "Natural language processing for CX",
                "Computer vision automation",
                "Generative AI solutions",
                "AI-enhanced cybersecurity"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-400 mr-3">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              Explore AI Solutions
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to <span className="text-teal-400">Innovate</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-300"
          >
            Let's discuss how we can help you leverage technology to achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all">
              Schedule Consultation
            </button>
            <button className="border-2 border-gray-500 text-gray-300 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-gray-800/30 hover:border-teal-400 hover:text-white transition-all">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}