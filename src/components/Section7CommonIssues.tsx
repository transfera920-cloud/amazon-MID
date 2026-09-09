import React from 'react';

export const Section7CommonIssues: React.FC = () => {
  return (
    <section
      id="sec-7"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-7"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 07
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            ASSOCIATED MOUNTAIN RISKS
          </span>
        </div>

        <h2
          id="heading-sec-7"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          高山環境常見健康問題
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          除了高山症之外，高海拔環境還會伴隨其他常見健康問題。各項風險往往相互交互影響，加劇身體負擔。
        </p>

        {/* 4 Cards with custom inline SVG icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: 失溫 */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                  HEALTH-01
                </span>
                {/* Thermometer Cold Inline SVG */}
                <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                    <circle cx="11.5" cy="17.5" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">失溫</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                人體產熱低於散熱，核心體溫持續下降。高海拔低溫與風寒效應極為顯著。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0f14] border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <span className="text-sky-400 font-semibold block">觸發與加劇因素：</span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-800">低溫</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">強風</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">雨水</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">停止活動</span>
              </div>
            </div>
          </div>

          {/* Card 2: 脫水 */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                  HEALTH-02
                </span>
                {/* Water Drop Dehydration Inline SVG */}
                <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">脫水</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                血液濃縮阻礙微循環，加重頭痛與虛脫感，並混淆高山症臨床觀察。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0f14] border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <span className="text-sky-400 font-semibold block">觸發與加劇因素：</span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-800">流汗</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">呼吸增加</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">飲水不足</span>
              </div>
            </div>
          </div>

          {/* Card 3: 疲勞 */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                  HEALTH-03
                </span>
                {/* Fatigue / Activity Battery Inline SVG */}
                <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M23 13v-2" />
                    <line x1="5" y1="10" x2="5" y2="14" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">疲勞</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                低氧加劇能量耗竭，使肢體反應遲緩、注意力渙散，是滑墜與迷途的重要危險因子。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0f14] border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <span className="text-sky-400 font-semibold block">不良連鎖後果：</span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-800">判斷力下降</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">行走安全降低</span>
              </div>
            </div>
          </div>

          {/* Card 4: 睡眠障礙 */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                  HEALTH-04
                </span>
                {/* Moon / Sleep Disruption Inline SVG */}
                <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">睡眠障礙</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                週期性呼吸（Periodic Breathing）引起頻繁醒轉，深層睡眠不足使隔日體能與適應力大幅遞減。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-[#0b0f14] border border-slate-800/80 text-xs text-slate-300 space-y-1">
              <span className="text-sky-400 font-semibold block">誘發核心主因：</span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-800">高海拔低氧</span>
                <span className="px-2 py-0.5 rounded bg-slate-800">環境改變</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
