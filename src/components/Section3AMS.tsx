import React from 'react';

export const Section3AMS: React.FC = () => {
  const amsSymptoms = [
    { name: '頭痛', desc: '通常為兩側搏動性或鈍痛，運動、彎腰或晃頭時可能加劇', code: 'AMS-01' },
    { name: '噁心', desc: '胃部翻騰、嘔吐感，伴隨強烈不適感', code: 'AMS-02' },
    { name: '食慾下降', desc: '即使平時食量良好，抵達高海拔營地後無進食慾望', code: 'AMS-03' },
    { name: '頭暈', desc: '站立、行走或變換姿勢時感到飄浮或不穩', code: 'AMS-04' },
    { name: '疲倦', desc: '異常虛弱與無力感，遠超一般步程體能消耗', code: 'AMS-05' },
    { name: '睡眠品質下降', desc: '夜間難以入睡、淺眠多夢，或因週期性呼吸頻繁驚醒', code: 'AMS-06' },
  ];

  return (
    <section
      id="sec-3"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-3"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 03
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            CLINICAL RECOGNITION
          </span>
        </div>

        <h2
          id="heading-sec-3"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          急性高山症 AMS
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
          急性高山症（Acute Mountain Sickness）是常見的高山疾病，通常出現在快速上升到高海拔後的數小時到一日內。
        </p>

        {/* Symptoms Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-slate-200">
              常見臨床徵候辨識（六大早期指標）
            </h3>
            <span className="text-xs text-slate-400">※ 用於提高警覺，非自行診斷</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {amsSymptoms.map((sym) => (
              <div
                key={sym.code}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-semibold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                      {sym.code}
                    </span>
                    {/* Circle exclamation icon */}
                    <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{sym.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{sym.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Warning Box: 輕微不代表安全 */}
        <div className="p-6 rounded-xl bg-amber-950/40 border-2 border-amber-600/70 mb-8 space-y-4 shadow-lg shadow-amber-950/20">
          <div className="flex items-center gap-3">
            {/* Warning Shield SVG */}
            <div className="w-10 h-10 rounded-lg bg-amber-900/60 border border-amber-700 flex items-center justify-center text-amber-300 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                CRITICAL WARNING
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-amber-100">
                核心觀念：輕微不代表安全
              </h3>
            </div>
          </div>

          <div className="space-y-2.5 text-sm sm:text-base text-amber-100/90 leading-relaxed pl-1">
            <p className="font-semibold text-amber-200">
              出現症狀後，不要再增加睡眠高度。
            </p>
            <p className="text-slate-300 text-sm">
              休息、補水與持續觀察是基本措施，但不等於治療。
            </p>
            <p className="text-slate-300 text-sm">
              症狀持續或惡化時，應重新評估行程並降低高度。
            </p>
            <p className="font-semibold text-rose-300 text-sm">
              出現嚴重症狀時，需要緊急處置並尋求專業醫療協助。
            </p>
          </div>
        </div>

        {/* Inline SVG: AMS Observation Flow */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              AMS 症狀動態觀察與應變流程
            </span>
            <span className="text-[11px] font-mono text-slate-400">教材圖表 14-3</span>
          </div>

          <svg
            viewBox="0 0 720 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none"
            aria-label="急性高山症出現症狀後的行動決策流程"
          >
            {/* Stage 1: Symptom */}
            <rect x="10" y="30" width="150" height="110" rx="8" fill="#18181b" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="85" y="60" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="middle">出現疑似 AMS</text>
            <text x="85" y="80" fill="#e2e8f0" fontSize="10" textAnchor="middle">頭痛/噁心/食慾低</text>
            <text x="85" y="105" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">絕對不可再上升</text>
            <text x="85" y="120" fill="#cbd5e1" fontSize="9" textAnchor="middle">維持或降低睡眠高度</text>

            {/* Arrow 1 */}
            <path d="M165 85 L205 85" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="205,81 213,85 205,89" fill="#f59e0b" />

            {/* Stage 2: Action */}
            <rect x="220" y="30" width="160" height="110" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <text x="300" y="60" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">基本處置</text>
            <text x="300" y="80" fill="#e2e8f0" fontSize="10" textAnchor="middle">原地充分休息</text>
            <text x="300" y="98" fill="#e2e8f0" fontSize="10" textAnchor="middle">規律補水與保暖</text>
            <text x="300" y="120" fill="#7dd3fc" fontSize="9" textAnchor="middle">密切監控每 2~4 小時變化</text>

            {/* Fork arrows */}
            <path d="M385 70 L425 50" stroke="#10b981" strokeWidth="2" />
            <polygon points="425,46 433,49 426,54" fill="#10b981" />

            <path d="M385 100 L425 120" stroke="#ef4444" strokeWidth="2" />
            <polygon points="426,116 433,121 425,124" fill="#ef4444" />

            {/* Branch A: Improved */}
            <rect x="440" y="15" width="260" height="65" rx="6" fill="#064e3b" stroke="#059669" />
            <text x="455" y="38" fill="#6ee7b7" fontSize="12" fontWeight="bold">若症狀完全緩解：</text>
            <text x="455" y="58" fill="#ecfdf5" fontSize="10">可保守考慮依適應速度維持或極緩慢上升</text>

            {/* Branch B: Unchanged or Worsened */}
            <rect x="440" y="95" width="260" height="70" rx="6" fill="#450a0a" stroke="#dc2626" />
            <text x="455" y="118" fill="#fca5a5" fontSize="12" fontWeight="bold">若症狀持續或加劇：</text>
            <text x="455" y="136" fill="#fef2f2" fontSize="10" fontWeight="bold">必須果斷降低高度 (至少 500~1000m)</text>
            <text x="455" y="152" fill="#fecaca" fontSize="9">若出現呼吸神經惡化，立即啟動緊急醫療後送</text>
          </svg>
        </div>
      </div>
    </section>
  );
};
