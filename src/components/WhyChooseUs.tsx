import { Clock, User, TrendingUp, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock size={40} strokeWidth={1} />,
      title: "15 лет работы",
      description: "Наш опыт говорит за нас. За 15 лет мы поработали с маленькими стартапами и с именитыми брендами."
    },
    {
      icon: <User size={40} strokeWidth={1} />,
      title: "Индивидуальный подход",
      description: "У каждой компании, с которой мы работаем, своя концепция и свой голос. Мы развиваем уникальные продукты."
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1} />,
      title: "Устойчивое развитие",
      description: "Способность адаптироваться к изменениям в законодательстве и рыночной среде, что способствует долгосрочному успеху и росту бизнеса."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Почему стоит выбрать нас?
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            Наши специалисты с радостью поделятся своей экспертизой, основанной на знании 
            того, что сейчас работает на рынке.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="text-gray-400 mb-8 group-hover:text-gray-700 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-8">
                <Shield className="text-gray-400 mr-6" size={48} strokeWidth={1} />
                <h3 className="text-3xl font-light text-gray-900">Гарантия качества</h3>
              </div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Мы гарантируем профессиональное выполнение всех работ и полное соответствие 
                действующему законодательству
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;