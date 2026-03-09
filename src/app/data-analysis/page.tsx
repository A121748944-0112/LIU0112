import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DataAnalysisPage() {
  const analysisProjects = [
    {
      title: "數位行銷數據分析 - 電商平台專案",
      desc: "針對電商平台交易數據進行分析，下列圖表是其中部分數據。透過 R 語言將碎片化資料轉化為可視化的趨勢圖表，協助企業更簡單的了解數據，提出行銷方案時更有足夠數據佐證。",
      tags: ["R 語言", "會員資料分析"],
      images: ["/rfm-analysis.png", "/geo-distribution.png"]
    },
    {
      title: "產業分析專案 - 華泰電子員工培訓資料專案",
      desc: "針對華泰電子進行產業分析及內部員工培訓資料分析，透過問卷內容解構員工需求，並協助企業調整內部培訓計畫，將量化數據轉換成員工培訓方案建議。",
      tags: ["問卷分析", "Excel 樞紐分析", "管理決策建議"]
    },
    {
      title: "GIFT 全球專業實習聯盟企劃競賽",
      desc: "由教育部主辦之全國性競賽。透過企劃構思與數據佐證再加上實際舉辦講師活動，大幅提升平台使用人數，最終於全國眾多參賽隊伍中脫穎而出榮獲「冠軍」。",
      tags: ["教育部冠軍", "企劃實作", "專案管理"]
    },
    {
      title: "ACT 夢想家 ESG 影響⼒計畫－遠傳電信",
      desc: "透過企業提供之問題痛點來發想出整體企劃提案，最終結果為晉級初賽。",
      tags: ["企劃發想", "解決企業問題痛點"]
    },
    {
      title: "ATCC全國⼤專院校商業個案競賽",
      desc: "與桃園市產業發展局發想替偏鄉問題解決企劃，最終結果為晉級初賽第二輪。",
      tags: ["桃園市產業發展局"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-12 inline-flex items-center gap-2 font-semibold transition">
          <span>←</span> 返回首頁總覽
        </Link>

        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">商業數據分析</h1>
          <p className="text-slate-600 text-xl max-w-4xl leading-relaxed">
            結合 <span className="text-blue-700 font-medium">中山大學企業管理研究所</span> 專業與商業大數據分析微學程所學，透過 <span className="text-blue-700 font-medium">R 語言</span> 及 Excel 樞紐分析，將碎片化資料轉化為可視化的圖表洞察與具實作價值的商業建議。
          </p>
        </header>

        <div className="space-y-16">
          {analysisProjects.map((item, index) => (
            <div key={index} className="bg-white p-8 md:p-14 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-col gap-8">
                {/* 文字內容區 */}
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{item.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-5xl">{item.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 圖片併排顯示區 */}
                {item.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {item.images.map((imgUrl, imgIndex) => (
                      <div key={imgIndex} className="flex flex-col group">
                        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border border-slate-100 bg-white p-4 shadow-inner">
                          <Image
                            src={imgUrl}
                            alt={`${item.title} analysis ${imgIndex + 1}`}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-4">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          <p className="text-slate-500 text-sm font-medium">
                            {imgIndex === 0 ? "RFM 顧客價值位點圖 (ggplot2)" : "全台銷售地理分佈分析 (ggplot2)"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-200 text-center text-slate-500 text-sm">
          © 2026 Developed by Chienyu. MBA, NSYSU. <br />
          <span className="mt-2 inline-block italic text-slate-400">Data-driven insights for business excellence.</span>
        </footer>
      </div>
    </div>
  );
}