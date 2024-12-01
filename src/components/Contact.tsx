import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

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
          Interested in working together? Let's talk about your project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary/10 transition-colors"
          >
            <FaEnvelope className="text-primary" />
            <span>Email Me</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary/10 transition-colors"
          >
            <FaTwitter className="text-primary" />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg card-gradient hover:bg-primary/10 transition-colors"
          >
            <FaGithub className="text-primary" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}