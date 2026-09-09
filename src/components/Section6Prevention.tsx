import React from 'react';

export const Section6Prevention: React.FC = () => {
  const preventionPillars = [
    {
      num: '01',
      title: '循序上升',
      highlight: '給身體時間適應',
      details: '避免一日內爬升過多海拔。建議在抵達 3000 公尺以上後，每日睡眠高度增加幅度保持平緩（建議每日睡眠高度增加不宜過急），並安排適應日。',
    },
    {
      num: '02',
      title: '避免快速進入高海拔',
      highlight: '不搭車輛或直升機直上',
      details: '不搭直升機或車輛突然抵達過高地點後立即進行高強度劇烈活動。若因交通工具快速抵達高地，首日應大幅降低體能輸出，以靜態休養為主。',
    },
    {
      num: '03',
      title: '休息與補水',
      highlight: '身體適應之基礎條件',
      details: '充足睡眠、規律補水，是身體適應的基礎條件。高海拔空氣乾燥且呼吸加快，水分流失倍增，應頻繁補充溫水與電解質，避免酒精與鎮定劑抑制呼吸。',
    },
    {
      num: '04',
      title: '觀察自身狀況',
      highlight: '傾聽身體給予的訊號',
      details: '頭痛、食慾、睡眠品質，都是身體給的訊號。每日晨間、紮營與就寢前進行自我檢視，任何細微異常皆應主動記錄並告知夥伴。',
    },
  ];

  return (
    <section
      id="sec-6"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-sec-6"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SECTION 06
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            PREVENTION STRATEGY
          </span>
        </div>

        <h2
          id="heading-sec-6"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          高山症預防方法
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          預防高山症最有效的方式不是依靠藥物，而是順應人體生理適應的自然節奏，透過科學的行程規劃與作息維持。
        </p>

        {/* 4 Prevention Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {preventionPillars.map((p) => (
            <div
              key={p.num}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                    原則 {p.num}
                  </span>
                  <span className="text-xs text-sky-300/80 font-medium">{p.highlight}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{p.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Concept Banner: 不隱瞞、不勉強 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/50 border-2 border-sky-500/70 space-y-4 shadow-xl mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-900/60 border border-sky-600 flex items-center justify-center text-sky-300 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 tracking-wider uppercase">
                FIRST LINE OF DEFENSE · 第一道防線
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                核心觀念：不隱瞞、不勉強
              </h3>
            </div>
          </div>

          <div className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed pl-1">
            <p className="font-semibold text-sky-200">
              不要為了完成行程隱瞞症狀。
            </p>
            <p className="text-slate-300">
              誠實回報自己的身體狀況，是隊伍安全的第一道防線。在極端高山環境中，隱瞞微小症狀往往是演變成致命重症的最主要源頭。
            </p>
          </div>
        </div>

        {/* Inline SVG: Prevention 4 Pillars & Honest Reporting Flow */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#0e141c] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              預防體系與安全溝通模型
            </span>
            <span className="text-[11px] font-mono text-slate-400">教材圖表 14-6</span>
          </div>

          <svg
            viewBox="0 0 720 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none"
            aria-label="預防高山症之四大支柱與誠實通報防線"
          >
            {/* 4 Pillars Box */}
            <g transform="translate(15, 20)">
              <rect width="140" height="115" rx="6" fill="#111827" stroke="#334155" />
              <text x="70" y="36" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">01 循序上升</text>
              <text x="70" y="58" fill="#94a3b8" fontSize="10" textAnchor="middle">給予代償時間</text>
              <text x="70" y="76" fill="#cbd5e1" fontSize="10" textAnchor="middle">控制每日睡眠高差</text>
              <text x="70" y="96" fill="#94a3b8" fontSize="9" textAnchor="middle">適時規劃適應天</text>
            </g>

            <g transform="translate(170, 20)">
              <rect width="140" height="115" rx="6" fill="#111827" stroke="#334155" />
              <text x="70" y="36" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">02 避免驟升</text>
              <text x="70" y="58" fill="#94a3b8" fontSize="10" textAnchor="middle">不搭機車直達</text>
              <text x="70" y="76" fill="#cbd5e1" fontSize="10" textAnchor="middle">抵達高地降速活動</text>
              <text x="70" y="96" fill="#94a3b8" fontSize="9" textAnchor="middle">靜態休息優先</text>
            </g>

            <g transform="translate(325, 20)">
              <rect width="140" height="115" rx="6" fill="#111827" stroke="#334155" />
              <text x="70" y="36" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">03 休息補水</text>
              <text x="70" y="58" fill="#94a3b8" fontSize="10" textAnchor="middle">深度充足睡眠</text>
              <text x="70" y="76" fill="#cbd5e1" fontSize="10" textAnchor="middle">規律充足水分補充</text>
              <text x="70" y="96" fill="#94a3b8" fontSize="9" textAnchor="middle">禁酒與中樞抑制劑</text>
            </g>

            {/* Core Shield Box */}
            <g transform="translate(480, 15)">
              <rect width="225" height="125" rx="8" fill="#082f49" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="112" cy="40" r="16" fill="#0284c7" />
              <path d="M106 40 L110 44 L118 36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="112" y="76" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">安全防線：主動回報</text>
              <text x="112" y="96" fill="#bae6fd" fontSize="11" textAnchor="middle">「不隱瞞、不勉強」</text>
              <text x="112" y="116" fill="#7dd3fc" fontSize="10" textAnchor="middle">全隊夥伴共享生理資訊</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
