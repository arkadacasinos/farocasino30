import React from 'react'
import { REF_URL } from '@/lib/site-config'
import { FaroLogo } from './faro-logo'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: string
}

export function FaroRail() {
  const items: NavItem[] = [
    {
      id: 'bonuses',
      label: 'Бонусы',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h9v13H3V8h9z" />
        </svg>
      ),
    },
    {
      id: 'shop',
      label: 'Магазин',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'missions',
      label: 'Миссии',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'race',
      label: 'Гонка рефералов',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'chests',
      label: 'Сундуки',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 'multiplier',
      label: 'Умножение баланса',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      ),
    },
    {
      id: 'referral',
      label: 'Реферальная прог...',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'vip',
      label: 'VIP Клуб',
      icon: (
        <svg className="w-5 h-5 text-[#e5a93c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="w-56 shrink-0 bg-[#0d0e12] border-r border-[#1a1c23] flex flex-col justify-between py-4 px-3 min-h-screen">
      <div>
        {/* Top bar with back arrow and logo */}
        <div className="flex items-center gap-2 mb-4 px-2">
          <a
            href={REF_URL}
            className="w-7 h-7 rounded-lg bg-[#181a22] hover:bg-[#202430] text-gray-300 flex items-center justify-center transition-colors"
            aria-label="Назад"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <a href={REF_URL} className="inline-block">
            <FaroLogo />
          </a>
        </div>

        {/* Fortune wheel mini banner */}
        <a
          href={REF_URL}
          className="group block mb-4 p-2.5 rounded-xl bg-gradient-to-br from-[#1b1c24] to-[#121319] border border-[#2a2b36] hover:border-[#e5a93c]/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-xs font-semibold text-white group-hover:text-[#f3bf4f] transition-colors">
                Рулетка удачи
              </div>
              <div className="text-[11px] text-[#e5a93c] flex items-center gap-1 mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <span>01:59:07</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f0b840] via-[#c6831d] to-[#744505] p-0.5 flex items-center justify-center shadow-lg shadow-black/60 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#171821] flex items-center justify-center">
                <span className="text-[10px] font-bold text-[#f3bf4f]">FARO</span>
              </div>
            </div>
          </div>
        </a>

        {/* Navigation items */}
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={REF_URL}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#c0c4d0] hover:text-white hover:bg-[#181a22] transition-colors group"
            >
              <span className="text-[#878c9d] group-hover:text-[#e5a93c] transition-colors">
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Language switcher */}
      <div className="pt-4 border-t border-[#1a1c23]">
        <a
          href={REF_URL}
          className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#14161d] text-xs text-gray-300 hover:text-white transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-base" role="img" aria-label="Russian flag">🇷🇺</span>
            <span>Русский</span>
          </div>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </aside>
  )
}
