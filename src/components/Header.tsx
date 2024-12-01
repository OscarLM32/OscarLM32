import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 backdrop-blur-md bg-bg/80 border-b border-primary/10"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <FaCode className="text-primary text-2xl" />
          <span className="text-xl font-bold gradient-text">Portfolio</span>
        </motion.div>
        <div className="flex items-center space-x-6">
          <a 
            href="#about" 
            className="hidden sm:block text-textPrimary/80 hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="hidden sm:block text-textPrimary/80 hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="hidden sm:block text-textPrimary/80 hover:text-primary transition-colors"
          >
            Contact
          </a>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textPrimary/80 hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textPrimary/80 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}