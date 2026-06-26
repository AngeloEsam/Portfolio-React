import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Education,
  Certification,
} from '@/types';
import {
  personalInfo,
  skillCategories,
  experiences,
  projects,
  education,
  certifications,
} from '@/data/portfolioData';

// ==================== Chatbot Engine ====================

type Intent =
  | 'greeting'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'contact'
  | 'about'
  | 'farewell'
  | 'unknown';

function detectIntent(input: string): Intent {
  const lower = input.toLowerCase().trim();

  if (/\b(hi|hello|hey|good morning|good evening|howdy|sup)\b/.test(lower)) return 'greeting';
  if (/\b(bye|goodbye|see you|later|take care|thanks|thank you)\b/.test(lower)) return 'farewell';
  if (/\b(skill|tech|technolog|stack|language|framework|tool|use|know|expert|proficient)\b/.test(lower)) return 'skills';
  if (/\b(experience|work|job|company|career|position|role|employ|background|history)\b/.test(lower)) return 'experience';
  if (/\b(project|build|built|app|application|portfolio|repo|github|demo|product)\b/.test(lower)) return 'projects';
  if (/\b(education|study|degree|university|college|school|diploma|iti|academic)\b/.test(lower)) return 'education';
  if (/\b(certif|certificat|award|credential|badge|license)\b/.test(lower)) return 'certifications';
  if (/\b(contact|reach|email|phone|message|hire|location|linkedin|social|touch)\b/.test(lower)) return 'contact';
  if (/\b(who|about|yourself|tell me|summary|introduce|overview|profile)\b/.test(lower)) return 'about';

  return 'unknown';
}

// ---- Response Builders ----

function buildGreeting(): string {
  return `👋 Hi! I'm ${personalInfo.name}'s portfolio assistant. I can tell you about his skills, experience, projects, education, and how to contact him. What would you like to know?`;
}

function buildAbout(info: PersonalInfo): string {
  return `👨‍💻 **About ${info.name}**\n\n${info.summary}\n\n📍 ${info.contact.location}\n💼 ${info.title}`;
}

function buildSkills(categories: SkillCategory[]): string {
  const lines = categories.map((cat) => {
    const top = cat.skills.slice(0, 5).map((s) => s.name).join(', ');
    return `${cat.icon} **${cat.category}**: ${top}`;
  });
  return `🛠️ **Technical Skills**\n\n${lines.join('\n')}\n\nHe is proficient in a wide range of modern web technologies!`;
}

function buildExperience(exps: Experience[]): string {
  const lines = exps.map((e) => `💼 **${e.position}** @ ${e.company}\n   ${e.startDate} – ${e.endDate}\n   ${e.responsibilities[0]}`);
  return `📋 **Work Experience** (${exps.length} roles)\n\n${lines.join('\n\n')}`;
}

function buildProjects(projs: Project[]): string {
  const featured = projs.filter((p) => p.featured);
  const lines = featured.map((p) => `🚀 **${p.title}**\n   ${p.description}\n   Tech: ${p.technologies.slice(0, 4).join(', ')}`);
  return `📁 **Featured Projects** (${projs.length} total)\n\n${lines.join('\n\n')}\n\nCheck the Projects section for full details and links!`;
}

function buildEducation(edu: Education[]): string {
  const lines = edu.map((e) => `🎓 **${e.degree}** in ${e.field}\n   ${e.institution} (${e.startYear}–${e.endYear})`);
  return `📚 **Education**\n\n${lines.join('\n\n')}`;
}

function buildCertifications(certs: Certification[]): string {
  const lines = certs.map((c) => `${c.icon} **${c.title}** — ${c.issuer} (${c.date})`);
  return `📜 **Certifications** (${certs.length} total)\n\n${lines.join('\n')}`;
}

function buildContact(info: PersonalInfo): string {
  const { contact } = info;
  return `📬 **Contact ${info.name}**\n\n📧 Email: ${contact.email}\n📱 Phone: ${contact.phone}\n💼 LinkedIn: ${contact.linkedin}\n🐙 GitHub: ${contact.github}\n📍 Location: ${contact.location}\n\nFeel free to reach out — he's open to exciting opportunities!`;
}

function buildFarewell(): string {
  return `👋 Thanks for visiting ${personalInfo.name}'s portfolio! Feel free to come back if you have more questions. Have a great day! 😊`;
}

function buildUnknown(): string {
  return `🤔 I'm not sure about that specifically, but I can tell you about Angelo's **skills**, **experience**, **projects**, **education**, **certifications**, or **contact info**. What interests you?`;
}

// ==================== Main Export ====================

export function getChatbotResponse(userInput: string): string {
  if (!userInput.trim()) return buildUnknown();

  const intent = detectIntent(userInput);

  switch (intent) {
    case 'greeting': return buildGreeting();
    case 'about': return buildAbout(personalInfo);
    case 'skills': return buildSkills(skillCategories);
    case 'experience': return buildExperience(experiences);
    case 'projects': return buildProjects(projects);
    case 'education': return buildEducation(education);
    case 'certifications': return buildCertifications(certifications);
    case 'contact': return buildContact(personalInfo);
    case 'farewell': return buildFarewell();
    default: return buildUnknown();
  }
}
