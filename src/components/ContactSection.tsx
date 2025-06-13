import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      label: "Email",
      value: "aleksandr.ivanov@example.com",
      link: "mailto:aleksandr.ivanov@example.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Локация",
      value: "Москва, Россия",
      link: null,
    },
    {
      icon: "Globe",
      label: "Сайт",
      value: "aleksandr-ivanov.com",
      link: "https://aleksandr-ivanov.com",
    },
  ];

  const socialLinks = [
    { icon: "Github", label: "GitHub", link: "https://github.com" },
    { icon: "Linkedin", label: "LinkedIn", link: "https://linkedin.com" },
    { icon: "Twitter", label: "Twitter", link: "https://twitter.com" },
    { icon: "Instagram", label: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Давайте работать вместе
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Готов обсудить ваш проект и воплотить идеи в жизнь. Свяжитесь со
            мной любым удобным способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Icon
                          name={contact.icon as any}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-purple-200 font-medium">
                          {contact.label}
                        </p>
                        <p className="text-white font-semibold">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Icon
                          name={contact.icon as any}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-purple-200 font-medium">
                          {contact.label}
                        </p>
                        <p className="text-white font-semibold">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/20">
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                    title={social.label}
                  >
                    <Icon
                      name={social.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Готовы начать проект?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Я всегда открыт для интересных проектов и новых возможностей.
                Расскажите о вашей идее, и мы найдем способ воплотить её в
                жизнь.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать сообщение
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Запланировать звонок
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-16 border-t border-white/20 mt-16">
          <p className="text-purple-200">
            © 2024 Александр Иванов. Сделано с ❤️ и большой долей кофеина.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
