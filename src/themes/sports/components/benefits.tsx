'use client';

import { Zap, Headphones, Truck, Gift } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Calidad garantizada',
      description: 'Productos originales y verificados de marcas premium.',
    },
    {
      icon: Headphones,
      title: 'Atención 1 a 1 por WhatsApp',
      description: 'Equipo disponible para resolver todas tus dudas.',
    },
    {
      icon: Truck,
      title: 'Envío rápido',
      description: 'Entrega en 2-3 días hábiles a todo el país.',
    },
    {
      icon: Gift,
      title: 'Ofertas especiales',
      description: 'Descuentos exclusivos para clientes recurrentes.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Descubre qué nos hace diferentes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <Icon size={32} className="text-orange-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
