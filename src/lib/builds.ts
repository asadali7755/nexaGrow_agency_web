// lib/builds.ts — apps, tools and AI systems built by Asad Ali
//
// These are NOT client case studies and must never be presented as such.
// They are products and systems Asad designed and coded himself, listed so a
// buyer can see that NexaGrow builds web apps, internal tools and AI agents,
// not only marketing websites. Every entry is real code that exists today.
// Link only to things a buyer can actually open; internal tools get no link.

export interface Build {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  link?: { href: string; label: string };
  /** Decorative stock photo (Pexels) used as the card background. */
  image: string;
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const builds: Build[] = [
  {
    name: 'SEO Multi-Agent Engine',
    image: px(8386440),
    kind: 'AI agents',
    summary:
      'Thirteen agents in a pipeline: keyword research, competitor analysis, article planning and writing, metadata, schema, images and internal links. Each article waits for one human approval, then publishes itself, pings search engines and tracks its Google rankings every week.',
    stack: ['TypeScript', 'NestJS', 'BullMQ', 'PostgreSQL', 'LLM failover'],
  },
  {
    name: 'Travel Agency in Dubai',
    image: px(2115367),
    kind: 'Web platform',
    summary:
      'Attractions across all seven emirates, tour packages and a moderated business directory, with user accounts, a portal for agencies and an admin panel behind it.',
    stack: ['Next.js', 'Supabase', 'Row-level security', 'Zod'],
    link: { href: 'https://github.com/asadali7755/travelAgencyInDubai', label: 'View code' },
  },
  {
    name: 'Faceless Video Generator',
    image: px(2335048),
    kind: 'AI tool',
    summary:
      'Writes a script, generates voice-over and visuals, adds music and uploads YouTube Shorts automatically on a daily schedule.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'AI voice & image APIs', 'YouTube API'],
  },
  {
    name: 'Todo App with AI Chatbot',
    image: px(577585),
    kind: 'Full-stack app',
    summary:
      'Task manager with secure sign-in and a chatbot that creates and updates tasks from plain-language messages, packaged for Docker and Kubernetes.',
    stack: ['FastAPI', 'SQLModel', 'Neon Postgres', 'Docker', 'Helm'],
    link: { href: 'https://github.com/asadali7755/Phase-3-fullstack-todo-app-chatbot', label: 'View code' },
  },
  {
    name: 'Thrift Trades',
    image: px(1598505),
    kind: 'Online store',
    summary:
      'Online store for branded shoes with filters by category, brand, gender and colour, image hosting, and a password-protected admin panel for adding stock.',
    stack: ['Next.js', 'Supabase', 'Cloudinary'],
    link: { href: 'https://github.com/asadali7755/trift-trades', label: 'View code' },
  },
  {
    name: 'Physical AI & Humanoid Robotics Book',
    image: px(8386434),
    kind: 'Publishing',
    summary: 'An online textbook on Physical AI and humanoid robotics, built as a fast, searchable documentation site.',
    stack: ['Docusaurus', 'React', 'Vercel'],
    link: { href: 'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book', label: 'View code' },
  },
];
