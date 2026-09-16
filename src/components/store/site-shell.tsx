import { Link } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/store-data";
import { OrderProvider } from "./order-context";
import { OrderModal } from "./order-modal";

const navigation = [
  { to: "/" as const, label: "الرئيسية" },
  { to: "/top-up" as const, label: "شحن شدات" },
  { to: "/ranking" as const, label: "تصعيد حسابات" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <OrderProvider>
      <div dir="rtl" className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <header className={`site-header ${scrolled ? "site-header-solid" : ""}`}>
          <div className="store-container flex h-18 items-center justify-between">
            <Link to="/" className="brand-lockup" aria-label="FN Store الرئيسية">
              <span className="brand-mark">FN</span><span><b>FN STORE</b><small>PREMIUM SERVICES</small></span>
            </Link>
            <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
              {navigation.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
              <a href="#contact" className="nav-link">تواصل معنا</a>
            </nav>
            <div className="hidden lg:block"><Button asChild variant="premium" size="store"><a href="https://wa.me/9647716778377" target="_blank" rel="noreferrer">اطلب الآن <MessageCircle /></a></Button></div>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
          {menuOpen && <nav className="mobile-nav lg:hidden">{navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<a href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</a></nav>}
        </header>
        <main>{children}</main>
        <ContactSection />
        <Footer />
        <OrderModal />
      </div>
    </OrderProvider>
  );
}

export function ContactSection() {
  return <section id="contact" className="contact-section"><div className="store-container"><div className="contact-heading"><span className="eyebrow">CONTACT</span><h2>جاهز تطلب؟</h2><p>اختار خدمتك وخلّي الباقي علينا.</p><Button asChild variant="premium" size="store"><a href="https://wa.me/9647716778377" target="_blank" rel="noreferrer"><MessageCircle /> تواصل عبر واتساب</a></Button></div><div className="contact-grid">{socialLinks.map((social, index) => <a key={`${social.label}-${social.value}`} href={social.href} target="_blank" rel="noreferrer" className="contact-link"><span>{social.label === "WhatsApp" ? <MessageCircle /> : social.label === "Telegram" ? <Send /> : <Instagram />}</span><div><small>{social.label}</small><b dir="ltr">{social.value}</b></div><i>{String(index + 1).padStart(2, "0")}</i></a>)}</div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="store-container"><div><b>FN STORE</b><p>شحن شدات • تصعيد حسابات</p></div><nav>{navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav><p dir="ltr">© ig : @zoq_iq </p></div></footer>;
}
