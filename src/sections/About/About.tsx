import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { personalInfo, achievements } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '@/utils/animations';

const highlights = [
  { icon: MapPin, label: 'Location', value: personalInfo.contact.location, color: 'text-blue-500' },
  { icon: Target, label: 'Focus', value: 'Full Stack Development', color: 'text-violet-500' },
  { icon: Lightbulb, label: 'Passion', value: 'Clean Code & Architecture', color: 'text-amber-500' },
  { icon: TrendingUp, label: 'Goal', value: 'Build impactful products', color: 'text-green-500' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="Get to know the developer behind the code"
        />

        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start w-full">
          {/* Left — Avatar / Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative flex justify-center w-full lg:w-1/2 shrink-0"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-violet-600 rounded-3xl blur-2xl opacity-20 scale-110" />
              {/* Avatar card */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-linear-to-br from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-2xl overflow-hidden">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-8xl mb-2">👨‍💻</div>
                    <p className="text-white font-semibold text-xl">{personalInfo.name}</p>
                    <p className="text-blue-100 text-sm">{personalInfo.title}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col space-y-6 w-full lg:w-1/2"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Turning ideas into{' '}
                <span className="gradient-text">digital reality</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {personalInfo.summary}
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in building end-to-end web applications — from designing scalable
              backend architectures to crafting pixel-perfect frontends. My goal is to write code
              that is not only functional but also maintainable, well-tested, and a joy to work with.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-row items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 w-full">
                  <item.icon size={24} className={`shrink-0 ${item.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1 truncate">{item.label}</p>
                    <p className="text-slate-700 dark:text-slate-200 text-sm font-semibold truncate leading-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats / Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.label}
              variants={fadeInUp}
              className="relative group text-center p-6 rounded-3xl bg-linear-to-br from-slate-50 to-white dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 hover:border-blue-400/50 dark:hover:border-blue-500/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-2">{ach.icon}</div>
              <div className="text-4xl font-black gradient-text mb-1">{ach.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{ach.label}</div>
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
