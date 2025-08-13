import { Award, BookOpen, Users, Globe } from 'lucide-react';

const Leader = () => {
  const specializations = [
    "Договорное право",
    "Разрешение споров, включая арбитраж и медиацию",
    "Инвестиции и сделки слияния и поглощения (M&A)",
    "Правовое регулирование экологических и природоохранных вопросов",
    "Прямые иностранные инвестиции",
    "Налоговое право",
    "Гражданское право",
    "Корпоративное право",
    "Бизнес-тренер MBA"
  ];

  const achievements = [
    { number: "15+", label: "лет опыта" },
    { number: "500+", label: "успешных кейсов" },
    { number: "3", label: "международных университета" },
    { number: "100+", label: "публикаций" }
  ];

  return (
    <section id="leader" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Наш лидер
          </h2>
          <div className="w-20 h-0.5 bg-gray-900"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-gray-200"></div>
              
              <img 
                src="/leader/leader.jpg" 
                alt="Ачилова Лилия Илхомовна" 
                className="w-full h-[600px] object-cover transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-3xl font-light text-white mb-2">
                  Ачилова Лилия Илхомовна
                </h3>
                <p className="text-gray-300 text-lg">PhD</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="border-l-2 border-gray-900 pl-8 mb-12">
              <p className="text-2xl font-light text-gray-700 italic leading-relaxed">
                "Право — это не просто набор правил, это искусство создавать возможности 
                для устойчивого развития бизнеса"
              </p>
            </div>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                С 2008 года ведет юридическую практику, занимает должность профессора кафедры 
                Бизнес право в Ташкентском государственном юридическом университете.
              </p>
              
              <p>
                Является бизнес-тренером MBA в Университете Kozminski в Польше (входит в топ-100), 
                в Университете AlmaU в Казахстане (входит в топ-200) и Высшей школе бизнеса и 
                предпринимательства при Кабинете Министров РУз.
              </p>
              
              <p>
                Лилия постоянно сотрудничает с государственными органами в области законотворческой 
                деятельности в гостиничной и других индустриях. Является арбитром в Постоянном 
                арбитражном суде при Ассоциации арбитражных судов Узбекистана.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8 pt-8 border-t border-gray-100">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h4 className="text-2xl font-light text-gray-900 mb-12">Области экспертизы</h4>
          <div className="flex flex-wrap gap-3">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-light hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <BookOpen className="text-gray-400 mb-4 group-hover:text-gray-700 transition-colors" size={32} strokeWidth={1} />
            <h5 className="text-lg font-light text-gray-900 mb-2">Академическое признание</h5>
            <p className="text-gray-600 font-light text-sm">
              Профессор и PhD, преподаватель в ведущих университетах
            </p>
          </div>
          <div className="group">
            <Globe className="text-gray-400 mb-4 group-hover:text-gray-700 transition-colors" size={32} strokeWidth={1} />
            <h5 className="text-lg font-light text-gray-900 mb-2">Международный опыт</h5>
            <p className="text-gray-600 font-light text-sm">
              Эксперт в международных проектах и государственных грантах
            </p>
          </div>
          <div className="group">
            <Award className="text-gray-400 mb-4 group-hover:text-gray-700 transition-colors" size={32} strokeWidth={1} />
            <h5 className="text-lg font-light text-gray-900 mb-2">Арбитражная практика</h5>
            <p className="text-gray-600 font-light text-sm">
              Арбитр Постоянного арбитражного суда Узбекистана
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;