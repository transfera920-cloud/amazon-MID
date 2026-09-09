import React from 'react';
import { CHAPTER_SECTIONS } from '../types';

export const TableOfContents: React.FC = () => {
  return (
    <section
      id="toc"
      className="py-12 lg:py-16 bg-[#0e141c] border-b border-slate-800"
      aria-labelledby="toc-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold mb-1">
              {/* Directory Icon */}
              <svg className="w-4 h-4 text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span>SYLLABUS & CURRICULUM</span>
            </div>
            <h2 id="toc-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              章節目錄導覽
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              本章共規劃 10 個核心學習單元。點選各項目可直接平滑跳轉至對應教材內容。
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden="true" />
            <span>錨點已支援鍵盤跳轉與平滑捲動</span>
          </div>
        </div>

        {/* 10 Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CHAPTER_SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={sec.anchor}
              className="group relative p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/70 hover:bg-slate-850 hover:shadow-lg hover:shadow-sky-950/30 transition duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono font-extrabold text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2 py-0.5 rounded">
                    SECTION {sec.number}
                  </span>
                  {/* Arrow SVG */}
                  <svg
                    className="w-4 h-4 text-slate-500 group-hover:text-sky-300 group-hover:translate-x-0.5 transition"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>

                <h3 className="text-base font-semibold text-slate-100 group-hover:text-white leading-snug mb-1.5">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sec.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono">{sec.anchor}</span>
                <span className="text-sky-400/90 group-hover:underline font-medium">研讀內容 →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
