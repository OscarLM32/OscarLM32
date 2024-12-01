import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import pfp from "../assets/pfp.jpg"

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-bg"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 rounded-full border-4 border-primary mb-8 overflow-hidden"
      >
        <img 
          src={pfp} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl sm:text-5xl font-bold mb-6 text-center"
      >
        <span className="gradient-text">Serene approach </span>
        <span className="text-textPrimary">- Robust execution</span>
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-center max-w-2xl mb-12 text-textPrimary"
      >
        I create clean and professional web solutions designed to stand the test of time. 
        Explore my portfolio to see my work in action.
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <FaArrowDown className="text-primary text-2xl" />
      </motion.div>
    </motion.section>
  );
}