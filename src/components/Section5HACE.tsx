import React from 'react';

export const Section5HACE: React.FC = () => {
  const haceWarnings = [
    { title: '意識改變', desc: '嗜睡、喚醒困難、對人時地定向感混亂、表情呆滯', code: 'HACE-01' },
    { title: '行為異常', desc: '性格突變、情緒暴躁、冷漠無反應、脫除防寒衣物或做出非理性舉止', code: 'HACE-02' },
    { title: '判斷能力下降', desc: '無法正確扣上背包卡扣、無法辨識路徑危險、無法做出基本安全計算', code: 'HACE-03' },
    { title: '行走不穩', desc: '共濟失調（Ataxia），步態蹣跚如酒醉、無法沿直線行走、失去平衡', code: 'HACE-04' },
  ];

  return (
    <section
      id="sec-5"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/70 border border-purple-800/50 px-2.5 py-1 rounded">
            SECTION 05
          </span>
          <span className="text-xs text-purple-300 font-mono tracking-wide">
            NEUROLOGICAL CRITICAL EMERGENCY
          </span>
        </div>

        <h2
          id="heading-sec-5"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          高山腦水腫 HACE
        </h2>

        <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
          高山腦水腫（High Altitude Cerebral Edema）可能危及生命，是高海拔醫學中最危急的神經學緊急狀況。腦部微血管因嚴重低氧通透性增加，導致顱內壓急遽升高。
        </p>

        {/* 4 Critical Warning Signs Grid */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-200 mb-3">
            四大核心神經學警訊
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {haceWarnings.map((item) => (
              <div
                key={item.code}
                className="p-4 rounded-xl bg-slate-900/90 border border-purple-900/40 hover:border-purple-500/60 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60">
                      {item.code}
                    </span>
                    <span className="text-xs text-purple-400 font-medium">神經功能失常</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Alert Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#230d2e] border-2 border-purple-500 space-y-5 shadow-2xl mb-8">
          <div className="flex items-center gap-3.5">
            {/* Brain Neurological Warning SVG */}
            <div className="w-12 h-12 rounded-xl bg-purple-900/80 border border-purple-400/80 flex items-center justify-center text-purple-200 shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4v1a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-1a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z" />
                <path d="M9 12h6" />
                <path d="M12 9v6" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-purple-300 uppercase">
                ZERO DELAY TOLERANCE · 零延誤決策
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                絕不可「先觀察一晚」
              </h3>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-purple-800/70 text-purple-100 text-sm font-semibold">
            一旦出現行走不穩（步態失調）或認知混亂，代表大腦已經承受實質水腫壓迫，隨時可能陷入昏迷，絕不能存有任何僥倖心理在原地等待天明！
          </div>

          <div className="p-4 rounded-xl bg-purple-950/90 border border-purple-700/80 space-y-2">
            <p className="text-sm sm:text-base font-bold text-white">
              核心處置流程：
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-mono font-bold">
              <span className="px-3 py-1.5 rounded bg-black/60 border border-purple-600 text-purple-200">
                1. 立即停止上升
              </span>
              <span className="text-purple-400">→</span>
              <span className="px-3 py-1.5 rounded bg-purple-600 text-white shadow-md">
                2. 緊急下降
              </span>
              <span className="text-purple-400">→</span>
              <span className="px-3 py-1.5 rounded bg-black/60 border border-purple-600 text-purple-200">
                3. 尋求醫療協助
              </span>
            </div>
          </div>
        </div>

        {/* Inline SVG: Neurological Ataxia Field Test & Brain Edema Pressure Diagram */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              現場步態辨識（腳跟接腳尖直線測試）與處置
            </span>
            <span className="text-[11px] font-mono text-slate-400">教材圖表 14-5</span>
          </div>

          <svg
            viewBox="0 0 720 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none"
            aria-label="行走不穩測試與腦水腫緊急下降處置示意"
          >
            {/* Step 1: Tandem gait test */}
            <rect x="20" y="20" width="320" height="120" rx="8" fill="#1e1329" stroke="#9333ea" strokeWidth="1.5" />
            <text x="35" y="44" fill="#d8b4fe" fontSize="13" fontWeight="bold">步態測試：直線行走 (Tandem Walk)</text>
            <line x1="35" y1="90" x2="315" y2="90" stroke="#6b21a8" strokeDasharray="4 4" strokeWidth="2" />
            {/* normal footprints straight */}
            <text x="35" y="70" fill="#cbd5e1" fontSize="11">正常：腳尖接腳跟平穩直線前進</text>
            {/* wobbling footprints */}
            <path d="M40 90 Q80 70 120 105 T200 80 T280 110" stroke="#f87171" strokeWidth="2.5" fill="none" />
            <text x="35" y="125" fill="#fca5a5" fontSize="11" fontWeight="bold">異常：左右搖晃、跌倒、步態失調（Ataxia）</text>

            {/* Step 2: Emergency Response */}
            <rect x="370" y="20" width="330" height="120" rx="8" fill="#380d28" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="385" y="44" fill="#fda4af" fontSize="13" fontWeight="bold">判斷結論：視為 HACE 重大緊急</text>
            <text x="385" y="70" fill="#fecdd3" fontSize="11">全隊停止所有攀登目標，全員護送</text>
            <rect x="385" y="85" width="300" height="38" rx="6" fill="#be123c" />
            <text x="535" y="108" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
              立即實施下降 · 每降低 100m 都在挽救腦細胞
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};
