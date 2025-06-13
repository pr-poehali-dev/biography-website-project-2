import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "UI/UX Design", level: 95, icon: "Palette" },
    { name: "Figma", level: 90, icon: "Layers" },
    { name: "Prototyping", level: 88, icon: "Zap" },
    { name: "User Research", level: 85, icon: "Users" },
    { name: "Design Systems", level: 92, icon: "Grid" },
    { name: "HTML/CSS", level: 80, icon: "Code" },
  ];

  const softSkills = [
    "Лидерство команды",
    "Презентации",
    "Стратегическое мышление",
    "Клиентские коммуникации",
    "Аналитическое мышление",
    "Креативное решение проблем",
  ];

  const tools = [
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "Principle",
    "Framer",
    "InVision",
    "Miro",
    "Notion",
    "Slack",
    "Jira",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Навыки и компетенции
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon
                  name="Settings"
                  size={24}
                  className="text-purple-600 mr-3"
                />
                Технические навыки
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Icon
                          name={skill.icon as any}
                          size={18}
                          className="text-purple-600 mr-2"
                        />
                        <span className="font-medium text-gray-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-200 group-hover:bg-gray-300 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills & Tools */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="Heart" size={24} className="text-red-500 mr-3" />
                Soft Skills
              </h3>

              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="Wrench" size={24} className="text-blue-500 mr-3" />
                Инструменты
              </h3>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
