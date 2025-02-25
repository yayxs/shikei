'use client'

import { FaGithub, FaXTwitter, FaWeibo, FaYoutube } from 'react-icons/fa6'
import { SiBilibili, SiXiaohongshu, SiZhihu, SiJuejin } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* 移动端布局 */}
        <div className="flex flex-wrap justify-center gap-6 md:hidden">
          <a
            href="https://github.com/yayxs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://juejin.cn/user/306111578905353"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <SiJuejin className="w-6 h-6" />
          </a>
          <a
            href="https://www.zhihu.com/people/10k-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <SiZhihu className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/10k_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://weibo.com/u/7981774209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <FaWeibo className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@10k_ai6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://space.bilibili.com/3546828863703659"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <SiBilibili className="w-6 h-6" />
          </a>
          <a
            href="https://www.xiaohongshu.com/user/profile/6673a5380000000007004a65"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors p-3"
          >
            <SiXiaohongshu className="w-7 h-7" />
          </a>
        </div>

        {/* 桌面端布局 */}
        <div className="hidden md:flex justify-center items-center">
          {/* 技术社区平台 */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/yayxs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://juejin.cn/user/306111578905353"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <SiJuejin className="w-5 h-5" />
            </a>
            <a
              href="https://www.zhihu.com/people/10k-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <SiZhihu className="w-5 h-5" />
            </a>
          </div>

          <div className="mx-4 h-4 w-px bg-gray-200" />

          {/* 社交媒体平台 */}
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/10k_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://weibo.com/u/7981774209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <FaWeibo className="w-5 h-5" />
            </a>
          </div>

          <div className="mx-4 h-4 w-px bg-gray-200" />

          {/* 视频平台 */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.youtube.com/@10k_ai6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://space.bilibili.com/3546828863703659"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <SiBilibili className="w-5 h-5" />
            </a>
          </div>

          <div className="mx-4 h-4 w-px bg-gray-200" />

          {/* 其他平台 */}
          <div className="flex items-center">
            <a
              href="https://www.xiaohongshu.com/user/profile/6673a5380000000007004a65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors p-1.5"
            >
              <SiXiaohongshu className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 