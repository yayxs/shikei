'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'AI Coding',
    href: '/ai/ai-coding',
    description: '探索 AI 编程工具和资源',
  },
  {
    title: 'AI Navigation',
    href: '/ai/ai-navigation',
    description: 'AI 导航和工具集合',
  },
  {
    title: 'Model Timing',
    href: '/ai/model-timing',
    description: '模型时间线和发展历程',
  },
]

export function MainNav() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>AI</NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 top-0">
            <div className="w-[400px] md:w-[500px] bg-popover rounded-md border shadow-md">
              <div className="grid gap-2 p-4 md:grid-cols-2">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    href={component.href}
                    className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium mb-1">{component.title}</div>
                    <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                      {component.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="absolute" />
    </NavigationMenu>
  )
} 