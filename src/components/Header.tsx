import React, { useState, useEffect } from 'react';
import { CHAPTER_SECTIONS } from '../types';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="flex items-center justify-between h-16">
          {/* Logo & Textbook Brand */}
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

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                亞馬遜國家山岳協會
              </span>
              <span className="text-[11px] text-sky-400/90 font-mono tracking-wider">
                Chapter 14 · Mountain Medicine
              </span>
            </div>
          </a>

          {/* Center Badge - Mountain Education */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>登山安全教育教材</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">繁體中文版</span>
          </div>

          {/* Quick Chapter Selector Trigger & Desktop Jump */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#toc"
                className="text-xs text-slate-300 hover:text-sky-300 px-3 py-1.5 rounded-md hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition"
              >
                章節目錄
              </a>
              <a
                href="#sec-8"
                className="text-xs text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-md bg-amber-950/40 hover:bg-amber-900/40 border border-amber-800/60 transition font-medium"
              >
                撤退決策流程
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-sky-300 hover:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs font-medium transition"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-chapter-menu"
              aria-label="開啟章節跳轉目錄"
            >
              {/* Menu icon SVG */}
              <svg
                className="w-4 h-4 text-sky-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>章節跳轉</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-chapter-menu"
          className="border-t border-slate-800 bg-[#0e141c] shadow-2xl px-4 py-5 max-h-[75vh] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                快速章節導覽（共 10 章節）
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-800/80"
              >
                關閉 ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {CHAPTER_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={sec.anchor}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-left transition ${
                      isActive
                        ? 'bg-sky-950/50 border-sky-600/70 text-sky-200'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/70 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-sky-400 px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-900/50 shrink-0">
                      {sec.number}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-200 truncate">{sec.title}</p>
                      <p className="text-[11px] text-slate-400 truncate">{sec.shortDesc}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <div className="flex gap-3">
                <a href="#relations" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-300">
                  與其他章節關係
                </a>
                <a href="#takeaways" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-300">
                  重點整理
                </a>
                <a href="#medical-disclaimer" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-300">
                  教材聲明
                </a>
              </div>
              <span className="text-[11px] text-slate-500">亞馬遜國家山岳協會 · 2026 版權所有</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
