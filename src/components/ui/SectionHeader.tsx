import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, gradient = true }: SectionHeaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          gradient ? 'gradient-text' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div className={`mt-4 flex gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className="h-1 w-16 rounded-full bg-linear-to-r from-blue-500 to-violet-600" />
        <div className="h-1 w-4 rounded-full bg-blue-300 dark:bg-blue-700" />
        <div className="h-1 w-2 rounded-full bg-violet-400 dark:bg-violet-700" />
      </div>
    </motion.div>
  );
}
