import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-montserrat">
          Александр Иванов
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          Дизайнер продуктов, предприниматель, исследователь
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Создаю цифровые продукты, которые меняют жизнь людей к лучшему.
          Специализируюсь на UX/UI дизайне и разработке инновационных решений.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать резюме
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <Icon name="Mail" size={20} className="mr-2" />
            Связаться
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#"
            className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
          >
            <Icon name="Github" size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
          >
            <Icon name="Linkedin" size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
          >
            <Icon name="Twitter" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
