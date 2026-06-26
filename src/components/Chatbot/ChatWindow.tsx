import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, RotateCcw } from 'lucide-react';
import type { ChatMessage } from '@/types';
import { getChatbotResponse } from '@/services/chatbot';
import { personalInfo } from '@/data/portfolioData';
import MessageBubble from './MessageBubble';
import SuggestedQuestions from './SuggestedQuestions';

interface ChatWindowProps {
  onClose: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  content: `👋 Hi! I'm an AI assistant for **${personalInfo.name}'s** portfolio.\n\nI can answer questions about his skills, experience, projects, education, and contact info. What would you like to know?`,
  timestamp: new Date(),
};

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs shrink-0 mr-2 mt-1 shadow-sm">
        🤖
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white dark:bg-slate-700/80 border border-slate-100 dark:border-slate-600/40 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 200);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;
    setShowSuggestions(false);

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay (600–1200ms)
    const delay = 600 + Math.random() * 600;
    await new Promise((res) => setTimeout(res, delay));

    const response = getChatbotResponse(text);
    const botMsg: ChatMessage = {
      id: `b-${Date.now()}`,
      role: 'bot',
      content: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setShowSuggestions(true);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-[360px] sm:w-[400px] h-[540px] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/30 border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800"
      style={{ transformOrigin: 'bottom right' }}
    >
      {/* Header */}
      <div className="bg-linear-to-r from-blue-500 to-violet-600 px-5 py-4 flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Bot size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-white text-sm leading-none">{personalInfo.name}'s Assistant</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-100 text-xs">Online</span>
          </div>
        </div>
        <button onClick={handleReset} aria-label="Reset chat"
          className="p-1.5 rounded-xl hover:bg-white/20 text-white/70 hover:text-white transition-all">
          <RotateCcw size={15} />
        </button>
        <button onClick={onClose} aria-label="Close chat"
          className="p-1.5 rounded-xl hover:bg-white/20 text-white/70 hover:text-white transition-all">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1 scroll-smooth">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      <AnimatePresence>
        {showSuggestions && messages.length <= 1 && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }} className="border-t border-slate-200 dark:border-slate-700/40 pt-3">
            <SuggestedQuestions onSelect={(text) => sendMessage(text)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700/40 bg-white dark:bg-slate-800/80 shrink-0">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/40 text-slate-900 dark:text-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <motion.button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-2xl bg-linear-to-r from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
