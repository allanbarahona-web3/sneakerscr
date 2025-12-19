import { Hero, Header, FeaturedProducts, Benefits, HowItWorks, Testimonials, FAQ, Footer, WhatsAppFloat } from './components';
import { CartProvider } from './context/CartContext';
import { getFeaturedProducts } from './data/products';

async function SneakersCRContent() {
  const products = getFeaturedProducts();

  return (
    <main className="bg-white">
      {/* Header with Cart */}
      <Header />

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
