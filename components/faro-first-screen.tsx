import React from 'react'
import Image from 'next/image'
import { REF_URL } from '@/lib/site-config'

export function FaroFirstScreen() {
  return (
    <div className="space-y-4">
      {/* Big Hero Banner matching screenshot 2 */}
      <section className="relative overflow-hidden rounded-3xl bg-[#121319] border border-[#2b2d38]/60 p-6 sm:p-10 lg:p-12 min-h-[340px] sm:min-h-[400px] flex flex-col justify-between shadow-2xl">
        {/* Background art: transparent vault with gold bars, coins and diamonds */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] pointer-events-none select-none">
          <Image
            src="/art/hero-vault.jpg"
            alt="Faro Casino Welcome Pack золотой сейф"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-right opacity-80 sm:opacity-95"
          />
          {/* Soft dark vignette on the left to guarantee 100% text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121319] via-[#121319]/80 to-transparent sm:via-[#121319]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent sm:hidden" />
        </div>

        {/* Content on the left */}
        <div className="relative z-10 max-w-xl">
          <span className="inline-block text-xs uppercase tracking-widest text-[#e5a93c] font-semibold mb-2">
            Эксклюзивный бонус
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Welcome Pack
            <span className="block mt-1 bg-gradient-to-r from-[#fadb72] via-[#e6aa3e] to-[#f4c965] bg-clip-text text-transparent drop-shadow-sm">
              333% + 1 111 FS
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#cfd3df] max-w-md leading-relaxed">
            Начните свою победную серию на лучших условиях!
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href={REF_URL}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-extrabold text-sm sm:text-base bg-gradient-to-r from-[#e7aa3c] via-[#f7cb67] to-[#e7aa3c] text-[#1c1202] hover:brightness-110 shadow-xl shadow-[#e5a93c]/30 hover:shadow-[#e5a93c]/50 transition-all hover:scale-102"
            >
              Депозит
            </a>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="relative z-10 flex items-center gap-1.5 mt-6 sm:mt-0">
          <span className="w-5 h-1.5 rounded-full bg-[#e5a93c]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#3a3d4d]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#3a3d4d]" />
        </div>
      </section>

      {/* Row of 3 promo cards matching screenshot 2 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4" aria-label="Специальные промо-предложения">
        {/* Card 1: Депозитный стрик */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121319] border border-[#2b2d38]/60 p-5 flex flex-col justify-between min-h-[220px]">
          {/* Background image right */}
          <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none select-none">
            <Image
              src="/art/card-streak.jpg"
              alt="Депозитный стрик Faro Casino"
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121319] via-[#121319]/50 to-transparent" />
          </div>

          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-white">Депозитный стрик</h3>
            <p className="mt-1 text-xs text-[#a0a5b8] max-w-[190px] leading-snug">
              Чем длиннее серия депозитов, тем ценнее призы
            </p>
            <div className="mt-4">
              <a
                href={REF_URL}
                className="inline-block px-5 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-[#e7aa3c] to-[#f4c965] text-[#1c1202] hover:brightness-110 shadow-md shadow-[#e5a93c]/20 transition-all"
              >
                Начать стрик
              </a>
            </div>
          </div>

          {/* Stepper icons at bottom */}
          <div className="relative z-10 flex items-center gap-1 pt-4">
            <span className="w-6 h-6 rounded-md bg-[#232530] text-[#e5a93c] flex items-center justify-center text-xs">🎁</span>
            <span className="w-6 h-6 rounded-md bg-[#232530] text-[#e5a93c] flex items-center justify-center text-xs">🎁</span>
            <span className="w-6 h-6 rounded-md bg-[#232530] text-[#e5a93c] flex items-center justify-center text-xs">🎁</span>
            <span className="w-6 h-6 rounded-md bg-[#1a1c24] text-gray-400 flex items-center justify-center text-[11px] font-semibold">4</span>
            <span className="w-6 h-6 rounded-md bg-[#1a1c24] text-gray-400 flex items-center justify-center text-[11px] font-semibold">5</span>
            <span className="w-6 h-6 rounded-md bg-[#1a1c24] text-gray-400 flex items-center justify-center text-[11px] font-semibold">6</span>
            <span className="w-6 h-6 rounded-md bg-[#232530] text-[#e5a93c] flex items-center justify-center text-xs">🎁</span>
            <span className="w-6 h-6 rounded-md bg-[#232530] text-[#e5a93c] flex items-center justify-center text-xs">🎁</span>
          </div>
        </div>

        {/* Card 2: Faro Casino App */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121319] border border-[#2b2d38]/60 p-5 flex flex-col justify-between min-h-[220px]">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none select-none">
            <Image
              src="/art/card-app.jpg"
              alt="Faro Casino мобильное приложение"
              fill
              sizes="(max-width: 768px) 45vw, 20vw"
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121319] via-[#121319]/40 to-transparent" />
          </div>

          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-white">Faro Casino App</h3>
            <p className="mt-1 text-xs text-[#a0a5b8] max-w-[200px] leading-snug">
              Скачивайте мобильное приложение и получайте эксклюзивные бонусы
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-[11px] text-[#8ea862]">
              <svg className="w-3.5 h-3.5 text-[#8ea862]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993s-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9994.4482.9994.9993s-.4483.9997-.9994.9997m11.4045-6.02l1.996-3.4572c.1118-.1938.0456-.4415-.1481-.5533-.1939-.1118-.4416-.0456-.5534.1482l-2.024 3.5058c-1.5282-.6985-3.2384-1.0886-5.052-1.0886-1.8136 0-3.5238.3901-5.052 1.0886L5.074 5.4671c-.1118-.1938-.3595-.26-.5534-.1482-.1937.1118-.2599.3595-.1481.5533l1.996 3.4572C2.6845 11.2065.2348 15.0116 0 19.4975h24c-.2348-4.4859-2.6845-8.291-6.1185-10.1761" />
              </svg>
              <span>Доступно для Android</span>
            </div>
          </div>

          <div className="relative z-10 pt-4">
            <a
              href={REF_URL}
              className="inline-block px-5 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-[#e7aa3c] to-[#f4c965] text-[#1c1202] hover:brightness-110 shadow-md shadow-[#e5a93c]/20 transition-all"
            >
              Скачать
            </a>
          </div>
        </div>

        {/* Card 3: Миссии */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121319] border border-[#2b2d38]/60 p-5 flex flex-col justify-between min-h-[220px]">
          <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none select-none">
            <Image
              src="/art/card-missions.jpg"
              alt="Миссии Faro Casino"
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121319] via-[#121319]/50 to-transparent" />
          </div>

          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-white">Миссии</h3>
            <p className="mt-1 text-xs text-[#a0a5b8] max-w-[200px] leading-snug">
              Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-white font-medium">Завершите 3 депозита</span>
              <span className="px-2 py-0.5 rounded-full bg-[#20222d] border border-[#e5a93c]/40 text-[#f3bf4f] text-[11px] font-bold flex items-center gap-1">
                <span>◆</span> +12 Faro Coins
              </span>
            </div>
          </div>

          <div className="relative z-10 pt-4">
            <a
              href={REF_URL}
              className="inline-block px-5 py-2 text-xs font-semibold rounded-full bg-[#1e202a] hover:bg-[#282b39] text-white border border-[#303344] transition-all"
            >
              Начать
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
