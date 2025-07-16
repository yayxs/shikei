'use client';

import { useState } from 'react';
import { englishPlatforms, chinesePlatforms } from '../data/social-media';
import { platformIcons } from '../data/icon-mapping';

export default function SocialMediaTabs() {
  const [activeTab, setActiveTab] = useState<'en' | 'cn'>('en');

  const platforms = activeTab === 'en' ? englishPlatforms : chinesePlatforms;

  const getIcon = (name: string) => {
    const iconConfig = platformIcons[name];
    if (!iconConfig) return null;
    return iconConfig;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('en')}
          className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
            activeTab === 'en'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setActiveTab('cn')}
          className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
            activeTab === 'cn'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          中文
        </button>
      </div>

      {/* Platform Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const iconInfo = getIcon(platform.name);
          const IconComponent = iconInfo?.Icon;
          const iconColor = iconInfo?.color || '#64748b';

          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-blue-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center space-x-3">
                {IconComponent && (
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${iconColor}15` }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: iconColor }} 
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{platform.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}