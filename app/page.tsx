import React from 'react'
import { FaroRail } from '@/components/faro-rail'
import { FaroTopbar } from '@/components/faro-topbar'
import { FaroFirstScreen } from '@/components/faro-first-screen'
import { FaroSeoContent } from '@/components/faro-seo-content'
import { REF_URL } from '@/lib/site-config'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0c0f] text-[#f4f5f7] flex flex-col lg:flex-row">
      {/* Left side navigation rail (desktop only, matching screenshot 2) */}
      <div className="hidden lg:block">
        <FaroRail />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <FaroTopbar />

        <main className="flex-1 px-3 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl w-full mx-auto">
          {/* First screen: Hero + 3 cards */}
          <FaroFirstScreen />

          {/* 1500-2000 word SEO longread article with all keywords */}
          <FaroSeoContent />
        </main>
      </div>

      {/* Floating support / chat button matching screenshot 2 bottom-right */}
      <a
        href={REF_URL}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#f0b840] via-[#c6831d] to-[#9c630f] text-[#1c1202] p-0.5 shadow-2xl shadow-[#e5a93c]/40 hover:scale-105 transition-transform flex items-center justify-center"
        aria-label="Онлайн-поддержка Faro Casino"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f7cb67] to-[#e7aa3c] flex items-center justify-center">
          <svg className="w-6 h-6 text-[#1c1202]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
          </svg>
        </div>
      </a>
    </div>
  )
}
