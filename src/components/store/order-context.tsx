import { createContext, useContext, useState, type ReactNode } from "react";
import type { StoreItem } from "@/lib/store-data";

type OrderContextValue = {
  selectedItem: StoreItem | null;
  openOrder: (item: StoreItem) => void;
  closeOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  return (
    <OrderContext.Provider
      value={{ selectedItem, openOrder: setSelectedItem, closeOrder: () => setSelectedItem(null) }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within OrderProvider");
  return context;
}