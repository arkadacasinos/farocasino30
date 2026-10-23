import React from 'react'
import { REF_URL } from '@/lib/site-config'
import { FaroLogo } from './faro-logo'

export function FaroTopbar() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0d0e12]/90 backdrop-blur-md border-b border-[#1a1c23] lg:bg-transparent lg:border-b-0">
      <div className="flex items-center gap-3">
        {/* Mobile-only logo */}
        <div className="lg:hidden">
          <a href={REF_URL} className="inline-block">
            <FaroLogo />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 ml-auto">
        <a
          href={REF_URL}
          className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-[#1b1d25] hover:bg-[#252834] text-white border border-[#2b2e3b] transition-all hover:scale-102"
        >
          Вход
        </a>
        <a
          href={REF_URL}
          className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-full bg-gradient-to-r from-[#e7aa3c] via-[#f7cb67] to-[#e7aa3c] text-[#1c1202] hover:brightness-110 shadow-lg shadow-[#e5a93c]/20 transition-all hover:scale-102"
        >
          Регистрация
        </a>
      </div>
    </header>
  )
}
