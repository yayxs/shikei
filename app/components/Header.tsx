'use client';

import Link from 'next/link';
import { Button } from './Button';
import { Github, Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MainNav } from './MainNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-foreground">
            /
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link
              href="https://sponsors-10k.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
              aria-label="赞助者列表"
            >
              <Heart className="h-4 w-4 text-pink-500" />
              <span className="hidden md:inline-block">Sponsors</span>
            </Link>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/yayxs/shikei"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}