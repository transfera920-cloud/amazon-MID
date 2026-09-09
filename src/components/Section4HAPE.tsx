import React from 'react';

export const Section4HAPE: React.FC = () => {
  const hapeSymptoms = [
    { name: '呼吸困難', desc: '即使在靜止休息時仍氣喘吁吁，端坐呼吸', level: '危急' },
    { name: '胸悶', desc: '胸部壓迫感、沉重緊繃，深呼吸時感到阻力', level: '危急' },
    { name: '咳嗽', desc: '初期為乾咳，隨後加劇且無法抑制', level: '進展' },
    { name: '可能帶泡沫痰', desc: '咳出白色或粉紅色帶血絲之泡沫狀分泌物', level: '極危急' },
    { name: '極度疲倦', desc: '全身癱軟無力，甚至無法維持坐姿或行走數步', level: '嚴重' },
    { name: '嘴唇發紫', desc: '發紺現象（Cyanosis），指甲床與唇色因重度缺氧呈現青紫色', level: '極危急' },
  ];

  return (
    <section
      id="sec-4"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-4"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/70 border border-rose-800/50 px-2.5 py-1 rounded">
            SECTION 04
          </span>
          <span className="text-xs text-rose-300 font-mono tracking-wide">
            LIFE-THREATENING EMERGENCY
          </span>
        </div>

        <h2
          id="heading-sec-4"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          高山肺水腫 HAPE
        </h2>

        <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
          高山肺水腫（High Altitude Pulmonary Edema）是嚴重的高山疾病。肺部積水會導致氧氣交換受阻。
        </p>

        {/* Symptoms Grid */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-200 mb-3">
            可能出現之危急症狀
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hapeSymptoms.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/70 border border-rose-900/50 text-rose-300 font-bold">
                      {item.level}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Alert Banner: 重大警訊視覺區塊 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#2a0808] border-2 border-rose-600 space-y-5 shadow-2xl mb-8">
          <div className="flex items-center gap-3.5">
            {/* Danger Bell / Siren SVG */}
            <div className="w-12 h-12 rounded-xl bg-rose-900/80 border border-rose-500/80 flex items-center justify-center text-rose-200 shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-rose-300 uppercase">
                CRITICAL LIFE HAZARD · 生命重大警訊
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                HAPE 可能快速危及生命
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-lg bg-black/40 border border-rose-800/80 text-rose-100 text-sm font-semibold flex items-center gap-2">
              <span className="text-rose-400 text-lg">✕</span>
              <span>不要等待症狀自行改善</span>
            </div>
            <div className="p-3.5 rounded-lg bg-black/40 border border-rose-800/80 text-rose-100 text-sm font-semibold flex items-center gap-2">
              <span className="text-rose-400 text-lg">✕</span>
              <span>不要以為休息一晚就會好轉</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/90 border border-rose-700/80 space-y-2">
            <p className="text-sm sm:text-base font-bold text-white">
              核心處置：
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-mono font-bold">
              <span className="px-3 py-1.5 rounded bg-black/60 border border-rose-600 text-rose-200">
                1. 停止上升
              </span>
              <span className="text-rose-400">→</span>
              <span className="px-3 py-1.5 rounded bg-rose-600 text-white shadow-md">
                2. 儘快下降
              </span>
              <span className="text-rose-400">→</span>
              <span className="px-3 py-1.5 rounded bg-black/60 border border-rose-600 text-rose-200">
                3. 尋求專業醫療協助
              </span>
            </div>
            <p className="text-xs text-rose-200/90 pt-1">
              時間就是生命。高山肺水腫患者若未立即下降，可能在數小時至數天內因嚴重低血氧窒息死亡。
            </p>
          </div>
        </div>

        {/* Inline SVG: HAPE Alveoli & Gas Exchange Blockage */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              肺泡微血管滲出液與氣體交換阻絕示意
            </span>
            <span className="text-[11px] font-mono text-slate-400">教材圖表 14-4</span>
          </div>

          <svg
            viewBox="0 0 720 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none"
            aria-label="肺部積水阻礙氧氣穿透肺泡進入微血管之示意圖"
          >
            {/* Healthy Alveolus */}
            <g transform="translate(40, 20)">
              <rect width="280" height="140" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="140" y="30" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">正常肺泡氣體交換</text>
              <circle cx="140" cy="85" r="42" fill="#0284c7" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="140" y="80" fill="#94a3b8" fontSize="10" textAnchor="middle">乾燥肺泡腔</text>
              <text x="140" y="98" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">O₂ 順暢透析至微血管</text>
              <path d="M140 108 L140 120" stroke="#38bdf8" strokeWidth="2" />
              <polygon points="137,120 140,126 143,120" fill="#38bdf8" />
            </g>

            {/* HAPE Alveolus */}
            <g transform="translate(400, 20)">
              <rect width="280" height="140" rx="8" fill="#3b0707" stroke="#ef4444" strokeWidth="1.5" />
              <text x="140" y="30" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">HAPE：微血管高壓滲液積水</text>
              <circle cx="140" cy="85" r="42" fill="#7f1d1d" fillOpacity="0.5" stroke="#ef4444" strokeWidth="2" />
              {/* Fluid Waves inside */}
              <path d="M102 92 Q120 85 140 92 T178 92" stroke="#fca5a5" strokeWidth="2" fill="none" />
              <text x="140" y="80" fill="#fecaca" fontSize="10" fontWeight="bold" textAnchor="middle">水腫積液與血漿蛋白</text>
              <text x="140" y="112" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">氧氣無法穿透 · 窒息窒礙</text>
              {/* Blocked cross */}
              <line x1="130" y1="122" x2="150" y2="134" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="150" y1="122" x2="130" y2="134" stroke="#ef4444" strokeWidth="2.5" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
