import { Crown, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { StoreItem } from "@/lib/store-data";
import { useOrder } from "./order-context";

export function PackageCard({ item }: { item: StoreItem }) {
  const { openOrder } = useOrder();
  return (
    <article className="package-card">
      <div className="flex items-center justify-between"><span className="provider-badge">{item.provider}</span><ShoppingBag className="text-primary" /></div>
      <div><h3>{item.name}</h3><p className="price-text" dir="ltr">{item.price}</p></div>
      <Button variant="quiet" size="store" className="w-full" onClick={() => openOrder(item)}>اطلب الآن</Button>
    </article>
  );
}

export function RankingCard({ item, index }: { item: StoreItem; index: number }) {
  const { openOrder } = useOrder();
  const [usd, iqd] = item.price.split(" · ");
  return (
    <article className="ranking-card">
      <div className="ranking-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="ranking-icon"><Crown /></div>
      <div className="min-w-0 flex-1"><span className="provider-badge">{item.category}</span><h3>{item.name}</h3></div>
      <div className="ranking-prices"><b dir="ltr">{usd}</b><span dir="ltr">{iqd}</span></div>
      <Button variant="quiet" size="store" onClick={() => openOrder(item)}>اطلب الخدمة</Button>
    </article>
  );
}