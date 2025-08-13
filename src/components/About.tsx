import { Award, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            О компании
          </h2>
          <div className="w-20 h-0.5 bg-gray-900"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                <span className="font-medium text-gray-900">Almond Tourism Consulting</span> — агентство, 
                которое работает с туристическими и гостиничными предприятиями, помогает достичь больших 
                успехов на рынке.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                За <span className="font-medium text-gray-900">15 лет работы</span> мы помогли укрепиться 
                и создать прочную юридическую основу на рынке множеству компаний — от небольших стартапов 
                до крупных именитых брендов.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Лет опыта</div>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-light text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Клиентов</div>
              </div>
              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Проектов</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Наша миссия</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Обеспечить правовую безопасность и устойчивое развитие туристического бизнеса 
                наших клиентов через профессиональные консультации и комплексную поддержку.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="group">
            <div className="mb-6">
              <Award className="text-gray-400 group-hover:text-gray-900 transition-colors" size={40} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-3">Экспертиза</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              15 лет профессионального опыта в туристической индустрии
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <Target className="text-gray-400 group-hover:text-gray-900 transition-colors" size={40} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-3">Точность</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Индивидуальные решения для каждого клиента
            </p>
          </div>
          
          <div className="group">
            <div className="mb-6">
              <Users className="text-gray-400 group-hover:text-gray-900 transition-colors" size={40} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-3">Доверие</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Более 100 довольных клиентов по всему миру
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;