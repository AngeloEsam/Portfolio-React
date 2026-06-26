import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Globe } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/utils/animations';

const GithubIcon = ({ size = 20, className = '' }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = ({ size = 20, className = '' }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});
type FormData = z.infer<typeof schema>;

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.contact.email, href: `mailto:${personalInfo.contact.email}`, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { icon: Phone, label: 'Phone', value: personalInfo.contact.phone, href: `tel:${personalInfo.contact.phone}`, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/angelo', href: personalInfo.contact.linkedin, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/angelo', href: personalInfo.contact.github, color: 'text-slate-700 dark:text-slate-300', bg: 'bg-slate-100 dark:bg-slate-800' },
  { icon: MapPin, label: 'Location', value: personalInfo.contact.location, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
  ...(personalInfo.contact.website ? [{ icon: Globe, label: 'Website', value: personalInfo.contact.website!, href: personalInfo.contact.website!, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-900/20' }] : []),
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setStatus('idle');
      
      // Ensure these environment variables are set in your .env file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS credentials are not set in the environment variables.");
        setStatus('error');
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
        },
        publicKey
      );

      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div ref={ref} className="flex flex-col lg:flex-row gap-12 items-start w-full">
          {/* Contact info */}
          <motion.div variants={fadeInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="w-full lg:w-1/2 flex flex-col space-y-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Let's work together</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                I'm currently open to new opportunities — freelance projects, full-time roles, or just an interesting tech
                conversation. My inbox is always open.
              </p>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="space-y-4">
              {contactItems.map((item) => (
                <motion.div key={item.label} variants={fadeInUp}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-400/40 dark:hover:border-blue-500/30">
                      <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <item.icon size={20} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                        <p className="text-slate-700 dark:text-slate-200 font-semibold text-sm group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/40 shadow-sm">
                      <div className={`w-11 h-11 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <item.icon size={20} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                        <p className="text-slate-700 dark:text-slate-200 font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-700/40 shadow-sm space-y-5"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                <input
                  {...register('name')}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-400'}`}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-400'}`}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                <input
                  {...register('subject')}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm ${errors.subject ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-400'}`}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-none ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-400'}`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.message.message}</p>}
              </div>

              {/* Success / Error messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 text-green-700 dark:text-green-400 text-sm font-medium">
                  <CheckCircle2 size={18} /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 text-red-700 dark:text-red-400 text-sm font-medium">
                  <AlertCircle size={18} /> Something went wrong. Please try again.
                </motion.div>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full" icon={<Send size={18} />} iconRight disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
