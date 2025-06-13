import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/3a90e361-b51d-417d-ad2a-585dd5a2f249.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 font-montserrat">
          1mm3phedr0ne
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
          Дизайнер продуктов, предприниматель, исследователь
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Создаю цифровые продукты, которые меняют жизнь людей к лучшему.
          Специализируюсь на UX/UI дизайне и разработке инновационных решений.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать резюме
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <Icon name="Mail" size={20} className="mr-2" />
            Связаться
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <Icon name="Github" size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <Icon name="Linkedin" size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <Icon name="Twitter" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
