'use client';

import { ProjectCard } from "@/app/components/ProjectCard";
import { projects } from "@/app/config/projects";

export default function Home() {
  const focusProjects = projects.filter(p => p.category === 'focus');
  const moreProjects = projects.filter(p => p.category === 'more');

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">Projects that I created or maintaining.</p>
        </section>

        {/* 主要项目 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Current Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {focusProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* 更多项目 */}
        {moreProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}