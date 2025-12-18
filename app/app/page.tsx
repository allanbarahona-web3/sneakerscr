'use client';

import { useState } from 'react';
import { Hero, Header, FeaturedProducts, Benefits, HowItWorks, Testimonials, FAQ, Footer, WhatsAppFloat } from '@/themes/sports/components';
import { CartProvider, useSportsCart } from '@/themes/sports/context/CartContext';
import { ContactForm } from '@allanbarahona-web3/shared';
import { CheckoutModal } from '@allanbarahona-web3/shared';
import { getFeaturedProducts } from '@/themes/sports/data/products';

function SneakersCRContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { items } = useSportsCart();
  const products = getFeaturedProducts();

  return (
    <main className="bg-white">
      {/* Header with Cart */}
      <Header onCheckoutClick={() => setIsCheckoutOpen(true)} />

      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Benefits */}
      <Benefits />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Checkout Modal */}
      {items.length > 0 && (
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      )}

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </main>
  );
}

export default function SneakersCRPage() {
  return (
    <CartProvider>
      <SneakersCRContent />
    </CartProvider>
  );
}
