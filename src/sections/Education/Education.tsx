import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { education, certifications } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Academic background and professional qualifications"
        />

        <div ref={ref} className="flex flex-col lg:flex-row gap-12 w-full">
          {/* Education */}
          <motion.div variants={fadeInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 to-transparent" />

              {education.map((edu) => (
                <motion.div key={edu.id} variants={fadeInUp} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-1.5 top-5 w-5 h-5 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/30 border-2 border-white dark:border-slate-900" />

                  <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-400/40 dark:hover:border-blue-500/30">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{edu.field}</p>
                      </div>
                      {edu.grade && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700/40 shrink-0">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{edu.startYear} – {edu.endYear}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{edu.location}</span>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{edu.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={fadeInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-4"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  variants={fadeInUp}
                  custom={idx}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-400/40 dark:hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-violet-500/20 to-purple-600/20 border border-violet-200 dark:border-violet-700/40 flex items-center justify-center text-2xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{cert.title}</h4>
                    <p className="text-violet-600 dark:text-violet-400 text-xs font-medium mt-0.5">{cert.issuer}</p>
                    <p className="text-slate-400 text-xs mt-1 flex items-center gap-1"><Calendar size={11} />{cert.date}</p>
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-xl text-slate-400 hover:text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
