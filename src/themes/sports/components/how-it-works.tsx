'use client';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Elige tu sneaker',
      description: 'Explora nuestro catálogo y encuentra el par perfecto.',
    },
    {
      number: '2',
      title: 'Habla o compra',
      description: 'Pide info por WhatsApp o compra directo con tarjeta.',
    },
    {
      number: '3',
      title: 'Recibe en casa',
      description: 'Envío seguro y rastreado a tu domicilio.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            3 pasos simples para tu próximo par de tenis
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Card */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-orange-200 text-center h-full flex flex-col justify-between">
                {/* Number Circle */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Arrow (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 text-3xl text-orange-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
