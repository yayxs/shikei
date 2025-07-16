export interface SocialPlatform {
  name: string;
  url: string;
  description: string;
}

export const englishPlatforms: SocialPlatform[] = [
  {
    name: "GitHub",
    url: "https://github.com/yayxs",
    description: "Collected my handwritten code over the years"
  },
  {
    name: "X",
    url: "https://x.com/vibercoding",
    description: "My latest and most timely remarks, focusing on AI and front-end"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@vibercoding",
    description: "Cognition meets you in the form of video"
  }
];

export const chinesePlatforms: SocialPlatform[] = [];