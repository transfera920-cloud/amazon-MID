import React from 'react';

export const MedicalDisclaimer: React.FC = () => {
  return (
    <aside
      id="medical-disclaimer"
      className="py-12 sm:py-16 bg-[#111622] border-b border-slate-800 scroll-mt-20"
      aria-labelledby="heading-disclaimer"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border-2 border-amber-600/70 space-y-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/70 flex items-center justify-center text-amber-300 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                IMPORTANT MEDICAL NOTICE
              </span>
              <h2 id="heading-disclaimer" className="text-xl sm:text-2xl font-black text-white">
                醫療安全聲明
              </h2>
            </div>
          </div>

          {/* Core Disclaimer Statements */}
          <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
            <p className="font-semibold text-slate-100">
              本網站內容僅供登山安全教育與學習參考。
            </p>
            <p className="text-slate-300">
              本網站不是醫療機構，不提供醫療診斷、線上問診或個人化治療建議。網站內整理之症狀與生理機轉，旨在協助登山者建立高海拔環境警覺與風險管理意識，不能作為取代合格醫師臨床診斷或專業醫療指導之依據。
            </p>
            <p className="font-bold text-rose-300">
              高山疾病可能迅速惡化並危及生命。
            </p>
            <p className="text-slate-300">
              若在登山過程中有任何身體不適，請立即停止上升、評估下降，並在可行範圍內儘速就醫或尋求專業高山醫療團隊協助。
            </p>
          </div>

          {/* Institutional Badge */}
          <div className="pt-2 flex items-center gap-3 text-xs text-slate-400 border-t border-slate-800">
            <span className="font-mono text-sky-400 font-bold">亞馬遜國家山岳協會</span>
            <span>·</span>
            <span>登山安全教育委員會 編審</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
