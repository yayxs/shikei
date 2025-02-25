import { Card } from "@/app/components/Card";
import { Github, Rocket, Code, Box, Terminal } from "lucide-react";
import { type Project, type DeployPlatform } from "../config/projects";
import Vercel from "./Vercel";
import Netlify from "./Netlify";

const icons = {
  rocket: Rocket,
  code: Code,
  box: Box,
  terminal: Terminal,
};

const platformColors: Record<DeployPlatform, { bg: string; text: string }> = {
  netlify: {
    bg: 'bg-teal-50',
    text: 'text-teal-700'
  },
  vercel: {
    bg: 'bg-neutral-50',
    text: 'text-neutral-900'
  }
};

// 平台图标组件
const PlatformIcon = ({ platform }: { platform: DeployPlatform }) => {
  switch (platform) {
    case 'vercel':
      return <Vercel className="w-4 h-4 mr-1" />;
    case 'netlify':
      return <Netlify className="w-4 h-4 mr-1" />;
    default:
      return null;
  }
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800">
      {/* 背景装饰效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-gray-50/30 group-hover:to-transparent transition-all duration-700 ease-in-out"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className={`p-2 rounded-lg ${project.iconBg} transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${project.iconColor}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-semibold mb-2 group-hover:${project.iconColor} transition-colors duration-300`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a 
                key={link.url}
                href={link.url}
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-3 py-1 rounded-full text-sm font-medium ${platformColors[link.platform].bg} ${platformColors[link.platform].text} hover:opacity-90 transition-all duration-300 inline-flex items-center transform hover:translate-y-[-2px] hover:shadow-md`}
              >
                <PlatformIcon platform={link.platform} />
                {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
              </a>
            ))}
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              <Github className="w-4 h-4 mr-1" />
              Source
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
} 