import React from 'react'

export function FaroLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Golden geometric crown/M-F icon matching screenshot 2 */}
      <svg
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto text-[#e5a93c]"
        aria-hidden="true"
      >
        <path
          d="M2 5L12 23L20 8L28 23L38 5L33 25H7L2 5Z"
          fill="url(#faroCrownGrad)"
          stroke="#f6c768"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="faroCrownGrad" x1="2" y1="5" x2="38" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f7d070" />
            <stop offset="0.5" stopColor="#e5a93c" />
            <stop offset="1" stopColor="#b87818" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-extrabold tracking-[0.2em] text-white text-base uppercase">
        FARO
      </span>
    </div>
  )
}
