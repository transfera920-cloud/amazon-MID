import React from 'react';

export const CurriculumRelations: React.FC = () => {
  const curriculumChapters = [
    {
      num: '第 7 章',
      title: '體能與技巧',
      role: '提升登山能力',
      desc: '基礎體能訓練、步態技巧、背負適應與有氧耐力儲備。',
      isCurrent: false,
    },
    {
      num: '第 9 章',
      title: '登山風險管理',
      role: '預防事故發生',
      desc: '天候判讀、路線評估、裝備檢查與團隊風險決策架構。',
      isCurrent: false,
    },
    {
      num: '第 10 章',
      title: '求援與應變',
      role: '啟動外部救援',
      desc: '通訊設備操作、留守人機制、座標通報與搜救直升機引導。',
      isCurrent: false,
    },
    {
      num: '第 11 章',
      title: '緊急應變與野外求生',
      role: '事故後維持生命',
      desc: '野外迫降過夜、失溫緊急防護、水源獲取與外傷急救處置。',
      isCurrent: false,
    },
    {
      num: '第 14 章',
      title: '高山醫學',
      role: '高海拔環境造成的人體疾病與處置',
      desc: '低氧生理代償、AMS/HAPE/HACE 臨床辨識、停止上升與果斷下降決策。',
      isCurrent: true,
    },
  ];

  return (
    <section
      id="relations"
      className="py-12 sm:py-16 border-b border-slate-800/80 scroll-mt-20"
      aria-labelledby="heading-relations"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/70 border border-sky-800/50 px-2.5 py-1 rounded">
            CURRICULUM MAPPING
          </span>
          <span className="text-xs text-slate-400 font-mono tracking-wide">
            ASSOCIATION SYSTEM ARCHITECTURE
          </span>
        </div>

        <h2
          id="heading-relations"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4"
        >
          本章在教材中的位置
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
          亞馬遜國家山岳協會登山教育教材是一套完整的安全防護體系。高山醫學與其他核心章節緊密串聯，共同構築登山者的安全基石。
        </p>

        {/* Chapters Linear Continuum Grid */}
        <div className="space-y-3.5 mb-8">
          {curriculumChapters.map((chap) => {
            if (chap.isCurrent) {
              return (
                <div
                  key={chap.num}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-sky-950/60 border-2 border-sky-400 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-sky-500 text-slate-950 text-xs font-mono font-black">
                        {chap.num} · 當前研讀中
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white">{chap.title}</h3>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-sky-300 bg-sky-900/60 px-3 py-1 rounded-full border border-sky-600/70 self-start sm:self-auto">
                      → {chap.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed mt-2">
                    {chap.desc}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={chap.num}
                className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {chap.num}
                    </span>
                    <h3 className="text-base font-bold text-slate-200">{chap.title}</h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    → {chap.role}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {chap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
