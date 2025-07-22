import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, 
  FaChartLine, 
  FaRobot, 
  FaLock, 
  FaCode, 
  FaNetworkWired 
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Cloud Solutions',
    desc: 'End-to-end AWS, Azure, and GCP deployment with automated scaling and cost optimization.',
    icon: <FaCloud className="text-4xl mb-4" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Data Analytics',
    desc: 'Transform data into insights with real-time dashboards and predictive analytics.',
    icon: <FaChartLine className="text-4xl mb-4" />,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    title: 'AI Consulting',
    desc: 'Enterprise AI strategy, custom model development, and MLOps implementation.',
    icon: <FaRobot className="text-4xl mb-4" />,
    color: 'from-purple-500 to-fuchsia-500'
  },
  {
    title: 'Cybersecurity',
    desc: 'Zero-trust architecture and compliance solutions with 24/7 threat monitoring.',
    icon: <FaLock className="text-4xl mb-4" />,
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'Custom Software',
    desc: 'Scalable applications built with React, Node.js, and cloud-native architectures.',
    icon: <FaCode className="text-4xl mb-4" />,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    title: 'IT Infrastructure',
    desc: 'Hybrid cloud solutions with Kubernetes orchestration and DevOps automation.',
    icon: <FaNetworkWired className="text-4xl mb-4" />,
    color: 'from-indigo-500 to-blue-600'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Services() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Enterprise-Grade Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed for scale and performance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                desc={service.desc}
                icon={service.icon}
                gradient={service.color}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all">
            View All Capabilities
          </button>
        </motion.div>
      </div>
    </section>
  );
}