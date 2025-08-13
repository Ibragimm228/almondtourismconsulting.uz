import { Scale, Shield, FileText, Building, Users, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale size={40} strokeWidth={1} />,
      title: "Юридическая поддержка и консультация",
      items: [
        "Правовая экспертиза: Анализ и консультирование по юридическим вопросам, специфичным для туристической и гостиничной отрасли.",
        "Актуализация знаний: Отслеживание изменений в национальном и международном законодательстве, регуляциях и правовых тенденциях."
      ]
    },
    {
      icon: <Shield size={40} strokeWidth={1} />,
      title: "Судебная защита и разрешение споров",
      items: [
        "Представительство в суде: Защита интересов компании в судах всех уровней по вопросам туристической и гостиничной деятельности.",
        "Альтернативное разрешение споров: Использование медиации и арбитража для быстрого и эффективного разрешения конфликтов."
      ]
    },
    {
      icon: <FileText size={40} strokeWidth={1} />,
      title: "Договорная работа",
      items: [
        "Разработка и анализ договоров: Создание, проверка и оптимизация договоров с клиентами, партнерами и поставщиками.",
        "Управление рисками: Идентификация и минимизация правовых рисков через правильное оформление договорных отношений."
      ]
    },
    {
      icon: <Building size={40} strokeWidth={1} />,
      title: "Регистрация и лицензирование",
      items: [
        "Регистрация компании: Помощь в регистрации новой компании и обеспечении соответствия всем законодательным требованиям.",
        "Получение лицензий: Поддержка в получении необходимых лицензий и сертификатов, включая статус туроператора и турагента."
      ]
    },
    {
      icon: <Users size={40} strokeWidth={1} />,
      title: "Продажа и реорганизация бизнеса",
      items: [
        "Поддержка сделок: Юридическое сопровождение при продаже, покупке или реорганизации бизнеса.",
        "Структурирование сделок: Оптимизация сделок с точки зрения налогов и правового обеспечения."
      ]
    },
    {
      icon: <Star size={40} strokeWidth={1} />,
      title: "Классификация гостиниц",
      items: [
        "Процедуры классификации: Поддержка в прохождении классификационных процедур для повышения уровня и статуса гостиницы."
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Наши услуги
          </h2>
          <div className="w-20 h-0.5 bg-gray-900"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="flex items-start space-x-6">
                <div className="text-gray-400 flex-shrink-0 group-hover:text-gray-700 transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-gray-900 mb-6 leading-relaxed">
                    {service.title}
                  </h3>
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-600 font-light leading-relaxed pl-6 border-l border-gray-200">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 border-t border-gray-200 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Готовы начать?
            </h3>
            <p className="text-xl text-gray-600 font-light mb-10">
              Свяжитесь с нами для получения персональной консультации
            </p>
            <button className="px-10 py-4 border border-gray-900 text-gray-900 font-light text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;