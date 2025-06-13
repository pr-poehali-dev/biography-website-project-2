import Icon from "@/components/ui/icon";

const ExperienceSection = () => {
  const experience = [
    {
      period: "2020 - настоящее время",
      position: "Ведущий дизайнер продуктов",
      company: "TechFlow Solutions",
      description:
        "Руковожу командой из 5 дизайнеров, создаю дизайн-системы для крупных корпоративных клиентов.",
      achievements: [
        "Увеличил конверсию на 40% в основном продукте",
        "Запустил дизайн-систему, которой пользуются 100+ разработчиков",
        'Получил премию "Лучший дизайнер года" в компании',
      ],
      technologies: ["Figma", "React", "Design Systems", "A/B Testing"],
    },
    {
      period: "2018 - 2020",
      position: "Senior UX/UI дизайнер",
      company: "Digital Innovations",
      description:
        "Разрабатывал пользовательские интерфейсы для мобильных приложений и веб-платформ.",
      achievements: [
        "Создал интерфейс приложения с 1M+ загрузок",
        "Сократил время выполнения задач пользователями на 60%",
        "Провел 50+ пользовательских интервью",
      ],
      technologies: ["Sketch", "Principle", "InVision", "User Research"],
    },
    {
      period: "2016 - 2018",
      position: "Дизайнер интерфейсов",
      company: "StartupHub",
      description:
        "Работал с различными стартапами, помогая создавать MVP и развивать продукты.",
      achievements: [
        "Помог 15 стартапам получить инвестиции",
        "Создал более 30 прототипов продуктов",
        "Участвовал в 5 успешных запусках продуктов",
      ],
      technologies: ["Adobe XD", "Photoshop", "Illustrator", "Prototyping"],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 font-montserrat">
            Опыт работы
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-500"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="Briefcase" size={24} className="text-black" />
                    </div>
                    <span className="text-sm font-medium text-black bg-yellow-400 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    {job.position}
                  </h3>

                  <h4 className="text-lg text-yellow-500 font-semibold mb-4">
                    {job.company}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <h5 className="font-semibold text-yellow-400 mb-3 flex items-center">
                    <Icon
                      name="Trophy"
                      size={18}
                      className="text-yellow-500 mr-2"
                    />
                    Ключевые достижения:
                  </h5>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-gray-300"
                      >
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
