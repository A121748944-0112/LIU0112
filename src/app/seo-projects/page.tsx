import React from 'react';
import Link from 'next/link';

export default function SEOProjectsPage() {
    const seoArticles = [
        {
            title: "英文祝福語大全：精選新年祝福語英文一次看！",
            desc: "針對節慶高流量關鍵字進行佈局，成功登上 Google 搜尋首頁，展現關鍵字規劃與內容競爭力。",
            link: "https://content.afterwork.com.tw/3829/",
            tags: ["SERP Top 5", "趨勢內容"]
        },
        {
            title: "5 大訂製西裝推薦》訂製西裝怎麼選？西裝面料、剪裁全攻略！",
            desc: "業主反饋：文章帶來的流量，讓營業額從40萬/月增長到100萬/月。",
            link: "https://www.berryswed.com/1164/",
            tags: ["營業額上升", "商業文案"]
        },
        {
            title: "精選 5 大熱門沙發椅推薦！特色、評價懶人包！",
            desc: "SEO 內容創作分享各種好物推薦排行，提升品牌在專業領域的搜尋權重。",
            link: "https://sofa.contenta.tw/3028/",
            tags: ["產品分析", "SEO 優化"]
        },
        {
            title: "台中尾牙餐廳推薦：大型宴會、精緻包廂、各類預算一次搞定！",
            desc: "精選不同品牌推薦，成功登上 Google 搜尋首頁，替品牌帶來流量",
            link: "https://delicacy.contenta.tw/1968/",
            tags: ["品牌流量", "品牌排行分享"]
        }
    ];

    return (
        <div className="min-h-screen bg-white p-8 md:p-24">
            <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block font-medium">← 返回首頁</Link>

            <header className="mb-16">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">SEO 文章作品集</h1>
                <p className="text-slate-500 text-lg">透過數據驅動與關鍵字佈局，將內容價值轉化為實質流量與搜尋排名。</p>
            </header>

            <div className="grid gap-8">
                {seoArticles.map((article, index) => (
                    <a key={index} href={article.link} target="_blank" rel="noopener noreferrer"
                        className="group border border-slate-100 p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-4">
                                {article.title}
                            </h2>
                            <svg className="w-6 h-6 text-slate-300 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">{article.desc}</p>
                        <div className="flex gap-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}