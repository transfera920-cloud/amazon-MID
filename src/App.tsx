import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { Section1MedicineIntro } from './components/Section1MedicineIntro';
import { Section2AltitudeEnvironment } from './components/Section2AltitudeEnvironment';
import { Section3AMS } from './components/Section3AMS';
import { Section4HAPE } from './components/Section4HAPE';
import { Section5HACE } from './components/Section5HACE';
import { Section6Prevention } from './components/Section6Prevention';
import { Section7CommonIssues } from './components/Section7CommonIssues';
import { Section8DecisionMaking } from './components/Section8DecisionMaking';
import { Section9TeamManagement } from './components/Section9TeamManagement';
import { Section10Misconceptions } from './components/Section10Misconceptions';
import { CurriculumRelations } from './components/CurriculumRelations';
import { KeyTakeaways } from './components/KeyTakeaways';
import { MedicalDisclaimer } from './components/MedicalDisclaimer';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100 flex flex-col font-sans antialiased selection:bg-sky-500 selection:text-slate-950">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-400 focus:text-slate-950 focus:font-bold focus:rounded-md focus:shadow-xl"
      >
        跳至主要教材內容
      </a>

      {/* Global Reading Header */}
      <Header />

      {/* Hero Section with the only H1 */}
      <Hero />

      {/* Chapter 14 Section Table of Contents Grid */}
      <TableOfContents />

      {/* Main Educational Textbook Content */}
      <main id="main-content" className="flex-1">
        {/* 01 什麼是高山醫學 */}
        <Section1MedicineIntro />

        {/* 02 高海拔環境對人體的影響 */}
        <Section2AltitudeEnvironment />

        {/* 03 急性高山症 AMS */}
        <Section3AMS />

        {/* 04 高山肺水腫 HAPE */}
        <Section4HAPE />

        {/* 05 高山腦水腫 HACE */}
        <Section5HACE />

        {/* 06 高山症預防方法 */}
        <Section6Prevention />

        {/* 07 高山環境常見健康問題 */}
        <Section7CommonIssues />

        {/* 08 高山醫學與登山決策 */}
        <Section8DecisionMaking />

        {/* 09 隊伍中的高山醫學管理 */}
        <Section9TeamManagement />

        {/* 10 常見錯誤觀念 */}
        <Section10Misconceptions />

        {/* 本章在教材中的位置 */}
        <CurriculumRelations />

        {/* 本章重點整理 */}
        <KeyTakeaways />
      </main>

      {/* 醫療安全聲明 */}
      <MedicalDisclaimer />

      {/* 頁尾 */}
      <Footer />

      {/* 回到頂端按鈕 */}
      <BackToTop />
    </div>
  );
}
