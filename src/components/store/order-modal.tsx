import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { whatsappNumber } from "@/lib/store-data";
import { useOrder } from "./order-context";

export function OrderModal() {
  const { selectedItem, closeOrder } = useOrder();
  const [playerId, setPlayerId] = useState("");
  const [accountName, setAccountName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setPlayerId("");
      setAccountName("");
      setNotes("");
      setError("");
    }
  }, [selectedItem]);

  if (!selectedItem) return null;

  const submitOrder = (event: FormEvent) => {
    event.preventDefault();
    if (!playerId.trim()) {
      setError("يرجى إدخال Player ID لإكمال الطلب");
      return;
    }
    const details = [
      "السلام عليكم FN Store",
      "",
      "أرغب بطلب:",
      "",
      `الخدمة: ${selectedItem.kind === "uc" ? "شحن شدات" : selectedItem.name}`,
      selectedItem.kind === "uc" ? `الباقة: ${selectedItem.name}` : "",
      selectedItem.provider ? `الشركة: ${selectedItem.provider}` : "",
      `السعر: ${selectedItem.price}`,
      "",
      `Player ID: ${playerId.trim()}`,
      accountName.trim() ? `اسم الحساب: ${accountName.trim()}` : "",
      notes.trim() ? `ملاحظات: ${notes.trim()}` : "",
    ].filter(Boolean);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details.join("\n"))}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open onOpenChange={(open) => !open && closeOrder()}>
      <DialogContent dir="rtl" className="max-h-[92vh] w-[calc(100%-1.5rem)] overflow-y-auto rounded-2xl border-border bg-card p-0 shadow-modal sm:max-w-xl">
        <div className="border-b border-border px-5 py-5 sm:px-7">
          <span className="eyebrow">ORDER DETAILS</span>
          <DialogTitle className="mt-2 text-right text-2xl font-bold">تفاصيل الطلب</DialogTitle>
          <DialogDescription className="mt-1 text-right">راجع الخدمة وأكمل بياناتك.</DialogDescription>
        </div>
        <form onSubmit={submitOrder} className="space-y-5 px-5 pb-6 sm:px-7">
          <div className="order-selection">
            <div>
              <p className="text-xl font-bold text-foreground">{selectedItem.name}</p>
              {selectedItem.provider && <span className="mt-1 block text-sm text-muted-foreground">{selectedItem.provider}</span>}
            </div>
            <p className="price-text">{selectedItem.price}</p>
          </div>
          <label className="field-label">
            <span>Player ID <b>*</b></span>
            <Input value={playerId} onChange={(e) => { setPlayerId(e.target.value); setError(""); }} inputMode="numeric" placeholder="أدخل رقم اللاعب" className="store-input" />
          </label>
          {selectedItem.kind === "ranking" && (
            <label className="field-label">
              <span>اسم الحساب <small>اختياري</small></span>
              <Input value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="اسم الحساب داخل اللعبة" className="store-input" />
            </label>
          )}
          <label className="field-label">
            <span>ملاحظات <small>اختياري</small></span>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل إضافية" className="store-input min-h-20 resize-none" />
          </label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <div className="summary-box">
            <span>الخدمة <b>{selectedItem.name}</b></span>
            <span>السعر <b dir="ltr">{selectedItem.price}</b></span>
            <span>Player ID <b dir="ltr">{playerId || "—"}</b></span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
            <Button type="submit" variant="premium" size="store"><MessageCircle /> تأكيد الطلب عبر واتساب</Button>
            <Button type="button" variant="quiet" size="store" onClick={closeOrder}>رجوع <ArrowLeft /></Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}