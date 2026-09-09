import React from 'react';

export const Section8DecisionMaking: React.FC = () => {
  return (
    <section
      id="sec-8"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/70 border border-amber-800/50 px-2.5 py-1 rounded">
            SECTION 08
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            CRITICAL DECISION MATRIX
          </span>
        </div>

        <h2
          id="heading-sec-8"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          高山醫學與登山決策
        </h2>

        {/* Lead Core Mindset */}
        <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800 mb-8 space-y-2.5">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            DECISION PRINCIPLE
          </span>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-semibold">
            面對高山症，正確的思考不是「再撐一下」，而是評估風險、必要時調整計畫。
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            任何將「個人面子」或「既定攻頂行程」置於生理警訊之上的心態，都是高山致命山難的最主要人為誘因。
          </p>
        </div>

        {/* 3 Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Decision Card 1 */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-sky-800/60 hover:border-sky-500/80 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 font-bold">
                  LEVEL 1
                </span>
                <span className="text-xs text-sky-300 font-medium">保守觀察</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">原地休息觀察</h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-sky-300 font-semibold">適用條件：</p>
                <ul className="space-y-1 list-disc list-inside text-slate-400">
                  <li>輕微症狀（輕度頭痛或胃部不適）</li>
                  <li>症狀穩定無擴大惡化趨勢</li>
                  <li className="text-amber-300 font-medium">不再增加睡眠高度</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400">
              給予 12~24 小時原地適應，補水保暖。
            </p>
          </div>

          {/* Decision Card 2 */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-amber-800/60 hover:border-amber-500/80 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 font-bold">
                  LEVEL 2
                </span>
                <span className="text-xs text-amber-300 font-medium">下撤處置</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">降低高度</h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-amber-300 font-semibold">適用條件：</p>
                <ul className="space-y-1 list-disc list-inside text-slate-400">
                  <li>休息後症狀仍持續不退</li>
                  <li>症狀出現惡化加劇跡象</li>
                  <li>無法維持正常進食或睡眠</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 pt-2.5 border-t border-slate-800 text-[11px] text-amber-300/90 font-medium">
              下降 500~1000m 通常帶來顯著改善。
            </p>
          </div>

          {/* Decision Card 3 */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-rose-800/80 hover:border-rose-500 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-400 font-bold">
                  LEVEL 3
                </span>
                <span className="text-xs text-rose-300 font-medium">緊急後送</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">緊急下降並求援</h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="text-rose-300 font-semibold">適用條件：</p>
                <ul className="space-y-1 list-disc list-inside text-slate-400">
                  <li className="text-rose-200 font-medium">出現嚴重症狀（呼吸困難/咳泡沫）</li>
                  <li className="text-rose-200 font-medium">神經學警訊（步態不穩/認知混亂）</li>
                  <li>意識狀態改變或昏迷</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 pt-2.5 border-t border-slate-800 text-[11px] text-rose-300 font-bold">
              爭分奪秒立即下撤，同步啟動外部搜救。
            </p>
          </div>
        </div>

        {/* Large SVG: Decision Flowchart */}
        <div className="p-5 sm:p-7 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4 mb-8">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-200">
              登山現場高山症動態決策流程圖 (Comprehensive Altitude Decision Flowchart)
            </span>
            <span className="text-[11px] font-mono text-slate-400">教材圖表 14-8</span>
          </div>

          <svg
            viewBox="0 0 740 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none"
            aria-label="完整的現場高山症評估與行動分流流程圖"
          >
            {/* Start Node */}
            <rect x="290" y="15" width="160" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="370" y="40" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">症狀出現</text>

            {/* Down arrow */}
            <line x1="370" y1="55" x2="370" y2="80" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="366,80 370,86 374,80" fill="#38bdf8" />

            {/* Mandatory Action Node */}
            <rect x="250" y="86" width="240" height="42" rx="6" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="370" y="112" fill="#fde68a" fontSize="13" fontWeight="bold" textAnchor="middle">
              不再增加睡眠高度
            </text>

            {/* Down arrow */}
            <line x1="370" y1="128" x2="370" y2="152" stroke="#f59e0b" strokeWidth="2" />
            <polygon points="366,152 370,158 374,152" fill="#f59e0b" />

            {/* Diamond / Evaluation */}
            <polygon points="370,160 480,195 370,230 260,195" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
            <text x="370" y="198" fill="#e2e8f0" fontSize="12" fontWeight="bold" textAnchor="middle">
              觀察與評估 (12-24h)
            </text>

            {/* Branch Left: Persistent or Worsening */}
            <line x1="260" y1="195" x2="160" y2="195" stroke="#f59e0b" strokeWidth="2" />
            <text x="210" y="186" fill="#fbbf24" fontSize="11" textAnchor="middle">持續或惡化</text>
            <polygon points="160,191 154,195 160,199" fill="#f59e0b" />

            <rect x="30" y="170" width="124" height="50" rx="6" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
            <text x="92" y="193" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">降低高度</text>
            <text x="92" y="209" fill="#fde68a" fontSize="10" textAnchor="middle">降 500-1000m</text>

            {/* Branch Right: Severe symptoms or Ataxia */}
            <line x1="480" y1="195" x2="570" y2="195" stroke="#ef4444" strokeWidth="2" />
            <text x="525" y="186" fill="#f87171" fontSize="11" textAnchor="middle">嚴重/神經徵候</text>
            <polygon points="570,191 576,195 570,199" fill="#ef4444" />

            <rect x="576" y="165" width="144" height="60" rx="6" fill="#450a0a" stroke="#dc2626" strokeWidth="2" />
            <text x="648" y="190" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">緊急下降</text>
            <text x="648" y="206" fill="#fecaca" fontSize="11" fontWeight="bold" textAnchor="middle">＋ 尋求醫療協助</text>

            {/* Branch Bottom: Complete Resolution */}
            <line x1="370" y1="230" x2="370" y2="265" stroke="#10b981" strokeWidth="2" />
            <text x="430" y="248" fill="#34d399" fontSize="11">完全改善</text>
            <polygon points="366,265 370,271 374,265" fill="#10b981" />

            <rect x="270" y="271" width="200" height="38" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
            <text x="370" y="295" fill="#a7f3d0" fontSize="12" fontWeight="bold" textAnchor="middle">
              保守考量後可恢復行程
            </text>
          </svg>
        </div>

        {/* Core Philosophy Callout */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-slate-900 border border-sky-700/60 space-y-3">
          <div className="flex items-center gap-2.5 text-sky-400 font-bold text-sm">
            <svg className="w-5 h-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-base sm:text-lg text-white">核心觀念：下降是關鍵處置之一</h3>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
            調整計畫不是失敗。調整計畫是成熟登山判斷的一部分。
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            高山永遠在那裡，唯有敬畏身體極限、在關鍵時刻做出果斷撤退決策的登山者，才能平安完成每一次冒險。
          </p>
        </div>
      </div>
    </section>
  );
};
