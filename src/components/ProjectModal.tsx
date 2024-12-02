import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-textPrimary/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-bg max-w-4xl w-full rounded-xl shadow-xl relative max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-textPrimary/60 hover:text-primary transition-colors z-10"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <div className="flex-none">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-56 object-cover rounded-t-xl"
            />
          </div>

          <div className="overflow-y-auto flex-1 p-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-lg text-textPrimary/80 mb-6">{project.description}</p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Key Features</h4>
              <ul className="list-disc list-inside space-y-2 text-textPrimary/80">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-none p-6 border-t border-primary/10 bg-bg">
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-secondary transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}