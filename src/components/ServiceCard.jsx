import { motion } from 'framer-motion';

export default function ServiceCard({ title, desc, icon }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border-t-4 border-indigo-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
