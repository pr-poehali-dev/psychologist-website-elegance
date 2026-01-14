import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за вашу заявку! Я свяжусь с вами в течение 24 часов.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Контакты психолога | Запись на консультацию - Blinova-psy.ru"
        description="Записаться на консультацию психолога Светланы Блиновой. Онлайн и очно в Москве. Телефон +7 (995) 195-28-58. WhatsApp, Telegram."
        keywords="психолог запись, психолог москва контакты, записаться к психологу, консультация психолога телефон"
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-primary">Blinova-psy.ru</Link>
            <ul className="hidden md:flex items-center gap-8">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Услуги</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-sm text-accent font-medium">Контакты</Link></li>
            </ul>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">Свяжитесь со мной удобным способом</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-muted mb-8">
                <CardContent className="pt-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Форма записи</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                      <Input 
                        placeholder="Как к вам обращаться?"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Расскажите о вашей ситуации</label>
                      <Textarea 
                        placeholder="Опишите, с чем вы хотели бы поработать..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Я свяжусь с вами в течение 24 часов для согласования времени консультации
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-muted">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Телефон</h3>
                      <a href="tel:+79951952858" className="text-lg text-muted-foreground hover:text-accent transition-colors">
                        +7 (995) 195-28-58
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Звоните с 9:00 до 21:00 по московскому времени</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Адрес кабинета</h3>
                      <p className="text-muted-foreground mb-2">Москва, ул. Усачева, д. 3, этаж 1</p>
                      <p className="text-sm text-muted-foreground">
                        5 минут от метро Спортивная<br/>
                        Уютный кабинет с удобной парковкой
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardContent className="pt-8">
                  <h3 className="font-semibold text-primary mb-4">Мессенджеры</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/79951952858" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-[#25D366]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary group-hover:text-accent transition-colors">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Быстрая связь</p>
                      </div>
                    </a>

                    <a 
                      href="https://t.me/blinova_psy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#0088cc]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Send" className="text-[#0088cc]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary group-hover:text-accent transition-colors">Telegram</p>
                        <p className="text-sm text-muted-foreground">Удобный чат</p>
                      </div>
                    </a>

                    <a 
                      href="https://instagram.com/blinova_psy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#E4405F]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Instagram" className="text-[#E4405F]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary group-hover:text-accent transition-colors">Instagram</p>
                        <p className="text-sm text-muted-foreground">Полезный контент</p>
                      </div>
                    </a>

                    <a 
                      href="https://facebook.com/blinova.psy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#1877F2]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Facebook" className="text-[#1877F2]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-primary group-hover:text-accent transition-colors">Facebook</p>
                        <p className="text-sm text-muted-foreground">Статьи и обновления</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent bg-accent/5">
                <CardContent className="pt-8">
                  <div className="text-center">
                    <Icon name="Clock" className="text-accent mx-auto mb-3" size={32} />
                    <h3 className="font-semibold text-primary mb-2">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Понедельник — Пятница: 10:00 — 21:00<br/>
                      Суббота: 11:00 — 19:00<br/>
                      Воскресенье: выходной
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Blinova-psy.ru. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="https://wa.me/79951952858" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me/blinova_psy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
