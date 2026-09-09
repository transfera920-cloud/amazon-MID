import React from 'react';

export const Section2AltitudeEnvironment: React.FC = () => {
  return (
    <section
      id="sec-2"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-2"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 02
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            ENVIRONMENT & HUMAN PHYSIOLOGY
          </span>
        </div>

        <h2
          id="heading-sec-2"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8"
        >
          高海拔環境對人體的影響
        </h2>

        <div className="space-y-10">
          {/* Part 1: 低氧環境 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400 font-bold text-sm">
                一
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                低氧環境
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              海拔越高，空氣中的氧氣分壓越低。身體為了維持各器官與組織的基本供氧，會迅速啟動呼吸與循環反應：
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {[
                { title: '呼吸頻率增加', desc: '深度與頻率均上升以吸入更多氧氣', icon: 'lungs' },
                { title: '心跳加快', desc: '心搏輸出量提升以加速血液輸送', icon: 'heart' },
                { title: '疲勞感提前出現', desc: '同等運動強度下能量消耗與乳酸累積加速', icon: 'battery' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#0b0f14] border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-sky-400 font-semibold mb-1 block">徵候 0{idx + 1}</span>
                    <p className="text-sm font-bold text-slate-200">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline SVG: Low Oxygen / Partial Pressure Gradient */}
            <div className="mt-4 p-4 rounded-lg bg-[#0b0f14] border border-slate-800/80">
              <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                <span>低氧環境與氧分子密度示意</span>
                <span className="text-[11px] font-mono text-slate-400">教材圖表 14-2A</span>
              </div>
              <svg
                viewBox="0 0 680 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto text-slate-300 select-none"
                aria-label="海平面與高海拔空氣中氧氣分子分壓對比"
              >
                {/* Left: Sea Level */}
                <rect x="20" y="20" width="300" height="96" rx="6" fill="#111827" stroke="#1e293b" />
                <text x="36" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">海平面 (0 公尺)</text>
                <text x="36" y="60" fill="#94a3b8" fontSize="10">大氣壓力 760 mmHg · 氧分壓 100%</text>
                {/* Molecules dense */}
                {[
                  [200, 42], [220, 50], [240, 38], [260, 48], [280, 42],
                  [190, 65], [210, 75], [230, 68], [250, 78], [270, 70], [290, 65],
                  [200, 92], [220, 88], [240, 95], [260, 89], [280, 92]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="#38bdf8" />
                ))}
                <text x="36" y="94" fill="#e2e8f0" fontSize="11">分子密集，每次呼吸獲得足量氧氣</text>

                {/* Right: High Altitude */}
                <rect x="360" y="20" width="300" height="96" rx="6" fill="#18181b" stroke="#3f3f46" />
                <text x="376" y="44" fill="#f59e0b" fontSize="12" fontWeight="bold">高海拔 (3500+ 公尺)</text>
                <text x="376" y="60" fill="#a1a1aa" fontSize="10">大氣壓力低 · 氧分壓約僅 60~65%</text>
                {/* Molecules sparse */}
                {[
                  [540, 45], [580, 42], [620, 50],
                  [530, 75], [570, 68], [610, 78],
                  [550, 95], [590, 90]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="#f59e0b" />
                ))}
                <text x="376" y="94" fill="#fef3c7" fontSize="11">分子稀疏，肺泡氣體交換驅動力顯著降低</text>
              </svg>
            </div>
          </div>

          {/* Part 2: 人體的適應反應 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400 font-bold text-sm">
                二
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                人體的適應反應
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              健康的身體進入高海拔後，會自動啟動一連串生理代償機制，以彌補低氧環境帶來的衝擊：
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-[#0b0f14] border border-slate-800/90 flex items-start gap-3.5">
                <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                  機制 1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">呼吸調節：換氣量增加</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    頸動脈體化學受器感應到動脈血氧下降，大腦呼吸中樞加速刺激肺部通氣，增加整體換氣量以提升肺泡內氧分壓。
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0b0f14] border border-slate-800/90 flex items-start gap-3.5">
                <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                  機制 2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">心血管調整：血流重新分配</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    交感神經活性提升，增加心搏輸出量與心率，同時血管適度收縮，優先維持大腦與核心重要器官的血液灌流。
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0b0f14] border border-slate-800/90 flex items-start gap-3.5">
                <span className="px-2.5 py-1 rounded bg-sky-950 text-sky-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                  機制 3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">血液攜氧能力改變</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    初期透過水分排出濃縮紅血球，數日後促紅血球生成素（EPO）刺激骨髓製造更多紅血球，提升血液運氧能力。
                  </p>
                </div>
              </div>
            </div>

            {/* Inline SVG: Human Body Adaptation Mechanism */}
            <div className="mt-4 p-4 rounded-lg bg-[#0b0f14] border border-slate-800/80">
              <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                <span>人體三大代償生理連鎖反應</span>
                <span className="text-[11px] font-mono text-slate-400">教材圖表 14-2B</span>
              </div>
              <svg
                viewBox="0 0 680 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto select-none"
                aria-label="三大生理代償機制相互配合以維持細胞供氧"
              >
                {/* Box 1 */}
                <rect x="20" y="25" width="180" height="75" rx="8" fill="#111827" stroke="#0284c7" strokeWidth="1.5" />
                <text x="110" y="52" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">呼吸調節</text>
                <text x="110" y="72" fill="#cbd5e1" fontSize="11" textAnchor="middle">深度與換氣量增加 ↑</text>

                {/* Arrow */}
                <path d="M210 62 L240 62" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="240,58 248,62 240,66" fill="#38bdf8" />

                {/* Box 2 */}
                <rect x="250" y="25" width="180" height="75" rx="8" fill="#111827" stroke="#0284c7" strokeWidth="1.5" />
                <text x="340" y="52" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">心血管調整</text>
                <text x="340" y="72" fill="#cbd5e1" fontSize="11" textAnchor="middle">心率增加 · 血流重分配</text>

                {/* Arrow */}
                <path d="M440 62 L470 62" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="470,58 478,62 470,66" fill="#38bdf8" />

                {/* Box 3 */}
                <rect x="480" y="25" width="180" height="75" rx="8" fill="#111827" stroke="#0284c7" strokeWidth="1.5" />
                <text x="570" y="52" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">攜氧能力改變</text>
                <text x="570" y="72" fill="#cbd5e1" fontSize="11" textAnchor="middle">紅血球調節與運送優化</text>
              </svg>
            </div>
          </div>

          {/* Part 3: 個體差異 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400 font-bold text-sm">
                三
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                個體差異
              </h3>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/60 space-y-2.5">
              <p className="text-slate-200 text-sm sm:text-base font-semibold">
                高山症的發生與年齡、體能、經驗沒有絕對關係。
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                每個人的適應能力不同。同一個人在不同時間，也可能出現不同反應。
              </p>
            </div>

            {/* Inline SVG: Individual Variations Matrix */}
            <div className="p-4 rounded-lg bg-[#0b0f14] border border-slate-800/80">
              <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                <span>適應能力非線性與個體差異矩陣</span>
                <span className="text-[11px] font-mono text-slate-400">教材圖表 14-2C</span>
              </div>

              <svg
                viewBox="0 0 680 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto select-none"
                aria-label="體能經驗年齡均不等於高山適應能力"
              >
                <g transform="translate(10, 15)">
                  <rect width="200" height="85" rx="6" fill="#1e1e24" stroke="#334155" />
                  <text x="100" y="38" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">體能優秀 ≠ 免疫</text>
                  <text x="100" y="60" fill="#94a3b8" fontSize="10" textAnchor="middle">馬拉松選手或運動健將</text>
                  <text x="100" y="74" fill="#cbd5e1" fontSize="10" textAnchor="middle">仍具相同機率發生高山症</text>
                </g>

                <g transform="translate(240, 15)">
                  <rect width="200" height="85" rx="6" fill="#1e1e24" stroke="#334155" />
                  <text x="100" y="38" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">經驗豐富 ≠ 保證</text>
                  <text x="100" y="60" fill="#94a3b8" fontSize="10" textAnchor="middle">過去登頂無症狀者</text>
                  <text x="100" y="74" fill="#cbd5e1" fontSize="10" textAnchor="middle">本次上升過快仍可能發病</text>
                </g>

                <g transform="translate(470, 15)">
                  <rect width="200" height="85" rx="6" fill="#082f49" stroke="#0284c7" />
                  <text x="100" y="38" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">唯一關鍵：適應時間</text>
                  <text x="100" y="60" fill="#bae6fd" fontSize="10" textAnchor="middle">生理代償需要充足時間</text>
                  <text x="100" y="74" fill="#7dd3fc" fontSize="10" textAnchor="middle">循序上升是唯一科學防線</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
