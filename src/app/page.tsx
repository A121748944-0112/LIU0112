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
        <section className="bg-slate-800 p-8 md:p-12 rounded-3xl text-white shadow-xl