import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Мы всегда открыты к общению
          </h2>
          <div className="w-20 h-0.5 bg-gray-900"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Almond Tourism Consulting
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Профессиональное юридическое сопровождение для туристического и 
              гостиничного бизнеса. Ваш надежный партнер в правовых вопросах.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Facebook size={24} strokeWidth={1} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Instagram size={24} strokeWidth={1} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Linkedin size={24} strokeWidth={1} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-900 mb-8">Контакты</h3>
            <div className="space-y-6">
              <a 
                href="mailto:liliya.achilova@mail.ru" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
              >
                <Mail className="mr-4 text-gray-400 group-hover:text-gray-900 transition-colors" size={20} strokeWidth={1} />
                <span className="font-light">liliya.achilova@mail.ru</span>
              </a>
              <a 
                href="tel:+998909257711" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
              >
                <Phone className="mr-4 text-gray-400 group-hover:text-gray-900 transition-colors" size={20} strokeWidth={1} />
                <span className="font-light">+998 90 925 77 11</span>
              </a>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-4 text-gray-400" size={20} strokeWidth={1} />
                <span className="font-light">Ташкент, Узбекистан</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="mr-4 text-gray-400" size={20} strokeWidth={1} />
                <span className="font-light">Пн-Пт: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-900 mb-8">Навигация</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-light text-left hover:translate-x-1 transform"
                >
                  О компании
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-light text-left hover:translate-x-1 transform"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('leader')}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-light text-left hover:translate-x-1 transform"
                >
                  Наш лидер
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-light text-left hover:translate-x-1 transform"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;