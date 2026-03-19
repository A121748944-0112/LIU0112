import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col md:flex-row">

      {/* 左側欄：個人資訊與證照 (複刻履歷窄欄) */}
      <aside className="w-full md:w-1/3 bg-white p-10 md:p-16 border-r border-slate-200 shadow-sm">
        <div className="md:sticky md:top-16">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">劉芊妤</h1>
            <p className="text-xl text-blue-700 font-semibold mt-2">LIU CHIEN YU</p>
          </div>

          <div className="space-y-10">
            {/* 聯絡資訊 */}
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">Contact</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2 text-sm"><span>📞</span> 0928258942</li>
                <li className="flex items-center gap-2 text-sm"><span>✉️</span> a25010046@gmail.com</li>
              </ul>
            </section>

            {/* 證照及學程 */}
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b pb-2">Certifications</h4>
              <div className="flex flex-col gap-3">
                {[
                  { text: "中山大學行銷管理學程", icon: "🏆" },
                  { text: "中山大學商業大數據分析微學程", icon: "📊" },
                  { text: "多益 795 分", icon: "🌐" },
                  { text: "Google 數位行銷認證", icon: "🎓" },
                ].map(item => (
                  <div key={item.text} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="text-lg">{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </aside>

      {/* 右側欄：專業核心區 (複刻履歷寬欄) */}
      <main className="flex-1 p-8 md:p-20 max-w-5xl">

        {/* About Me & Education */}
        <section className="mb-20">
          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">About Me</h3>

          <div className="mb-12">
            <p className="text-2xl font-bold text-slate-800 leading-snug mb-4">
              擅長以數據驅動決策，具備跨部⾨溝通與數據分析專案經驗
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              參與多項 SEO 內容專案，曾達成單一品牌 <span className="text-blue-700 font-bold">42 萬次曝光</span>實績，也曾經參加過多項數據專案活動及商業競賽
            </p>
          </div>

          {/* 學歷時間軸 */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b pb-2">Education</h4>

            <div className="relative pl-6 border-l-2 border-slate-100 space-y-10">
              {/* 研究所 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h5 className="font-bold text-slate-800 text-lg">國立中山大學 企業管理研究所</h5>
                  <span className="text-sm font-medium text-slate-400">2022/09 - 2025/01</span>
                </div>
                <p className="text-slate-600 mt-1 text-sm italic font-medium">兼修商業大數據分析微學程</p>
                <ul className="mt-3 text-sm text-slate-500 list-disc list-inside space-y-1">
                  <li>與企業合作專案對內部員工訓練資料進行分析</li>
                  <li>參與電商平台專案，合作透過銷售數據提出行銷方案</li>
                </ul>
              </div>

              {/* 法國交換 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h5 className="font-bold text-slate-800 text-lg">Montpellier Business School (France)</h5>
                  <span className="text-sm font-medium text-slate-400">2024/09 - 2025/01</span>
                </div>
                <p className="text-slate-600 mt-1 text-sm">交換學生計畫 - Business Management </p>
              </div>

              {/* 大學部 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h5 className="font-bold text-slate-800 text-lg">國立中山大學 企業管理學系</h5>
                  <span className="text-sm font-medium text-slate-400">2017/09 - 2021/07</span>
                </div>
                <p className="text-slate-600 mt-1 text-sm">兼修中山大學行銷管理學程</p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心專案入口 */}
        <div className="space-y-10">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-2">Key Portfolio</h3>

          {/* SEO 區塊 */}
          <Link href="/seo-projects" className="block group">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-400 transition-all duration-300">
              <span className="text-blue-600 font-bold text-sm tracking-widest">SEO CONTENT</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4 group-hover:text-blue-700 transition">SEO 文章作品集 →</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                透過關鍵字優化以及商業SEO⽂章撰寫的⽅式來替業主達到增加曝光率以及提⾼點閱率的結果
              </p>
            </div>
          </Link>

          {/* 數據分析區塊 */}
          <Link href="/data-analysis" className="block group">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-green-400 transition-all duration-300">
              <span className="text-green-600 font-bold text-sm tracking-widest">DATA STRATEGY</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4 group-hover:text-green-700 transition">數據分析專案作品集 →</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                結合 R 語言與 EXCEL 樞紐分析，將會員資料轉化為可視化洞察，協助企業優化決策
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-medium">教育部 GIFT 商業競賽冠軍</div>
                <div className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-medium">電商平台行銷數據分析專案</div>
                <div className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-medium">企業內部培訓數據分析專案</div>
              </div>
            </div>
          </Link>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-200 text-slate-400 text-sm">
          © 2026 Developed by Chienyu. MBA, NSYSU.
        </footer>
      </main>

    </div>
  );
}