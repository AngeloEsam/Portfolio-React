import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '@/layouts/Layout';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Skills from '@/sections/Skills/Skills';
import Experience from '@/sections/Experience/Experience';
import Projects from '@/sections/Projects/Projects';
import Education from '@/sections/Education/Education';
import Contact from '@/sections/Contact/Contact';
import ChatbotFAB from '@/components/Chatbot/ChatbotFAB';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Layout>
      <ChatbotFAB />
    </ThemeProvider>
  );
}
