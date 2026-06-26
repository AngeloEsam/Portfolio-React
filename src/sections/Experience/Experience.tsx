import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { staggerContainer, fadeInUp, fadeInLeft } from '@/utils/animations';

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey and contributions"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-violet-500 to-transparent md:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={fadeInLeft}
                className={`relative flex mb-12 w-full ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 shrink-0 z-10">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Briefcase size={14} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    {/* Type badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700/50 mb-3">
                      {exp.type}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.slice(0, 4).map((r) => (
                        <div key={r} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 size={15} className="text-green-500 shrink-0 mt-0.5" />
                          {r}
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
