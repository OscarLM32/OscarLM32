import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectModal } from './ProjectModal';

const maxTechnologiesCount:number = 5;

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="card-gradient rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a 
                    href={project.github}
                    target='_blank'
                    className="text-primary hover:text-secondary p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-textPrimary/80 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, maxTechnologiesCount).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > maxTechnologiesCount && (
                    <span className="px-3 py-1 rounded-full text-sm border border-primary/30 text-primary">
                      +{project.technologies.length - maxTechnologiesCount} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}