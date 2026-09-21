import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f14]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Scroll Reading Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="教材閱讀進度"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo & Brand */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-3 text-slate-100 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md p-1 transition-colors group"
            aria-label="亞馬遜國家山岳協會"
          >
            {/* Inline SVG Mountain Association Logo */}
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 transition-colors shrink-0 shadow-sm">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  d="M3 25L13 9l4 6 5-7 7 17H3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 9l2 3.5 2-1.5 2 2.5"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="24" cy="8" r="2" fill="#38bdf8" />
              </svg>
            </div>

            <span className="text-sm sm:text-base font-semibold tracking-wide text-slate-200">
              亞馬遜國家山岳協會
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
