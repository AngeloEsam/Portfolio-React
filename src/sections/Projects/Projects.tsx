import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
import { staggerContainer, fadeInUp } from '@/utils/animations';
import type { Project } from '@/types';

const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const STATUS_COLORS = {
  completed: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  'in-progress': 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
  archived: 'bg-slate-100 dark:bg-slate-700 text-slate-500',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-400 overflow-hidden"
    >
      {/* Project Image / Placeholder */}
      <div className={`h-48 bg-linear-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center relative overflow-hidden`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <Code2 size={48} className="text-white/80 mx-auto mb-2" />
            <p className="text-white/70 text-sm font-medium">{project.category}</p>
          </div>
        )}
        {/* Status badge */}
        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_COLORS[project.status]}`}>
          {project.status.replace('-', ' ')}
        </span>
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100/90 dark:bg-yellow-900/70 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50">
            ⭐ Featured
          </span>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/40 text-slate-600 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200">
              <GithubIcon /> Code
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors hover:scale-105 duration-200 ml-auto">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Projects"
          subtitle="A selection of things I've built"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold border-2 transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-linear-to-r from-blue-500 to-violet-600 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">No projects in this category yet.</div>
        )}
      </div>
    </section>
  );
}
