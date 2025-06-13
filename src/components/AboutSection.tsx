const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-montserrat">
            Обо мне
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Привет! Я Александр, дизайнер продуктов с более чем 8-летним
              опытом создания цифровых решений. Моя страсть — превращать сложные
              идеи в простые и элегантные пользовательские интерфейсы.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              За свою карьеру я работал с стартапами и крупными компаниями,
              помогая им создавать продукты, которыми пользуются миллионы людей.
              Верю в силу дизайн-мышления и пользователецентричного подхода.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Когда я не работаю над очередным проектом, увлекаюсь фотографией,
              путешествую и изучаю новые технологии. Активно делюсь знаниями в
              дизайнерском сообществе и провожу воркшопы.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Быстрые факты
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Родился в Москве, 1990 год
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  8+ лет опыта в дизайне
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  50+ успешных проектов
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Спикер на 15+ конференциях
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-black mb-4">Миссия</h3>
              <p className="text-black italic">
                "Создавать продукты, которые делают мир чуточку лучше и помогают
                людям достигать своих целей проще и быстрее."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
