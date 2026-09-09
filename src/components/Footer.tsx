import React from 'react';
import { CHAPTER_SECTIONS } from '../types';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c12] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Chapter Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-600/70 flex items-center justify-center text-sky-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 20h18L12 4 3 20z" />
                  <path d="M12 12v4m-2-2h4" />
                </svg>
              </div>
              <div>
                <p className="text-base font-black text-white tracking-wide">
                  亞馬遜國家山岳協會
                </p>
                <p className="text-xs font-mono text-sky-400">
                  Chapter 14 · Mountain Medicine
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              本網站為亞馬遜國家山岳協會登山教育教材第十四章《高山醫學》。致力於推廣高海拔生理科學認知、早期病徵辨識與成熟撤退決策，守護每一位登山者的生命安全。
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">繁體中文 zh-Hant-TW</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">登山安全教育</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800">非醫療診斷工具</span>
            </div>
          </div>

          {/* Col 2: Chapter 14 Section Links */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-3">
              本章單元導覽
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CHAPTER_SECTIONS.slice(0, 5).map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="hover:text-sky-400 transition flex items-center gap-1.5"
                  >
                    <span className="font-mono text-slate-400">{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Section Links & Resources */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider mb-3">
              進階單元與規範
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CHAPTER_SECTIONS.slice(5).map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="hover:text-sky-400 transition flex items-center gap-1.5"
                  >
                    <span className="font-mono text-slate-400">{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#medical-disclaimer"
                  className="text-amber-400/90 hover:text-amber-300 transition flex items-center gap-1 font-semibold"
                >
                  <span>⚠️ 醫療安全聲明</span>
                </a>
              </li>
              <li>
                <a
                  href="#relations"
                  className="hover:text-sky-400 transition"
                >
                  本章在教材中的位置
                </a>
              </li>
              <li>
                <a
                  href="#takeaways"
                  className="hover:text-sky-400 transition"
                >
                  本章重點整理
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} 亞馬遜國家山岳協會. All rights reserved. 登山安全教育教材.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-500 transition text-xs font-medium cursor-pointer"
            aria-label="返回網頁頂部"
          >
            <span>返回頂部</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
