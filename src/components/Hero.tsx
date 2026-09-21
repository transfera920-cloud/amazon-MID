import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-[#0b0f14] via-[#0f1722] to-[#0b0f14] border-b border-slate-800/80 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Topo & Contour Mountain Lines SVG (pure decorative vector contour) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <path
            d="M0 480C200 450 380 520 580 470C780 420 900 500 1100 460C1300 420 1380 450 1440 430V600H0V480Z"
            fill="#1e293b"
            fillOpacity="0.4"
          />
          <path
            d="M-50 360C180 320 340 400 550 340C760 280 920 390 1140 330C1360 270 1420 310 1500 290"
            stroke="#334155"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M-50 280C220 220 420 310 650 240C880 170 1020 290 1250 210C1390 160 1450 190 1500 180"
            stroke="#1e3a5f"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Typography & Right Educational Altitude Profile SVG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <h1
                id="hero-title"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                高山症與高山醫學
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                了解高海拔環境對人體的影響，學習預防、辨識與處理高山相關疾病。
              </p>
            </div>

            {/* Core Tags */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                核心學習領域
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { tag: '登山安全教育', color: 'border-slate-700 bg-slate-900/90 text-slate-200' },
                  { tag: '高海拔生理', color: 'border-sky-800/60 bg-sky-950/40 text-sky-300' },
                  { tag: '臨床辨識', color: 'border-amber-800/60 bg-amber-950/40 text-amber-300' },
                  { tag: '撤退決策', color: 'border-rose-800/60 bg-rose-950/40 text-rose-300' },
                ].map((item) => (
                  <span
                    key={item.tag}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${item.color}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Crucial Position Statement Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2.5 shadow-lg">
              <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
                <svg className="w-4 h-4 text-sky-400 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>教材定位與安全核心原則</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                本教材旨在建立登山者對高海拔環境、高山症與相關疾病的基本認知，建立關鍵處置思維：
              </p>
              {/* Process Ribbon */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium pt-1">
                <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">辨識徵候</span>
                <span className="text-slate-500">→</span>
                <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">客觀評估</span>
                <span className="text-slate-500">→</span>
                <span className="px-2 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-200">停止上升</span>
                <span className="text-slate-500">→</span>
                <span className="px-2 py-1 rounded bg-sky-950/60 border border-sky-800 text-sky-200 font-bold">降低高度</span>
                <span className="text-slate-500">→</span>
                <span className="px-2 py-1 rounded bg-rose-950/60 border border-rose-800 text-rose-200">尋求醫療協助</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                ※ 本站為登山教育教材，非醫療診斷工具、非線上問診平台。絕不應以個人意志力取代生理警訊。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#sec-1"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <span>開始研讀第一章節</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="#toc"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-medium text-sm transition focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                {/* TOC icon SVG */}
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 6h12M4 10h12M4 14h7" strokeLinecap="round" />
                </svg>
                <span>瀏覽章節目錄 (01 ~ 10)</span>
              </a>
            </div>
          </div>

          {/* Right Educational Graphic: High-altitude Atmospheric Profile Diagram (Inline SVG) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#111827] to-[#0d131c] border border-slate-700/80 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-slate-200 tracking-wide">
                    高海拔大氣高度與氧氣分壓剖面
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  教材圖表 14-A
                </span>
              </div>

              {/* Custom High Altitude Elevation Profile SVG */}
              <div className="w-full flex justify-center">
                <svg
                  viewBox="0 0 420 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[420px] h-auto text-slate-300 select-none"
                  aria-label="海拔高度與有效氧分壓對比圖表：海平面至極限高海拔"
                >
                  <defs>
                    {/* Mountain Gradient */}
                    <linearGradient id="heroMtGrad" x1="210" y1="50" x2="210" y2="300" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                      <stop offset="60%" stopColor="#1e293b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0b0f14" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="heroRidge" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7dd3fc" />
                      <stop offset="100%" stopColor="#1e3a5f" />
                    </linearGradient>
                  </defs>

                  {/* Left Axis: Altitude (m) */}
                  <line x1="60" y1="40" x2="60" y2="300" stroke="#334155" strokeWidth="1.5" />
                  
                  {/* Grid lines across */}
                  <line x1="60" y1="60" x2="400" y2="60" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="60" y1="120" x2="400" y2="120" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="60" y1="180" x2="400" y2="180" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="60" y1="240" x2="400" y2="240" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="60" y1="300" x2="400" y2="300" stroke="#334155" strokeWidth="1.5" />

                  {/* Mountain silhouette */}
                  <path
                    d="M70 300 L160 220 L210 160 L280 90 L320 60 L360 140 L400 300 Z"
                    fill="url(#heroMtGrad)"
                    stroke="url(#heroRidge)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Snowcap on top */}
                  <path
                    d="M295 77 L320 60 L335 88 L324 95 L312 85 L302 92 Z"
                    fill="#e0f2fe"
                    fillOpacity="0.9"
                  />

                  {/* Oxygen pressure curve (declining with altitude) */}
                  <path
                    d="M100 300 C 130 250, 180 180, 240 120 C 270 90, 310 65, 340 50"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />

                  {/* Altitude Marker 5500m (Extreme Altitude) */}
                  <circle cx="60" cy="60" r="3" fill="#ef4444" />
                  <text x="52" y="64" fill="#f87171" fontSize="10" fontFamily="monospace" textAnchor="end">5500m</text>
                  <rect x="230" y="48" width="165" height="24" rx="4" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
                  <text x="238" y="64" fill="#fca5a5" fontSize="10" fontWeight="bold">極限高海拔 · 氧分壓 &lt;50%</text>

                  {/* Altitude Marker 3500m (Very High Altitude) */}
                  <circle cx="60" cy="120" r="3" fill="#f59e0b" />
                  <text x="52" y="124" fill="#fbbf24" fontSize="10" fontFamily="monospace" textAnchor="end">3500m</text>
                  <rect x="210" y="108" width="185" height="24" rx="4" fill="#451a03" stroke="#b45309" strokeWidth="1" />
                  <text x="218" y="124" fill="#fde68a" fontSize="10" fontWeight="bold">超高海拔 · 嚴重低氧 / 氧分壓 ~65%</text>

                  {/* Altitude Marker 2500m (High Altitude threshold) */}
                  <circle cx="60" cy="180" r="3" fill="#38bdf8" />
                  <text x="52" y="184" fill="#7dd3fc" fontSize="10" fontFamily="monospace" textAnchor="end">2500m</text>
                  <rect x="180" y="168" width="215" height="24" rx="4" fill="#082f49" stroke="#0369a1" strokeWidth="1" />
                  <text x="188" y="184" fill="#bae6fd" fontSize="10" fontWeight="bold">高海拔起點 · AMS好發門檻 / ~74%</text>

                  {/* Altitude Marker 1500m */}
                  <circle cx="60" cy="240" r="3" fill="#94a3b8" />
                  <text x="52" y="244" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="end">1500m</text>
                  <text x="170" y="244" fill="#cbd5e1" fontSize="10">中低海拔 · 生理代償開始微幅啟動</text>

                  {/* Sea level 0m */}
                  <circle cx="60" cy="300" r="3" fill="#64748b" />
                  <text x="52" y="304" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="end">0m</text>
                  <text x="70" y="318" fill="#94a3b8" fontSize="10">海平面基準 (大氣壓 760 mmHg · 氧分壓 100%)</text>

                  {/* Legend box */}
                  <rect x="70" y="260" width="85" height="32" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <line x1="78" y1="272" x2="98" y2="272" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="104" y="275" fill="#f87171" fontSize="9">氧分壓遞減</text>
                  <line x1="78" y1="284" x2="98" y2="284" stroke="#38bdf8" strokeWidth="2" />
                  <text x="104" y="287" fill="#7dd3fc" fontSize="9">山形高程</text>
                </svg>
              </div>

              {/* Bottom explanatory note */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>重點：空氣中氧氣比例約 21% 不變，但大氣總壓與「氧氣分壓」隨高度驟降。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
