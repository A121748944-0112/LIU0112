import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="py-24 px-6 text-center bg-white border-b relative overflow-hidden">
        {/* 背景光暈美編 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* 名字改回穩重的純深色 */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            劉芊妤 LIU CHIEN YU
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            國立中山大學企業管理研究所 | <span className="font-semibold text-blue-800">SEO 關鍵字行銷、數據分析、專案管理</span>
          </p>

          {/* 專業圖示卡片 */}
          <div className="mt-10 flex justify-center gap-4 text-sm flex-wrap">
            {[
              { text: "行銷管理學程", icon: "🏆" },
              { text: "商業大數據分析微學程", icon: "📊" },
              { text: "多益 795 分", icon: "🌐" },
              { text: "Google 數位行銷認證", icon: "🎓" },
            ].map(item => (
              <span key={item.text} className="bg-white px-5 py-2.5 rounded-full text-slate-700 shadow-sm border border-slate-100 flex items-center gap-2 hover:shadow-md transition">
                <span className="text-lg">{item.icon}</span> {item.text}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6 space-y-16">

        {/* 區塊一：SEO 文章作品集 (文字置中大氣排版) */}
        <section className="bg-white p-12 md:p-16 rounded-3xl border border-blue-100 shadow-sm overflow-hidden text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">SEO SERP</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-6 tracking-tight">SEO 文章作品集</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              透過關鍵字優化與商業 SEO 文章撰寫，替品牌吸引流量及提供曝光率。
            </p>
            <Link href="/seo-projects" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 text-lg">
              進入文章作品集 →
            </Link>
          </div>
        </section>

        {/* 區塊二：數據分析特色區塊 (白色背景 + 互動小卡) */}
        <section className="bg-white p-10 md:p-14 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Data Analytics</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">數據分析專案作品集</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                運用 <span className="font-semibold text-blue-800">R 語言</span> 及 <span className="font-semibold text-blue-800"> EXCEL 樞紐分析</span> 將複雜資料轉化為直觀圖表，協助企業提出改善方案。
              </p>
              <Link href="/data-analysis" className="inline-block bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition shadow-lg">
                查看專案作品集 →
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-blue-50 p-6 rounded-2xl text-center border border-blue-100 hover:border-blue-300 transition group">
                <div className="text-4xl mb-3">📈</div>
                <div className="text-blue-800 font-bold text-xl mb-1 group-hover:text-blue-900">商業數據分析</div>
                <div className="text-xs text-blue-600/80">電商平台合作、產業分析、員工培訓資料</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-100 hover:border-green-300 transition group">
                <div className="text-4xl mb-3">🏅</div>
                <div className="text-green-800 font-bold text-xl mb-1 group-hover:text-green-900">商業競賽經歷</div>
                <div className="text-xs text-green-600/80">教育部競賽冠軍、ACT 商業競賽</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 text-center text-slate-400 text-sm">
        © 2026 Developed by Chienyu. MBA, NSYSU.
      </footer>
    </div>
  );
}