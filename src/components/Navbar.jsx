import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './assets/logo.jpg';

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/Home" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-indigo-900/20 border-b border-indigo-400/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left - Increased size */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Link to="/Home" className="flex items-center">
              <motion.img
                src={logo}
                alt="MACS Technologies Logo"
                className="h-16 w-16 rounded-full border-2 border-white/30 hover:border-indigo-400 transition-all" // Increased from h-10 w-10
                whileHover={{ 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.6 }
                }}
              />
              <motion.span 
                className="ml-4 text-2xl font-light text-white hidden md:block" // Increased text size
                whileHover={{ scale: 1.02 }}
              >
                MACS<span className="font-medium text-indigo-300">Tech</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Centered Navigation - Enhanced sizing */}
          <motion.div 
            className="hidden md:flex items-center justify-center flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              staggerChildren: 0.1,
              delayChildren: 0.4
            }}
          >
            <div className="flex space-x-2 bg-white/5 backdrop-blur-sm rounded-full p-1.5 border border-white/10"> {/* Increased padding */}
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={item.path}
                    className="px-6 py-3 text-base font-medium text-white/80 hover:text-white transition-colors relative group" // Increased padding and text size
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Link to="/contact">
              <motion.button
                className="px-6 py-3.5 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all relative overflow-hidden group" // Increased padding
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2.5 rounded-md text-white hover:text-indigo-300 hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Increased icon size */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}