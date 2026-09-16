export type OrderKind = "uc" | "ranking";

export type StoreItem = {
  id: string;
  kind: OrderKind;
  name: string;
  price: string;
  provider?: string;
  category?: string;
};

export const whatsappNumber = "9647716778377";

export const providers = [
  { id: "asiacell", label: "أسياسيل" },
  { id: "master", label: "ماستر" },
] as const;

export const ucPackages: Record<(typeof providers)[number]["id"], StoreItem[]> = {
  asiacell: [
    { id: "asiacell-180", kind: "uc", name: "180 شدة", price: "$5", provider: "أسياسيل" },
    { id: "asiacell-426", kind: "uc", name: "426 شدة", price: "$10", provider: "أسياسيل" },
    { id: "asiacell-668", kind: "uc", name: "668 شدة", price: "$15", provider: "أسياسيل" },
    { id: "asiacell-1214", kind: "uc", name: "1214 شدة", price: "$25", provider: "أسياسيل" },
    { id: "asiacell-2458", kind: "uc", name: "2458 شدة", price: "$50", provider: "أسياسيل" },
    { id: "asiacell-4960", kind: "uc", name: "4960 شدة", price: "$100", provider: "أسياسيل" },
  ],
  master: [
    { id: "master-325", kind: "uc", name: "325 شدة", price: "7,500 د.ع", provider: "ماستر" },
    { id: "master-660", kind: "uc", name: "660 شدة", price: "15,000 د.ع", provider: "ماستر" },
    { id: "master-720", kind: "uc", name: "720 شدة", price: "17,000 د.ع", provider: "ماستر" },
    { id: "master-1800", kind: "uc", name: "1800 شدة", price: "35,000 د.ع", provider: "ماستر" },
    { id: "master-3850", kind: "uc", name: "3850 شدة", price: "68,000 د.ع", provider: "ماستر" },
    { id: "master-8100", kind: "uc", name: "8100 شدة", price: "130,000 د.ع", provider: "ماستر" },
  ],
};

export const accountServices = {
  classic: {
    title: "كونكر كلاسيك",
    label: "CLASSIC CONQUER",
    items: [
      { id: "classic-conquer", kind: "ranking", name: "كونكر كلاسيك", price: "$85 · 125,000 د.ع", category: "كونكر كلاسيك" },
      { id: "classic-top-100", kind: "ranking", name: "توب 100 كلاسيك", price: "$150 · 225,000 د.ع", category: "كونكر كلاسيك" },
      { id: "classic-top-50", kind: "ranking", name: "توب 50 كلاسيك", price: "$250 · 375,000 د.ع", category: "كونكر كلاسيك" },
    ] satisfies StoreItem[],
  },
  ultimate: {
    title: "كونكر ألتيمت رويال",
    label: "ULTIMATE ROYALE",
    items: [
      { id: "ultimate-only", kind: "ranking", name: "كونكر ألتيمت فقط", price: "$135 · 200,000 د.ع", category: "كونكر ألتيمت رويال" },
      { id: "ultimate-500-100", kind: "ranking", name: "هاشتاغ توب من 500 إلى 100", price: "$500 · 750,000 د.ع", category: "كونكر ألتيمت رويال" },
      { id: "ultimate-100-10", kind: "ranking", name: "هاشتاغ توب من 100 إلى 10", price: "$700 · 1,070,000 د.ع", category: "كونكر ألتيمت رويال" },
      { id: "ultimate-3-10", kind: "ranking", name: "هاشتاغ من توب 3 إلى توب 10", price: "$1200 · 1,800,000 د.ع", category: "كونكر ألتيمت رويال" },
      { id: "ultimate-top-3", kind: "ranking", name: "هاشتاغ توب 3 ألتيمت", price: "$1500 · 2,225,000 د.ع", category: "كونكر ألتيمت رويال" },
    ] satisfies StoreItem[],
  },
};

export const socialLinks = [
  { label: "WhatsApp", value: "+964 7716778377", href: "https://wa.me/9647716778377" },
  { label: "Instagram", value: "@lbt", href: "https://instagram.com/lbt" },
  { label: "Instagram", value: "@yuuyu", href: "https://instagram.com/yuuyu" },
  { label: "Telegram", value: "@YY0Y9", href: "https://t.me/YY0Y9" },
];