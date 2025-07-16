import { IconType } from 'react-icons';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa6';

export interface PlatformIcon {
  name: string;
  Icon: IconType;
  color: string;
  bgColor: string;
}

export const platformIcons: Record<string, PlatformIcon> = {
  GitHub: {
    name: "GitHub",
    Icon: FaGithub,
    color: "#ffffff",
    bgColor: "#181717"
  },
  X: {
    name: "X",
    Icon: FaTwitter,
    color: "#ffffff",
    bgColor: "#000000"
  },
  YouTube: {
    name: "YouTube",
    Icon: FaYoutube,
    color: "#ffffff",
    bgColor: "#FF0000"
  }
};