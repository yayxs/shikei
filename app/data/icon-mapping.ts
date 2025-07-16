import {
  Twitter,
  Youtube,
  Github,
  type LucideIcon
} from 'lucide-react';

export interface PlatformIcon {
  name: string;
  Icon: LucideIcon;
  color: string;
}

export const platformIcons: Record<string, PlatformIcon> = {
  GitHub: {
    name: "GitHub",
    Icon: Github,
    color: "#181717"
  },
  X: {
    name: "X",
    Icon: Twitter,
    color: "#000000"
  },
  YouTube: {
    name: "YouTube",
    Icon: Youtube,
    color: "#FF0000"
  }
};