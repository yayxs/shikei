import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { SiBilibili } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yayxs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/10k_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaXTwitter className="w-6 h-6" />
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
      </div>
    </footer>
  )
} 