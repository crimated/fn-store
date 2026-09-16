import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Coins, MessageCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "— FN STORE — خدمات ببجي بمستوى مختلف" },
    { name: "description", content: "متجر عربي لخدمات شحن شدات ببجي وتصعيد الحسابات بأسعار واضحة وطلب مباشر." },
    { property: "og:title", content: "— FN STORE — خدمات ببجي بمستوى مختلف" },
    { property: "og:description", content: "شحن شدات وتصعيد حسابات بخيارات واضحة وأسعار مباشرة." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-light" aria-hidden="true" />
        <div className="store-container hero-grid">
          <div className="hero-copy">
           <span className="eyebrow">FN STORE</span>

<span className="eyebrow">FN STORE</span>

<h1>
  خدمات ببجي،
  <br />
  <em style={{ display: "inline-block", marginTop: "15px" }}>
    بمستوى مختلف.
  </em>
</h1>


            <p>شحن شدات وتصعيد حسابات بخيارات واضحة وأسعار مباشرة.</p>
            <div className="hero-actions"><Button asChild variant="premium" size="store"><Link to="/top-up">شحن شدات <ArrowLeft /></Link></Button><Button asChild variant="quiet" size="store"><Link to="/ranking">تصعيد حسابات <Trophy /></Link></Button></div>
            <div className="trust-line"><MessageCircle /><span>طلبك يبدأ من الموقع وينتهي مباشرة عبر واتساب</span></div>
          </div>
          <div className="hero-object" aria-label="تصميم تجريدي يمثل خدمات FN Store">
            <div className="object-ring ring-one" /><div className="object-ring ring-two" />
            <div className="object-core"><span>FN</span><b>PREMIUM<br />SERVICES</b></div>
            <div className="object-chip chip-one"><Coins /><span>UC</span></div>
            <div className="object-chip chip-two"><Trophy /><span>RANK</span></div>
          </div>
        </div>
        <div className="store-container hero-stats">
          {[ ["خدمات متنوعة", "شحن + تصعيد"], ["طلب مباشر", "عبر واتساب"], ["أسعار واضحة", "دولار + دينار"] ].map(([title, text], index) => <div key={title}><span>0{index + 1}</span><b>{title}</b><small>{text}</small></div>)}
        </div>
      </section>
      <section className="services-section store-container">
        <div className="section-heading"><div><span className="eyebrow">SERVICES</span><h2>اختار الخدمة</h2><p>كل اللي تحتاجه لحسابك بمكان واحد.</p></div></div>
        <div className="service-grid">
          <article className="service-feature"><div className="service-visual uc-visual"><span><Coins /></span></div><div className="service-copy"><span className="provider-badge">TOP UP</span><h3>شحن شدات</h3><p>اختر الباقة المناسبة واطلبها مباشرة.</p><Button asChild variant="quiet" size="store"><Link to="/top-up">استعرض الشدات <ArrowLeft /></Link></Button></div></article>
          <article className="service-feature"><div className="service-visual rank-visual"><span><Trophy /></span></div><div className="service-copy"><span className="provider-badge">RANKING</span><h3>تصعيد حسابات</h3><p>خدمات كونكر، توب وهاشتاك بمستويات مختلفة.</p><Button asChild variant="quiet" size="store"><Link to="/ranking">استعرض الخدمات <ArrowLeft /></Link></Button></div></article>
        </div>
      </section>
    </>
  );
}
