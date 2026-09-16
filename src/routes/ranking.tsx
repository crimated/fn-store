import { createFileRoute } from "@tanstack/react-router";
import { RankingCard } from "@/components/store/store-cards";
import { accountServices } from "@/lib/store-data";

export const Route = createFileRoute("/ranking")({
  head: () => ({ meta: [
    { title: "تصعيد حسابات ببجي — FN STORE" },
    { name: "description", content: "خدمات تصعيد حسابات ببجي: كونكر كلاسيك وألتيمت رويال بأسعار واضحة." },
    { property: "og:title", content: "تصعيد حسابات ببجي — FN STORE" },
    { property: "og:description", content: "اختر مستوى التصعيد المناسب لحسابك واطلبه مباشرة." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RankingPage,
});

function RankingPage() {
  return <div className="page-wrap"><section className="page-intro store-container"><span className="eyebrow">RANKING</span><h1>تصعيد حسابات ببجي</h1><p>اختر المستوى المناسب لحسابك.</p></section><div className="store-container space-y-24 pb-28">{Object.values(accountServices).map((category) => <section key={category.label}><div className="section-heading compact"><div><span className="eyebrow">{category.label}</span><h2>{category.title}</h2></div><span className="section-count">{category.items.length} خدمات</span></div><div className="ranking-list">{category.items.map((item, index) => <RankingCard key={item.id} item={item} index={index} />)}</div></section>)}</div></div>;
}