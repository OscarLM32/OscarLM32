import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export function Contact() {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
        <p className="text-xl mb-12 text-textPrimary/80">
          Interested in working with me? Let's talk about our future colaboration.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:oscar.lopez.dev@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary transition-colors"
          >
            <FaEnvelope className="text-primary" />
            <span>oscar.lopez.dev@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/oscarlopez32/"
            target="_blank"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary transition-colors"
          >
            <FaLinkedin className="text-primary" />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/OscarLM32"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary transition-colors"
          >
            <FaGithub className="text-primary" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}