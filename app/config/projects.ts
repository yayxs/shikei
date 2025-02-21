export type DeployPlatform = 'netlify' | 'vercel';

export interface ProjectLink {
  url: string;
  platform: DeployPlatform;
}

export interface Project {
  title: string;
  description: string;
  icon: 'rocket' | 'code' | 'box' | 'terminal';
  iconColor: string;
  iconBg: string;
  links: ProjectLink[];
  github: string;
  category: 'focus' | 'more';
}

export const projects: Project[] = [
  {
    title: 'AI Coding',
    description: 'Collection of AI Coding code editors, tools, and extensions, such as Cursor, Windsurf, v0, Bolt, Cline, etc.',
    icon: 'rocket',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    links: [
      {
        url: 'https://ai-coding.netlify.app/',
        platform: 'netlify'
      }
    ],
    github: 'https://github.com/yayxs/ai-coding',
    category: 'focus'
  },
  {
    title: 'Running Code',
    description: 'An online code execution and sharing platform. Run code in the browser based on Next.js and CodeSandbox/Sandpack.',
    icon: 'terminal',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    links: [
      {
        url: 'https://running-code.vercel.app/',
        platform: 'vercel'
      }
    ],
    github: 'https://github.com/yayxs/run-code',
    category: 'focus'
  }
]; 