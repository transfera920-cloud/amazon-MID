import React from 'react';

export const KeyTakeaways: React.FC = () => {
  const fiveKeyTakeaways = [
    {
      id: 1,
      title: '高海拔環境的根本挑戰是低氧',
      desc: '高度上升伴隨大氣壓力急降，氧氣分壓降低是引發所有高海拔病理生理反應的根本源頭。',
    },
    {
      id: 2,
      title: '身體適應需要時間',
      desc: '體能、年齡與意志力皆無法取代代償所需的時間，循序上升與合理控制每日爬升高度是唯一科學防線。',
    },
    {
      id: 3,
      title: '出現症狀時，不再增加高度',
      desc: '任何輕度急性高山症（AMS）出現時，嚴格遵守「不再增加睡眠高度」鐵律，給予充分時間觀察。',
    },
    {
      id: 4,
      title: '嚴重症狀應立即下降並尋求醫療協助',
      desc: 'HAPE（呼吸困難/咳泡沫痰）與 HACE（意識改變/行走不穩）絕無觀察等待餘地，爭分奪秒立即下降。',
    },
    {
      id: 5,
      title: '良好的登山不是克服症狀，而是懂得何時調整計畫',
      desc: '調整計畫、果斷下撤是頂尖登山者的成熟判斷；唯有安全返回登山口，才是真正完成登山。',
    },
  ];

  return (
    <section
      id="takeaways"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-takeaways"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            SUMMARY & ACTION GUIDE
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            CHAPTER 14 CORE ESSENTIALS
          </span>
        </div>

        <h2
          id="heading-takeaways"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          本章重點整理
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          登山者應隨時銘記於心的高山醫學五大基本法則與現場即時行動檢核清單。
        </p>

        {/* 5 Core Bullet Points */}
        <div className="space-y-4 mb-10">
          {fiveKeyTakeaways.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-start gap-4 hover:border-sky-700/60 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 font-mono font-black text-sm shrink-0 mt-0.5">
                {item.id}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Checklist Box */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0e1726] to-slate-900 border-2 border-sky-500/70 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <h3 className="text-lg sm:text-xl font-bold text-white">現場三秒行動檢核清單（Field Triage Checklist）</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
            <div className="p-3.5 rounded-lg bg-black/40 border border-slate-700/80 space-y-1">
              <span className="text-sky-400 font-bold block">1. 查自覺症狀</span>
              <p className="text-slate-300 text-xs leading-relaxed">是否有頭痛、食慾喪失、噁心或異常疲憊？</p>
            </div>
            <div className="p-3.5 rounded-lg bg-black/40 border border-slate-700/80 space-y-1">
              <span className="text-amber-400 font-bold block">2. 查呼吸與臉色</span>
              <p className="text-slate-300 text-xs leading-relaxed">靜止時是否喘氣、胸悶、唇色發紫或咳嗽？</p>
            </div>
            <div className="p-3.5 rounded-lg bg-black/40 border border-slate-700/80 space-y-1">
              <span className="text-rose-400 font-bold block">3. 查步態與神智</span>
              <p className="text-slate-300 text-xs leading-relaxed">能否直線步行不搖晃？意識清楚能正確應答？</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
