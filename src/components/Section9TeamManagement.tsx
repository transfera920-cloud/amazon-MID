import React from 'react';

export const Section9TeamManagement: React.FC = () => {
  return (
    <section
      id="sec-9"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-9"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 09
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            LEADERSHIP & EXPEDITION CARE
          </span>
        </div>

        <h2
          id="heading-sec-9"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          隊伍中的高山醫學管理
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          領隊與嚮導在高山活動中扮演關鍵角色。在高海拔極端環境中，個人判斷力可能隨缺氧而鈍化，必須依賴完善的隊伍互助機制與主動健康監控。
        </p>

        {/* 2-Column Phase Cards: 行前 vs 行進間 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Phase 1: 行前規劃 */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
              {/* Clipboard Checklist SVG */}
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">行前：健康調查與經驗評估</h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-slate-100">了解隊員健康狀況：</strong>
                  詳細調查心血管病史、呼吸系統慢性疾病（如氣喘）、近期急性感染與常規用藥情況。
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-slate-100">了解高山經驗：</strong>
                  掌握每位隊員過往最高抵達海拔、是否有高山症病史或對特定高度的適應節奏。
                </span>
              </li>
            </ul>
          </div>

          {/* Phase 2: 行進間觀察 */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
              {/* Binoculars / Observation SVG */}
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">行進間：動態觀察與主動關懷</h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-slate-100">注意隊員行為：</strong>
                  注意是否有沉默寡言、落後脫隊、步伐踉蹌、反應遲鈍或神情呆滯等異常微表情。
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-slate-100">注意體能變化：</strong>
                  觀察配速是否突然嚴重落後、呼吸聲是否異常急促或伴隨雜音。
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" aria-hidden="true" />
                <span>
                  <strong className="text-slate-100">主動詢問身體狀況：</strong>
                  不等隊員自己開口，每逢休息點主動逐一詢問頭痛、食慾、進水量與體感。
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Culture Banner: 安全優先的團隊文化 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0d2238] via-slate-900 to-slate-900 border-2 border-sky-500/70 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-900/80 border border-sky-500 flex items-center justify-center text-sky-200 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">
                EXPEDITION SAFETY ETHICS · 登山團隊倫理
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                安全優先的團隊文化
              </h3>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-slate-700/80 text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
            營造不會被責備的氛圍，避免隊員隱瞞症狀。
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-1">
            誠實回報身體狀況，應該被視為專業，而不是軟弱。一支成熟隊伍的基本共識，是絕不允許「逞強」文化犧牲任何一位夥伴的生命安全。
          </p>
        </div>
      </div>
    </section>
  );
};
