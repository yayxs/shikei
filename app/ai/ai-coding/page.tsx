'use client'

import { AiToolsGrid } from '@/app/components/AiToolsGrid'
import { aiTools } from '@/app/data/aiTools'

export default function AiCodingPage() {
  return (
    <div className="container mx-auto py-8"> 
      <AiToolsGrid tools={aiTools} />
    </div>
  )
} 