import Icon from "@/components/ui/icon";

const EducationSection = () => {
  const education = [
    {
      year: "2012-2016",
      degree: "Бакалавр дизайна",
      school: "МГУ имени М.В. Ломоносова",
      description:
        "Графический дизайн и визуальные коммуникации. Диплом с отличием.",
      icon: "GraduationCap",
    },
    {
      year: "2016-2018",
      degree: "Магистр искусств",
      school: "British Higher School of Art & Design",
      description:
        "Дизайн интерфейсов и пользовательского опыта. Стажировка в Лондоне.",
      icon: "Award",
    },
    {
      year: "2019",
      degree: "Сертификация Google UX",
      school: "Google Career Certificates",
      description: "Профессиональная сертификация по UX дизайну от Google.",
      icon: "Badge",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Образование
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-purple-300"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-purple-600"
                      />
                    </div>
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.degree}
                  </h3>

                  <h4 className="text-lg text-purple-600 font-medium mb-3">
                    {item.school}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
