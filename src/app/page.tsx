import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="py-20 px-6 text-center bg-white border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">劉芊妤 LIU CHIEN YU</h1>
        <p className="mt-4 text-xl text-slate-500">國立中山大學企業管理研究所 | SEO 關鍵字行銷、數據分析、專案管理</p>
        <div className="mt-6 flex justify-center gap-3 text-sm">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">Google 數位行銷學程認證、</span>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">行銷管理學程、</span>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">商業大數據分析微學程、</span>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">多益 795 分</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6 space-y-12">

        {/* 區塊一：SEO 文章作品集 (導向 /seo-projects) */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-blue-100 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 relative w-full h-[300px] border rounded-xl overflow-hidden bg-slate-50 shadow-inner order-2 md:order-1">
              <Image
                src="/seo-result.png"
                alt="Google SEO 排名實績"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="flex-1 text-left order-1 md:order-2">
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">SEO SERP</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">SEO 文章作品集</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                透過「關鍵字優化」以及「商業SEO文章撰寫」的方式來替業主達到增加曝光率以及提高點閱率的結果，透過替品牌攥寫文章的方式最高有達到20萬的曝光總數。
              </p>
              {/* 這裡已修正為導向 /seo-projects */}
              <Link href="/seo-projects" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                進入文章作品集 →
              </Link>
            </div>
          </div>
        </section>

        {/* 區塊二：數據分析特色區塊 (導向 /data-analysis) */}
        <section className="bg-slate-800 p-8 md:p-12 rounded-3xl text-white shadow-xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Data Analytics</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">數據分析專案作品集</h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                運用 R 語言進行數據清洗與建模，擅長將複雜的交易資料與會員行為轉化為直觀的圖表與趨勢，協助企業提出改善行銷方案
              </p>
              <Link href="/data-analysis" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition">
                查看專案作品集 →
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-slate-700 p-6 rounded-2xl text-center">
                <div className="text-blue-400 font-bold text-2xl mb-1">MBA</div>
                <div className="text-xs text-slate-400">商管專業背景</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-2xl text-center">
                <div className="text-green-400 font-bold text-2xl mb-1">Winner</div>
                <div className="text-xs text-slate-400">教育部競賽冠軍</div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-bold text-blue-500 uppercase">國際視野</span>
            <h3 className="text-2xl font-bold mt-2 mb-3">法國 MBS 交換經驗</h3>
            <p className="text-slate-600">赴法國 Montpellier Business School 交換半年，修讀 Business Management。</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-xs font-bold text-blue-500 uppercase">實務經驗</span>
            <h3 className="text-2xl font-bold mt-2 mb-3">LINE 購物平台營運</h3>
            <p className="text-slate-600">協助 LINE EC 部門進行平台營運、素材對接與異常排除。</p>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-sm">
        © 2026 Developed by Chienyu. MBA, NSYSU.
      </footer>
    </div>
  );
}