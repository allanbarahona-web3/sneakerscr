'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductCard } from './product-card';
import { getUniqueBrands, getAllProducts } from '../data/products';
import type { Product } from '../data/products';

export function Catalog() {
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
    <section id="catalogo-completo" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Catálogo <span className="text-orange-500">Completo</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Explora todos nuestros tenis con los mejores precios
          </p>
        </div>

        {/* Brand Filter */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
            <button
              onClick={() => handleBrandFilter(null)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all ${
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
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">
                No hay productos disponibles para {selectedBrand}
              </p>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Mostrando{' '}
            <span className="font-bold text-orange-500">{filteredProducts.length}</span> de{' '}
            <span className="font-bold text-gray-900">{allProducts.length}</span> productos
          </p>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
