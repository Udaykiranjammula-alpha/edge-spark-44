import { ReactNode } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartProvider } from "@/components/cart/cart-provider";
import "./shell-global.css";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
