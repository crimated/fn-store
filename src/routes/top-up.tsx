import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PackageCard } from "@/components/store/store-cards";
import { providers, ucPackages } from "@/lib/store-data";

export const Route = createFileRoute("/top-up")({
  head: () => ({ meta: [
    { title: "شحن شدات ببجي — FN STORE" },
    { name: "description", content: "باقات شحن شدات ببجي عبر أسياسيل وماستر بأسعار واضحة وطلب مباشر." },
    { property: "og:title", content: "شحن شدات ببجي — FN STORE" },
    { property: "og:description", content: "اختر باقة شدات ببجي واطلبها مباشرة عبر واتساب." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TopUpPage,
});

function TopUpPage() {
  const [provider, setProvider] = useState<"asiacell" | "master">("asiacell");
  const selectedProvider = providers.find((item) => item.id === provider);
  return <div className="page-wrap"><section className="page-intro store-container"><span className="eyebrow">TOP UP</span><h1>شحن شدات ببجي</h1><p>اختار شركة الشحن والباقـة المناسبة لحسابك.</p></section><section className="store-container pb-28"><div className="provider-tabs" role="tablist" aria-label="اختار شركة الشحن">{providers.map((item) => <button key={item.id} role="tab" aria-selected={provider === item.id} className={provider === item.id ? "provider-tab provider-tab-active" : "provider-tab"} onClick={() => setProvider(item.id)}>{item.label}</button>)}</div><div className="section-heading compact"><div><span className="eyebrow">PROVIDER</span><h2>{selectedProvider?.label}</h2></div><span className="section-count">{ucPackages[provider].length} باقات</span></div><div className="package-grid" key={provider}>{ucPackages[provider].map((item) => <PackageCard key={item.id} item={item} />)}</div></section></div>;
}