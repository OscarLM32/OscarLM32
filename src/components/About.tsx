import { motion } from 'framer-motion';
import { skills } from '../data/skills';


export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">My vision</h3>
            <p className="text-lg text-textPrimary/80">
              With a strong foundation in web development, I specialize in building clean, robust, and professional solutions that deliver a lasting impact. 
              My work is guided by a commitment to solving complex problems with a serene approach and robust execution.
            </p>
            <p className="text-lg text-textPrimary/80">
              I'm dedicated to continuous learning, adapting to new tools, and ensuring that every project I undertake reflects professionalism and purpose 
              by focusing on clarity and reliability.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Download CV
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl"
              >
                <div className="text-primary mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-textPrimary/70">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}