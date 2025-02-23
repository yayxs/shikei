'use client'

import { FaGithub, FaXTwitter, FaWeibo, FaYoutube } from 'react-icons/fa6'
import { SiBilibili, SiXiaohongshu, SiZhihu, SiJuejin } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* 技术社区平台 */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yayxs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://juejin.cn/user/306111578905353"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SiJuejin className="w-6 h-6" />
            </a>
            <a
              href="https://www.zhihu.com/people/10k-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SiZhihu className="w-6 h-6" />
            </a>
          </div>

          <div className="mx-6 h-4 w-px bg-gray-200" />

          {/* 社交媒体平台 */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/10k_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://weibo.com/u/7981774209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaWeibo className="w-6 h-6" />
            </a>
          </div>

          <div className="mx-6 h-4 w-px bg-gray-200" />

          {/* 视频平台 */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@10k_ai6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://space.bilibili.com/3546828863703659"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SiBilibili className="w-6 h-6" />
            </a>
          </div>

          <div className="mx-6 h-4 w-px bg-gray-200" />

          {/* 其他平台 */}
          <div className="flex items-center">
            <a
              href="https://www.xiaohongshu.com/user/profile/6673a5380000000007004a65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SiXiaohongshu className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 