import React from 'react';

export const Section1MedicineIntro: React.FC = () => {
  return (
    <section
      id="sec-1"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-1"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 01
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            PHYSIOLOGICAL FOUNDATION
          </span>
        </div>

        <h2
          id="heading-sec-1"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6"
        >
          什麼是高山醫學
        </h2>

        {/* Lead Paragraph */}
        <div className="text-base sm:text-lg text-slate-200 leading-relaxed space-y-4 mb-8">
          <p>
            高山醫學研究人在高海拔、低氧環境下，身體所產生的生理變化與相關疾病。它不是遙遠的臨床話題，而是每一位進入高山的登山者都應具備的基本知識。
          </p>
        </div>

        {/* Core Concept Callout Box */}
        <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 mb-8 space-y-3">
          <div className="flex items-center gap-2.5 text-sky-300 font-semibold text-sm sm:text-base">
            {/* Mountain shield icon */}
            <svg
              className="w-5 h-5 text-sky-400 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h3>核心觀念：建立高海拔適應的正確認知</h3>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            平地能力不代表可以直接適應高山環境。
          </p>
          <div className="p-3.5 rounded-lg bg-amber-950/30 border border-amber-800/50 text-amber-200/90 text-sm font-medium leading-relaxed">
            體能、經驗、意志力，都無法取代身體所需的適應時間。
          </div>
        </div>

        {/* Inline SVG: Physiological Cascade Flowchart */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              高海拔生理連鎖反應流程圖
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              教材圖表 14-1
            </span>
          </div>

          <div className="w-full flex justify-center py-2">
            <svg
              viewBox="0 0 760 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-slate-200 select-none max-w-full"
              aria-label="高度增加至可能產生高山相關症狀的生理流程"
            >
              {/* Step 1 */}
              <g transform="translate(10, 20)">
                <rect width="150" height="76" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.5" />
                <circle cx="24" cy="24" r="10" fill="#082f49" stroke="#0284c7" />
                <text x="24" y="28" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
                <text x="75" y="44" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">高度增加</text>
                <text x="75" y="62" fill="#94a3b8" fontSize="10" textAnchor="middle">進入 2500m+ 高山</text>
              </g>

              {/* Arrow 1 */}
              <g transform="translate(165, 52)">
                <line x1="0" y1="0" x2="25" y2="0" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="25,-4 34,0 25,4" fill="#38bdf8" />
              </g>

              {/* Step 2 */}
              <g transform="translate(205, 20)">
                <rect width="150" height="76" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.5" />
                <circle cx="24" cy="24" r="10" fill="#082f49" stroke="#0284c7" />
                <text x="24" y="28" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
                <text x="75" y="44" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">氧氣分壓降低</text>
                <text x="75" y="62" fill="#94a3b8" fontSize="10" textAnchor="middle">大氣壓力隨高度遞減</text>
              </g>

              {/* Arrow 2 */}
              <g transform="translate(360, 52)">
                <line x1="0" y1="0" x2="25" y2="0" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="25,-4 34,0 25,4" fill="#38bdf8" />
              </g>

              {/* Step 3 */}
              <g transform="translate(400, 20)">
                <rect width="150" height="76" rx="8" fill="#111827" stroke="#334155" strokeWidth="1.5" />
                <circle cx="24" cy="24" r="10" fill="#082f49" stroke="#0284c7" />
                <text x="24" y="28" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
                <text x="75" y="44" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">人體開始適應</text>
                <text x="75" y="62" fill="#94a3b8" fontSize="10" textAnchor="middle">心肺啟動代償機制</text>
              </g>

              {/* Arrow 3 */}
              <g transform="translate(555, 52)">
                <line x1="0" y1="0" x2="25" y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="25,-4 34,0 25,4" fill="#f59e0b" />
              </g>

              {/* Step 4 */}
              <g transform="translate(595, 20)">
                <rect width="155" height="76" rx="8" fill="#1c1917" stroke="#78350f" strokeWidth="1.5" />
                <circle cx="24" cy="24" r="10" fill="#451a03" stroke="#d97706" />
                <text x="24" y="28" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">!</text>
                <text x="78" y="44" fill="#fef3c7" fontSize="12" fontWeight="bold" textAnchor="middle">可能產生高山症狀</text>
                <text x="78" y="62" fill="#fde68a" fontSize="10" textAnchor="middle">若上升過快超越代償</text>
              </g>
            </svg>
          </div>

          <p className="text-xs text-slate-400 text-center">
            流程說明：高度增加 → 氧氣分壓降低 → 人體開始適應 → 可能產生高山相關症狀
          </p>
        </div>
      </div>
    </section>
  );
};
