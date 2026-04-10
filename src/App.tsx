/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Waves, Menu, X, CheckCircle, Leaf, Check, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="text-slate-700 bg-slate-50 selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-md py-3' : 'py-4 border-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-1.5 rounded-full bg-[#0CC1D4] text-white shadow-sm transition-colors">
              <Waves className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="font-black text-lg md:text-xl tracking-tight text-[#0CC1D4] transition-colors">
              RakuToku Water
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-bold text-slate-600">
              <a href="#concept" className="hover:text-[#0CC1D4] transition-colors">コンセプト</a>
              <a href="#filters" className="hover:text-[#0CC1D4] transition-colors">5つのフィルター</a>
            </div>
            <a href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=ksthV0&liff_id=1656783300-KLG90La1"
               target="_blank"
               rel="noreferrer"
               className="bg-[#0CC1D4] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-cyan-500 transition-all transform hover:-translate-y-0.5">
              無料体験を申し込む
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[#0CC1D4] p-2">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={closeMenu} className="absolute top-6 right-6 text-slate-400">
          <X className="w-8 h-8" />
        </button>
        <a href="#concept" className="text-2xl font-bold text-slate-800" onClick={closeMenu}>コンセプト</a>
        <a href="#filters" className="text-2xl font-bold text-slate-800" onClick={closeMenu}>5つのフィルター</a>
        <a href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=ksthV0&liff_id=1656783300-KLG90La1"
           target="_blank"
           rel="noreferrer"
           className="bg-[#0CC1D4] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl">
          今すぐ無料で試す
        </a>
      </div>

      {/* Hero Section */}
      <header className="relative bg-[#0CC1D4] pt-16 md:pt-20 overflow-hidden flex flex-col">
        <div className="w-full flex flex-col items-center pt-8 md:pt-14 relative z-10 px-4 flex-grow">
          <div className="w-full flex justify-center animate-fade-in-up pb-8 md:pb-12" style={{ animationDelay: '0.1s' }}>
            <img src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/02/スクリーンショット-2026-02-25-14.28.20.png" 
                 alt="メイン画像" 
                 className="w-full h-auto object-contain md:max-w-5xl block"
                 onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/0cc1d4/ffffff?text=Main+Visual'; }} />
          </div>
        </div>
      </header>

      {/* Concept Section */}
      <section id="concept" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-10">
          <h2 className="text-2xl md:text-5xl font-black text-slate-800 leading-tight">
            沖縄の水は、<br className="md:hidden" />県外と同じではありません。
          </h2>
          <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border-t-8 border-[#0CC1D4] relative">
            <p className="text-base md:text-xl text-slate-600 leading-relaxed mb-8 text-left md:text-center">
              沖縄の水は、地質・浄水工程・配管環境などの影響により、県外とは水質の特徴が異なります。<br className="hidden md:block" />
              また、近年では<span className="text-red-500 font-bold bg-red-50 px-2 rounded inline-block">PFAS（有機フッ素化合物）</span>の問題も注目されています。
            </p>
            <div className="p-4 md:p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-100">
              <p className="text-lg md:text-2xl font-black text-[#0CC1D4] leading-snug">
                だからこそ、「全国共通」ではなく、<br className="hidden md:block" />「沖縄専用」のフィルターが必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Details */}
      <section id="filters" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <span className="bg-cyan-50 text-[#0CC1D4] px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">Filter System</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800">
              段階的に整える、<br className="md:hidden" />5つの役割。
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            <div className="group bg-slate-50 p-6 md:p-8 rounded-[2rem] border-2 border-transparent hover:border-[#0CC1D4] hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-black text-slate-200 group-hover:text-cyan-100 transition-colors">01</span>
                <span className="text-[10px] font-black text-[#0CC1D4] uppercase tracking-wider mb-1">Sediment</span>
              </div>
              <h3 className="text-lg font-bold mb-2">セディメント</h3>
              <p className="text-sm text-slate-500 leading-relaxed">砂・サビ・微細な不純物を除去し、後段フィルターを守ります。</p>
            </div>
            <div className="group bg-slate-50 p-6 md:p-8 rounded-[2rem] border-2 border-transparent hover:border-[#0CC1D4] hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-black text-slate-200 group-hover:text-cyan-100 transition-colors">02</span>
                <span className="text-[10px] font-black text-[#0CC1D4] uppercase tracking-wider mb-1">Pre Carbon</span>
              </div>
              <h3 className="text-lg font-bold mb-2">プレカーボン</h3>
              <p className="text-sm text-slate-500 leading-relaxed">活性炭の力で塩素やニオイを吸着し、飲みやすさを整えます。</p>
            </div>
            <div className="group bg-slate-50 p-6 md:p-8 rounded-[2rem] border-2 border-transparent hover:border-[#0CC1D4] hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-black text-slate-200 group-hover:text-cyan-100 transition-colors">03</span>
                <span className="text-[10px] font-black text-[#0CC1D4] uppercase tracking-wider mb-1">UF Filter</span>
              </div>
              <h3 className="text-lg font-bold mb-2">UFフィルター</h3>
              <p className="text-sm text-slate-500 leading-relaxed">細菌・ウイルスレベルを除去しつつ、大切なミネラルは通します。</p>
            </div>
            <div className="group bg-blue-50 p-6 md:p-8 rounded-[2rem] border-2 border-blue-200 shadow-lg relative transform md:-translate-y-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0CC1D4] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">Softening</span>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-black text-[#0CC1D4] opacity-50">04</span>
                <span className="text-[10px] font-black text-[#0CC1D4] uppercase tracking-wider mb-1">Ion Exchange</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">イオンエクスチェンジ</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">硬度を調整し、赤ちゃんも喜ぶ「超まろやか」な一杯へと変えます。</p>
            </div>
            <div className="group bg-cyan-50 p-6 md:p-8 rounded-[2rem] border-2 border-[#0CC1D4] shadow-xl relative transform md:-translate-y-8">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">PFAS Control</span>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-black text-[#0CC1D4] opacity-50">05</span>
                <span className="text-[10px] font-black text-cyan-600 uppercase tracking-wider mb-1">Post Carbon</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">ポストカーボン</h3>
              <p className="text-sm text-cyan-800 leading-relaxed font-bold">高密度活性炭でPFAS等の微細な化学物質をダブルで徹底除去します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content: Kids & Water */}
      <section className="py-16 md:py-24 bg-[#E0F7FA] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-[2rem] md:rounded-[3rem] blur-xl group-hover:bg-white/30 transition-all"></div>
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white transform md:-rotate-2">
                  <img src="https://placehold.co/600x450/fffbeb/f59e0b?text=Family+Smile"
                       alt="Child drinking water"
                       className="w-full h-auto object-cover aspect-[4/3]" />
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-full shadow-2xl text-[#0CC1D4] font-black text-center w-28 h-28 md:w-36 md:h-36 flex items-center justify-center flex-col border-4 border-[#E0F7FA] rotate-6">
                    <span className="text-2xl md:text-3xl">笑顔</span>
                    <span className="text-[10px] md:text-xs">のおいしさ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-left space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-5xl font-black text-slate-800 leading-tight">
                「お水ちょうだい！」<br />
                が、増える喜び。
              </h2>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed">
                沖縄はミネラルが豊富な地域です。<br /><br />
                ラクトクウォーターは、その自然のミネラルを<br className="hidden md:block" />
                すべて取り除くのではなく、<br className="hidden md:block" />
                活かしながら安全性を整える設計にしています。
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-slate-700 font-bold shadow-md flex items-center gap-2 text-xs md:text-sm border border-cyan-100">
                  <CheckCircle className="w-4 h-4 text-[#0CC1D4]" /> 赤ちゃんのミルクに
                </div>
                <div className="bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-slate-700 font-bold shadow-md flex items-center gap-2 text-xs md:text-sm border border-cyan-100">
                  <CheckCircle className="w-4 h-4 text-[#0CC1D4]" /> 毎日のお料理に
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 自然への配慮 */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-8 md:space-y-10">
          <div className="inline-flex items-center justify-center p-3 md:p-4 bg-emerald-100 rounded-full text-emerald-600 mb-2 shadow-sm">
            <Leaf className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
            水は、自然から借りているもの。
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm text-left md:text-center space-y-6 md:space-y-8 border border-emerald-100">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              毎日のペットボトル消費は、<br className="hidden md:block" />気づかないうちにゴミと輸送エネルギーを増やしています。
            </p>
            <p className="text-base md:text-lg text-slate-600 font-bold">
              ウォーターサーバーは、「便利」だけのものではありません。
            </p>
            <div className="inline-block text-left bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              <ul className="space-y-4 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><Check className="text-emerald-500 w-5 h-5" />プラスチックごみの削減</li>
                <li className="flex items-center gap-3"><Check className="text-emerald-500 w-5 h-5" />家庭で水を大切に使う意識</li>
                <li className="flex items-center gap-3"><Check className="text-emerald-500 w-5 h-5" />子どもたちの未来への配慮</li>
              </ul>
            </div>
            <p className="font-black text-lg md:text-xl text-emerald-700">
              ラクトクウォーターは、<br className="hidden md:block" />水の使い方そのものも提案したいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 売り込まない理由 */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="https://placehold.co/400x500/e0f2fe/0cc1d4?text=Filter" 
                   alt="5本のフィルター" 
                   className="max-w-full h-auto object-contain drop-shadow-xl" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
              <h2 className="text-2xl md:text-4xl font-black text-slate-800 leading-tight">
                水は、使ってみないと<br className="hidden md:block" />分かりません。
              </h2>
              <div className="text-base md:text-xl text-slate-600 leading-relaxed space-y-6">
                <p>数字や説明だけで、<br className="hidden md:block" />水の良し悪しは決められません。</p>
                <p>だからラクトクウォーターは、<br />
                <span className="inline-block mt-2 mb-2 font-black text-[#0CC1D4] text-xl md:text-3xl border-b-4 border-cyan-200 pb-1">30日間の無料体験</span><br />
                を用意しました。</p>
                <p>生活の中で、<br className="hidden md:block" />じっくり判断してほしいからです。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 安心の約束 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white border-2 border-cyan-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center shadow-lg relative mt-6">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-2 rounded-full border-2 border-cyan-100 shadow-sm font-black text-[#0CC1D4] whitespace-nowrap">安心の約束</div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 md:mb-10 leading-tight">
              忘れさせて料金が始まる仕組みは、<br className="hidden md:block" />取りません。
            </h2>
            <div className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 space-y-4 text-left md:text-center max-w-2xl mx-auto leading-relaxed">
              <p>携帯会社やカード会社の「無料体験」で、いつの間にか課金が始まっていた。そんな経験がある方も多いと思います。</p>
              <p>ラクトクウォーターでは、無料期間が終わる前に、必ずこちらからご連絡します。</p>
            </div>
            
            <div className="text-left max-w-sm mx-auto mb-8 md:mb-10 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
              <ul className="space-y-4 font-bold text-slate-700 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-[#0CC1D4] font-black">・</span>
                  終了7日前にご連絡
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#0CC1D4] font-black">・</span>
                  続けるかどうかを一緒に確認
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#0CC1D4] font-black">・</span>
                  合わなければ、そのまま終了
                </li>
              </ul>
            </div>

            <div className="bg-red-50 text-red-600 font-black py-4 md:py-5 px-4 rounded-xl text-base md:text-lg flex justify-center items-center gap-2 border border-red-100">
              <span className="text-xl md:text-2xl">👉</span>
              勝手に課金されることはありません。
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-16">よくある質問</h2>
          <div className="space-y-4">
            {[
              {
                q: "Q1. 本当に無料で試せますか？お試し後に解約しても違約金はかかりませんか？",
                a: "A. はい、30日間完全に無料でお試しいただけます。お試し期間中の解約であれば、違約金やサーバーの撤去費用などは一切かかりません。\n無料期間終了の7日前には必ずこちらからご連絡し、継続されるかどうかをお伺いします。「合わないな」と思われた場合はそのまま終了となりますので、お気軽にお試しください。"
              },
              {
                q: "Q2. 赤ちゃんのミルク作りや、小さな子どもに飲ませても大丈夫ですか？",
                a: "A. はい、安心してお使いいただけます。2本の活性炭を含む5段階フィルターで残留塩素、有機化合物をしっかり除去します。\nさらに最終段階のフィルターでミネラル（硬度）を抑えて軟水化するため、胃腸が未発達な赤ちゃんにも優しく、毎日のミルクや離乳食づくりにも最適です。"
              },
              {
                q: "Q3. 賃貸アパート・マンションでも設置できますか？大がかりな工事は必要ですか？",
                a: "A. はい、賃貸住宅でも問題なく設置いただけます。壁に穴を開けるような大がかりな工事は不要で、将来お引越しされる際も現状復帰が可能です。\n設置は当社の専門スタッフが無料で行いますので、置き場所などについても当日お気軽にご相談ください。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <button 
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-slate-100 transition-all group" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-base md:text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#0CC1D4]' : 'group-hover:text-[#0CC1D4]'}`} />
                </button>
                <div className={`px-6 pb-6 md:px-8 md:pb-8 text-slate-500 leading-relaxed border-t border-slate-200 pt-4 text-sm md:text-base ${openFaq === index ? 'block' : 'hidden'}`}>
                  {faq.a.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < faq.a.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 & 7: CTA (Generic Campaign Version) */}
      <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-[#0CC1D4] to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 space-y-12 md:space-y-16">
          
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white flex items-center justify-center text-cyan-500 font-black text-sm md:text-base shadow-xl rounded-full text-center leading-tight p-2 border-4 border-cyan-100">
                特別<br/>コラボ
              </div>
              <X className="text-white/80 w-5 h-5 md:w-6 md:h-6" />
              <div className="font-black text-xl md:text-2xl text-white tracking-wider">RakuToku</div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              ご来場いただいた皆様へ<br className="md:hidden" />特別なご案内🌈
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-[2rem] inline-block text-left md:text-center text-white/95 text-base md:text-lg border border-white/20 shadow-lg">
              <p className="leading-relaxed">
                イベントでの素敵な出会いと、<br className="md:hidden" />私たちの「安心できる水」への想いが重なり、<br className="hidden md:block" />
                ご来場者様だけの特別なキャンペーンをご用意しました。
              </p>
              <p className="mt-6 font-black text-lg md:text-2xl text-yellow-300">
                売るためではなく、<br className="md:hidden" />知ってもらうための無料体験です。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 shadow-2xl max-w-5xl mx-auto border-4 md:border-8 border-white/20">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              
              <div className="flex-1 w-full space-y-6">
                <div className="text-center lg:text-left border-b-2 border-slate-100 pb-5">
                  <span className="inline-block bg-cyan-100 text-cyan-700 text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3">本キャンペーン限定</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800">
                    30日間 無料体験内容
                  </h3>
                </div>
                <ul className="space-y-4 text-slate-700 font-bold text-sm md:text-base lg:text-lg bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#0CC1D4] w-6 h-6 shrink-0" /> 五段階フィルターをフル体験</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#0CC1D4] w-6 h-6 shrink-0" /> 設置費 0円</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#0CC1D4] w-6 h-6 shrink-0" /> 解約費 0円</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-[#0CC1D4] w-6 h-6 shrink-0" /> 判断前に必ずご連絡</li>
                </ul>
              </div>

              <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-4">
                <a href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=ksthV0&liff_id=1656783300-KLG90La1"
                   target="_blank"
                   rel="noreferrer"
                   className="w-full md:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-white font-black text-xl md:text-2xl py-6 px-8 md:py-8 md:px-12 rounded-[2rem] shadow-[0_10px_25px_-5px_rgba(245,158,11,0.5)] transform hover:scale-105 transition-all flex items-center justify-center gap-3">
                    今すぐ無料で申し込む
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </a>
                <p className="text-xs md:text-sm text-slate-400 font-medium">※LINE友だち追加画面へ移動します</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-600 py-12 md:py-16 text-center text-xs md:text-sm border-t border-slate-800">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
              <Waves className="w-4 h-4" />
            </div>
            <span className="font-black text-white text-lg tracking-widest uppercase">RakuToku Water</span>
          </div>
          <p>&copy; 2026 RakuToku Water Inc. Optimized for Okinawa's Life.</p>
        </div>
      </footer>
    </div>
  );
}
