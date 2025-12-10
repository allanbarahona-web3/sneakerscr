'use client';

import { useState } from 'react';
import { Hero, Header, FeaturedProducts, Benefits, HowItWorks, Testimonials, FAQ, Footer, WhatsAppFloat } from './components';
import { CartProvider, useSportsCart } from './context/CartContext';
import { ContactForm } from '@/themes/shared/contact';
import { CheckoutModal } from '@/themes/shared/commerce';
import { getFeaturedProducts } from './data/products';
import type { Product } from './data/products';

function SneakersCRContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { items } = useSportsCart();
  const products = getFeaturedProducts();

  const handleWhatsAppClick = (product: Product) => {
    setSelectedProduct(product);
    setIsContactOpen(true);
  };

  const handleContactSubmit = () => {
    if (selectedProduct) {
      const waLink = `https://wa.me/50687654321?text=Hola,%20vengo%20de%20sneakerscr.com%20y%20quiero%20más%20info%20sobre%3A%20${encodeURIComponent(selectedProduct.name)}`;
      window.open(waLink, '_blank');
    }
  };

  return (
    <main className="bg-white">
      {/* Header with Cart */}
      <Header onCheckoutClick={() => setIsCheckoutOpen(true)} />

      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts products={products} onWhatsAppClick={handleWhatsAppClick} />

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
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        language="es"
        onSuccess={handleContactSubmit}
      />

      {/* Checkout Modal */}
      {items.length > 0 && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={items}
          onPaymentClick={() => {
            // Payment will be handled by PaymentModal in CheckoutModal
            console.log('Payment initiated from checkout');
          }}
        />
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
