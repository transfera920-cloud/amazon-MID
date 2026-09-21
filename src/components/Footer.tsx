import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080c12] border-t border-slate-800/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center items-center">
        {/* Brand centered */}
        <a
          href="https://amazon-hike.com/"
          className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-2 transition-all hover:bg-slate-900/50"
          aria-label="亞馬遜國家山岳協會"
        >
          <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-600/70 flex items-center justify-center text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-900/50 transition-colors shadow-sm">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 20h18L12 4 3 20z" />
              <path d="M12 12v4m-2-2h4" />
            </svg>
          </div>
          <p className="text-base sm:text-lg font-black text-white group-hover:text-sky-300 tracking-wide transition-colors">
            亞馬遜國家山岳協會
          </p>
        </a>
      </div>
    </footer>
  );
};
