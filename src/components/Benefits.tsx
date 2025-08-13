import { Shield, Users, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Юридическую безопасность и уверенность в правовом поле",
      description:
        "Наша цель — помочь вашему бизнесу, вашим потребителям и партнерам. Мы поможем эффективно управлять своей деятельностью, минимизировать риски, привлекать и удерживать клиентов, а также успешно развиваться на конкурентном рынке туристических и гостиничных услуг."
    },
    {
      icon: Users,
      title: "Защита прав и обязанностей",
      description:
        "Мы помогаем предприятиям понимать свои права и обязанности перед клиентами, партнерами и государственными органами. Это включает в себя вопросы ответственности за качество услуг, возврат денежных средств, страхование и другие аспекты."
    },
    {
      icon: CheckCircle,
      title: "Соблюдение нормативных требований",
      description:
        "Туризм регулируется законами и нормативами. Юридические консультанты помогают предприятиям соблюдать эти требования, чтобы избежать штрафов и проблем с контролирующими органами."
    }
  ];

  const images = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Что вы получите?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            Конкретные эффекты для туристического и гостиничного бизнеса: безопасность, защита прав, соответствие требованиям.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <figure className="col-span-2 h-64 relative">
                  <img
                    src={images[0]}
                    alt="Консалтинг и правовая поддержка"
                    className="w-full h-full object-cover rounded-lg transition"
                  />
                  <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-300 pointer-events-none"></span>
                </figure>
                <figure className="h-48 relative">
                  <img
                    src={images[1]}
                    alt="Сотрудничество и защита прав"
                    className="w-full h-full object-cover rounded-lg transition"
                  />
                  <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-300 pointer-events-none"></span>
                </figure>
                <figure className="h-48 relative">
                  <img
                    src={images[2]}
                    alt="Соответствие нормам и стандартам"
                    className="w-full h-full object-cover rounded-lg transition"
                  />
                  <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-300 pointer-events-none"></span>
                </figure>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-800 bg-white">
                  Юридическая безопасность
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-800 bg-white">
                  Защита прав
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-800 bg-white">
                  Соблюдение требований
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative">
              <span className="absolute left-3 top-0 bottom-0 w-px bg-gray-200"></span>

              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="relative pl-12 pb-10 mb-10 border-b border-gray-100 last:mb-0 last:pb-0 last:border-none">
                    <div className="absolute left-0 top-1">
                      <div className="h-8 w-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600">
                        <Icon size={16} strokeWidth={1.25} />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-2xl font-light text-gray-900 leading-snug">
                        {benefit.title}
                      </h3>
                      <div className="text-6xl font-extralight text-gray-100 leading-none select-none">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <p className="mt-3 text-gray-600 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-100 pt-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">Готовы к сотрудничеству?</h3>
              <p className="text-gray-600 text-lg font-light max-w-2xl">
                Позвольте нам стать вашим надежным партнером в области правовой поддержки 
                туристического и гостиничного бизнеса
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                Бесплатная консультация
              </button>
              <button className="px-6 py-3 rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 transition-colors">
                Наши контакты
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;