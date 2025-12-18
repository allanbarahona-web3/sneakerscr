'use client';

import { useState } from 'react';
import { ContactForm } from '@allanbarahona-web3/shared/contact';
import { CheckoutModal } from '@allanbarahona-web3/shared/commerce';
import { Hero, Header, FeaturedProducts, Benefits, HowItWorks, Testimonials, FAQ, Footer, WhatsAppFloat } from '@/themes/sports/components';
import { CartProvider, useSportsCart } from '@/themes/sports/context/CartContext';
import { getFeaturedProducts } from '@/themes/sports/data/products';

function SneakersCRContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { items } = useSportsCart();
  const products = getFeaturedProducts();

  return (
    <main className="bg-white">
      <Header onCheckoutClick={() => setIsCheckoutOpen(true)} />
      <Hero />
      <FeaturedProducts products={products} />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {items.length > 0 && (
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      )}

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
