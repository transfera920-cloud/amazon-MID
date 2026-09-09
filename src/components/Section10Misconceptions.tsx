import React from 'react';

export const Section10Misconceptions: React.FC = () => {
  const misconceptions = [
    {
      num: '01',
      wrong: '體力好就不會高山症',
      correctTitle: '良好體能並不能保證不會發生高山症',
      correctDetail:
        '高山症風險與個人對高海拔環境的適應能力、上升速度與高海拔暴露因素有關。運動員與平地體能強健者，進入高山同樣可能因上升過快而發生重度高山症。',
    },
    {
      num: '02',
      wrong: '忍一下就會改善',
      correctTitle: '症狀可能持續或惡化，不能單純依靠意志力',
      correctDetail:
        '在持續高海拔或上升過程中，症狀不會單憑意志力自然消退，反而極可能快速演變為致命的肺水腫或腦水腫。持續或惡化時應降低高度。',
    },
    {
      num: '03',
      wrong: '吃藥就可以繼續上升',
      correctTitle: '藥物不能取代適應時間、停止上升與必要時下降',
      correctDetail:
        '預防或緩解用藥僅為輔助減輕低氧代償負擔，絕非「高山保護傘」。一旦出現中重度症狀，盲目依賴藥物強行上升無異於置身致命險境。',
    },
    {
      num: '04',
      wrong: '登頂比安全重要',
      correctTitle: '安全返回才是真正完成登山',
      correctDetail:
        '登頂只完成了攀登的一半，絕大多數高山嚴重山難皆發生在下撤途中。隨時保持清醒理性、懂得適時放棄並撤退，才是頂級登山者的成熟風範。',
    },
  ];

  return (
    <section
      id="sec-10"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 10
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            MYTH BUSTING & TRUTH
          </span>
        </div>

        <h2
          id="heading-sec-10"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          常見錯誤觀念
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          登山界流傳的許多迷思常讓人產生虛假的安全感。破除錯誤認知、以科學醫學為依歸，是保護生命的第一步。
        </p>

        {/* 4 Misconception vs Correct Concept Sets */}
        <div className="space-y-6">
          {misconceptions.map((item) => (
            <div
              key={item.num}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-slate-400">
                  觀念辨析 CASE {item.num}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Wrong Column */}
                <div className="p-4 rounded-xl bg-[#260c0c] border border-rose-900/80 space-y-2">
                  <div className="flex items-center gap-2.5">
                    {/* Consistent Inline SVG Cross (X) */}
                    <div className="w-7 h-7 rounded-full bg-rose-950 border border-rose-600 flex items-center justify-center text-rose-400 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <line x1="4" y1="4" x2="12" y2="12" />
                        <line x1="12" y1="4" x2="4" y2="12" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                      錯誤觀念
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-rose-100">
                    「{item.wrong}」
                  </h3>
                </div>

                {/* Correct Column */}
                <div className="p-4 rounded-xl bg-[#0a2318] border border-emerald-800/80 space-y-2">
                  <div className="flex items-center gap-2.5">
                    {/* Consistent Inline SVG Check (✓) */}
                    <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="3 8.5 6.5 12 13 4" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      正確觀念
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-emerald-100">
                    {item.correctTitle}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {item.correctDetail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
