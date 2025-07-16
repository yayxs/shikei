export interface SocialPlatform {
  name: string;
  url: string;
  description: string;
}

export const englishPlatforms: SocialPlatform[] = [
  {
    name: "GitHub",
    url: "https://github.com/yayxs",
    description: "Code repository and version control platform"
  },
  {
    name: "X",
    url: "https://x.com/vibercoding",
    description: "Social networking and microblogging platform"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@vibercoding",
    description: "Video sharing and content creation platform"
  }
];

export const chinesePlatforms: SocialPlatform[] = [];