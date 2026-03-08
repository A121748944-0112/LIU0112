import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DataAnalysisPage() {
  const analysisProjects = [
    {
      title: "數位行銷數據分析 - 電商平台專案",
      desc: "針對電商平台交易數據進行深度挖掘，運用 RFM 模型鎖定高價值回購族群，並同步分析各縣市銷售佔比。透過 R 語言將碎片化資料轉化為可視化的趨勢圖表，並針對單購客族群提出自動化行銷標籤建議，協助企業優化行銷預算配置。",
      tags: ["R 語言", "ggplot2", "RFM 分析", "地理區位分析"],
      images: ["/rfm-analysis.png", "/geo-distribution.png"]
    },
    {
      title: "產業分析專案 - 華泰電子員工培訓資料專案",
      desc: "針對華泰電子內部員工培訓資料進行分析。透過問卷內容解構員工需求，並協助企業調整內部培訓計畫，將量化數據轉化為管理決策。",
      tags: ["問卷分析", "Excel 樞紐分析", "管理決策建議"]
    },
    {
      title: "GIFT 全球專業實習聯盟企劃競賽",
      desc: "由教育部主辦之全國性競賽。負責整體企劃構思與數據佐證，最終於全國眾多參賽隊伍中脫穎而出榮獲「冠軍」。",
      tags: ["教育部冠軍", "企劃實作", "專案管理"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 md:p-24">
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block font-medium">← 返回首頁總覽</Link>

      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-slate-100">商業數據分析</h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          結合中山大學企業管理研究所專業與商業大數據分析微學程所學，透過 R 語言及 Excel 樞紐分析，將碎片化資料轉化為可視化的圖表洞察與具實作價值的商業建議。
        </p>
      </header>

   