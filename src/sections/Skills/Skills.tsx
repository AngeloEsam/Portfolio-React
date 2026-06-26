import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { staggerContainer, fadeInUp } from '@/utils/animations';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  color: string;
}

function SkillBar({ name, level, delay = 0, color }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-slate-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700/60 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-linear-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].category);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const active = skillCategories.find((c) => c.category === activeTab)!;

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies I work with to build modern applications"
        />

        {/* Category Tabs */}
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 w-full">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold border-2 transition-all duration-300 cursor-pointer ${
                activeTab === cat.category
                  ? `bg-linear-to-r ${cat.color} text-white border-transparent shadow-lg shadow-blue-500/20`
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Skills Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full"
          >
            {/* Left — Skill bars */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="w-full lg:w-[40%] bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-700/40 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-2xl bg-linear-to-br ${active.color} flex items-center justify-center text-xl shadow-md`}>
                  {active.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{active.category}</h3>
              </div>
              <div className="space-y-5">
                {active.skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i} color={active.color} />
                ))}
              </div>
            </motion.div>

            {/* Right — Skill cards grid */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 content-start">
              {active.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  custom={i}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${active.color} bg-opacity-20 flex items-center justify-center text-lg mx-auto mb-2 shadow-sm`}>
                    {active.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">{skill.name}</p>
                  <div className="mt-2 h-1 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-linear-to-r ${active.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* All skills tag cloud */}
        <motion.div variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mt-16">
          <h3 className="text-center text-lg font-semibold text-slate-500 dark:text-slate-400 mb-6">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <motion.span
                  key={`${cat.category}-${skill.name}`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-default shadow-sm"
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
