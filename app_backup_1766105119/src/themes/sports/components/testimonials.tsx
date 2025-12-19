'use client';

import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos M.',
      rating: 5,
      text: 'Me atendieron rápido por WhatsApp y en 2 días tenía mis tenis. Muy recomendado.',
    },
    {
      name: 'María G.',
      rating: 5,
      text: 'Proceso súper claro, sin complicaciones. Los tenis llegaron en perfecto estado.',
    },
    {
      name: 'Juan P.',
      rating: 5,
      text: 'Excelente atención y precios muy competitivos. Definitivamente compraré nuevamente.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Historias reales de clientes satisfechos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 italic">"{testimonial.text}"</p>

              {/* Name */}
              <p className="text-gray-900 font-semibold text-sm sm:text-base">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">1000+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Clientes</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Promedio</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">98%</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Satisfacción</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">24h</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
