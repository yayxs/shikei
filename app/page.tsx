'use client';

import { Button } from "@/app/components/Button";
import { Card } from "@/app/components/Card";
import { ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* 项目网格展示 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Coding 项目 */}
          <Card className="overflow-hidden flex flex-col group">
            <div className="aspect-[16/9] relative">
              <iframe
                src="https://ai-coding.netlify.app/"
                className="w-full h-full absolute inset-0"
                title="AI Coding 网站预览"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">AI Coding 助手</h2>
              <p className="text-muted-foreground mb-6 flex-1">
                智能编程辅助工具，帮助开发者更好地理解和使用 AI 编程工具。
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="https://ai-coding.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    访问
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/yourusername/ai-coding" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    源码
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Running Code 项目 */}
          <Card className="overflow-hidden flex flex-col group">
            <div className="aspect-[16/9] relative">
              <iframe
                src="https://running-code.vercel.app/"
                className="w-full h-full absolute inset-0"
                title="Running Code 网站预览"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Running Code</h2>
              <p className="text-muted-foreground mb-6 flex-1">
                在线代码运行与分享平台，支持多种编程语言的实时预览。
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="https://running-code.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    访问
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/yourusername/running-code" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    源码
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}