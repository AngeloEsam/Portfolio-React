import { motion } from 'framer-motion';
import { suggestedQuestions } from '@/data/portfolioData';

interface SuggestedQuestionsProps {
  onSelect: (text: string) => void;
}

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="px-4 pb-2">
      <p className="text-[11px] text-slate-400 mb-2 font-medium">Suggested questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((q, i) => (
          <motion.button
            key={q.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(q.text)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600/40 text-xs text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer"
          >
            <span>{q.icon}</span>
            {q.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
