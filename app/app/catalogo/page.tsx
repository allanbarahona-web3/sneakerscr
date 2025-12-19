'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header, Footer, ProductCard, WhatsAppFloat } from '@/themes/sports/components';
import { getAllProducts, getUniqueBrands } from '@/themes/sports/data/products';
import { CartProvider } from '@/themes/sports/context/CartContext';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandParam = searchParams.get('brand');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParam || null);
  const brands = getUniqueBrands();
  const allProducts = getAllProducts();

  // Update selectedBrand when URL param changes
  useEffect(() => {
    setSelectedBrand(brandParam || null);
  }, [brandParam]);

  // Function to update URL when filter changes
  const handleBrandFilter = (brand: string | null) => {
    setSelectedBrand(brand);
    if (brand) {
      router.push(`/catalogo?brand=${encodeURIComponent(brand)}`);
    } else {
      router.push('/catalogo');
    }
  };

  // Filter products by brand
  const filteredProducts = selectedBrand
    ? allProducts.filter((p) => p.brand === selectedBrand)
    : allProducts;

  return (
    <>
      <Header onCheckoutClick={() => {}} />
      
      <main className="min-h-screen bg-white">
        {/* Back Button & Header */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-6 sm:mb-8">
              <ChevronLeft size={20} />
              Volver al inicio
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Catálogo <span className="text-orange-500">Completo</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Explora nuestro catálogo completo de tenis con los mejores precios. Más de {allProducts.length} productos disponibles.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Brand Filter Section */}
            <div className="mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Filtrar por marca</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                <button
                  onClick={() => handleBrandFilter(null)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                    selectedBrand === null
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos ({allProducts.length})
                </button>
                {brands.map((brand) => {
                  const count = allProducts.filter((p) => p.brand === brand).length;
                  return (
                    <button
                      key={brand}
                      onClick={() => handleBrandFilter(brand)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                        selectedBrand === brand
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {brand} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Products Grid */}
            <div>
              {filteredProducts.length > 0 ? (
                <>
                  <div className="mb-8 flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {selectedBrand ? `${selectedBrand}` : 'Todos los productos'}
                    </h2>
                    <span className="text-sm sm:text-base text-gray-600 bg-orange-50 px-4 py-2 rounded-full font-semibold">
                      {filteredProducts.length} productos
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lg sm:text-xl text-gray-500">
                    No hay productos disponibles para {selectedBrand}
                  </p>
                </div>
              )}
            </div>

            {/* Results Info */}
            <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200 text-center">
              <p className="text-sm sm:text-base text-gray-600">
                Mostrando <span className="font-bold text-orange-500">{filteredProducts.length}</span> de{' '}
                <span className="font-bold text-gray-900">{allProducts.length}</span> productos disponibles
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function CatalogPage() {
  return (
    <CartProvider>
      <CatalogContent />
    </CartProvider>
  );
}
