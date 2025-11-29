import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:ffmpbox@mail.ru?subject=Заявка с сайта от ${formData.name}&body=Имя: ${formData.name}%0D%0AТелефон: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AСообщение: ${formData.message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: "Package",
      title: "Приёмка товара",
      description: "Профессиональная приёмка с проверкой качества и количества",
      price: "от 3₽/ед."
    },
    {
      icon: "Box",
      title: "Хранение",
      description: "Современный склад с оптимальными условиями внутри МКАД",
      price: "от 50₽/м³/сутки"
    },
    {
      icon: "Warehouse",
      title: "Обработка",
      description: "Сборка заказов и упаковка по стандартам маркетплейсов",
      price: "от 5₽/шт."
    },
    {
      icon: "Truck",
      title: "Отгрузка",
      description: "Доставка на склады Wildberries, OZON, Яндекс Маркет",
      price: "от 400₽"
    },
    {
      icon: "Tag",
      title: "Маркировка",
      description: "Нанесение штрих-кодов и этикеток маркетплейсов",
      price: "от 3₽/шт."
    },
    {
      icon: "FileBarChart",
      title: "Отчётность",
      description: "Полная отчётность в режиме реального времени",
      price: "Бесплатно"
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
                href="https://wa.me/79229018179" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" className="text-white" size={20} />
              </a>
              <a 
                href="https://t.me/+79229018179" 
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
              Заказать индивидуальный расчет
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку и мы рассчитаем стоимость специально для вашего бизнеса
            </p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-2xl border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                    Комментарий
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем товаре и объемах..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
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
              src="https://yandex.ru/map-widget/v1/?ll=37.584163%2C55.879569&amp;z=17&amp;l=map&amp;pt=37.584163%2C55.879569,pm2rdm"
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
                <span className="text-xl font-bold">Mp Box</span>
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