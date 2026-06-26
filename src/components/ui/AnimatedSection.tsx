import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  variants = fadeInUp,
  className = '',
  delay = 0,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
