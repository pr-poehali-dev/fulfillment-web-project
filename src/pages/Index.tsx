import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Package",
      title: "Приёмка товара",
      description: "Профессиональная приёмка с проверкой качества и количества",
      price: "от 15₽/место"
    },
    {
      icon: "Box",
      title: "Хранение",
      description: "Современный склад класса А с оптимальными условиями",
      price: "от 50₽/м³/сутки"
    },
    {
      icon: "Warehouse",
      title: "Комплектация",
      description: "Сборка заказов и упаковка по стандартам маркетплейсов",
      price: "от 25₽/заказ"
    },
    {
      icon: "Truck",
      title: "Отгрузка",
      description: "Доставка на склады Wildberries, OZON, Яндекс Маркет",
      price: "от 100₽/поставка"
    },
    {
      icon: "Tag",
      title: "Маркировка",
      description: "Нанесение штрих-кодов и этикеток маркетплейсов",
      price: "от 5₽/шт"
    },
    {
      icon: "FileBarChart",
      title: "Отчётность",
      description: "Полная отчётность в режиме реального времени",
      price: "Бесплатно"
    }
  ];

  const tariffs = [
    {
      name: "Старт",
      price: "9 900₽",
      period: "/месяц",
      features: [
        "До 100 м³ хранения",
        "500 заказов в месяц",
        "Базовая упаковка",
        "Стандартная отчётность",
        "Приёмка 5 дней в неделю"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "24 900₽",
      period: "/месяц",
      features: [
        "До 300 м³ хранения",
        "2000 заказов в месяц",
        "Премиум упаковка",
        "Расширенная аналитика",
        "Приёмка 7 дней в неделю",
        "Личный менеджер"
      ],
      popular: true
    },
    {
      name: "Профи",
      price: "49 900₽",
      period: "/месяц",
      features: [
        "До 1000 м³ хранения",
        "Безлимит заказов",
        "VIP упаковка",
        "API интеграция",
        "24/7 приёмка",
        "Выделенная зона",
        "Приоритетная обработка"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Warehouse" className="text-white" size={24} />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black text-4xl">MP Box</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Услуги
              </a>
              <a href="#tariffs" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Тарифы
              </a>
              <a href="#map" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+74951234567" className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                <span className="font-semibold">+7 (922) 901-81-79</span>
              </a>
              <a 
                href="https://wa.me/79999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" className="text-white" size={20} />
              </a>
              <a 
                href="https://t.me/yourcompany" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Send" className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold my-0.5 mx-1 text-3xl">Фулфилмент для маркетплейсов</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ваш надёжный партнёр на{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  складе
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные услуги хранения, комплектации и отгрузки товаров для селлеров 
                Wildberries, OZON и Яндекс Маркет. Прозрачные тарифы без скрытых платежей.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Видео о складе
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">100+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-1">700м²</div>
                  <div className="text-gray-600">Площадь склада</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-gray-600">Работаем для вас</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f52a21e3-c740-44a2-9909-60f64fc818be/files/5ce4bcb6-3a02-43c2-88a0-271ecf19e0c6.jpg"
                alt="Склад FulfillPro"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Полный спектр услуг
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Все необходимое для успешной работы на маркетплейсах в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Icon name="ArrowRight" className="text-primary group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Прозрачные тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите план, который подходит вашему бизнесу. Без скрытых платежей.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  tariff.popular ? 'border-4 border-primary shadow-xl scale-105' : 'hover:-translate-y-2'
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold shadow-lg">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tariff.price}
                    </span>
                    <span className="text-gray-600">{tariff.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tariff.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={tariff.popular ? "default" : "outline"}
                  >
                    {tariff.popular ? "Выбрать план" : "Узнать больше"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Мы находимся в Москве
            </h2>
            <p className="text-xl text-gray-600">
              Удобное расположение для быстрой доставки на склады маркетплейсов
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d8ae8f9f8c4b3c8e5a9f1c2d3e4f5a&amp;source=constructor"
              width="100%"
              height="500"
              frameBorder="0"
              className="w-full"
              title="Карта местоположения склада"
            ></iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-bold text-lg mb-2">Адрес склада</h3>
                <p className="text-gray-600">г. Москва, Алтуфьевское шоссе д. 37с42</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-bold text-lg mb-2">Режим работы склада</h3>
                <p className="text-gray-600">Пн-Пт: 09:00 - 18:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (922) 901-81-79</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Warehouse" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">FulfillPro</span>
              </div>
              <p className="text-gray-400">
                Профессиональный фулфилмент для маркетплейсов
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Приёмка товара</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Хранение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комплектация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отгрузка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">+7 (922) 901-81-79</li>
                <li className="flex items-center gap-2">ffmpbox@mail.ru</li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 MpBox. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;