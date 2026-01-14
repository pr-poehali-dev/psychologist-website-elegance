import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Светлана Блинова</h1>
            <ul className="hidden md:flex items-center gap-8">
              <li><button onClick={() => scrollToSection('home')} className="text-sm hover:text-gold transition-colors">Главная</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-sm hover:text-gold transition-colors">Обо мне</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm hover:text-gold transition-colors">Услуги</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-gold transition-colors">Отзывы</button></li>
              <li><button onClick={() => scrollToSection('blog')} className="text-sm hover:text-gold transition-colors">Блог</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-sm hover:text-gold transition-colors">Контакты</button></li>
            </ul>
            <Button onClick={() => scrollToSection('consultation')} className="bg-gold hover:bg-gold/90 text-white">
              Консультация
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1 bg-gold/10 text-gold rounded-full text-sm mb-6">
                Психологическая поддержка премиум-класса
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Путь к гармоничным отношениям
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Помогаю успешным женщинам 35–55 лет преодолеть эмоциональные трудности после развода, 
                избавиться от повторяющихся сценариев и построить здоровые, наполненные любовью отношения.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('consultation')} size="lg" className="bg-gold hover:bg-gold/90 text-white">
                  Записаться на консультацию
                </Button>
                <Button onClick={() => scrollToSection('about')} size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/abe81de9-9ffe-4a68-819c-780381a732fd/files/dd3f446a-54a5-4a46-bd49-56f2c92418c3.jpg"
                alt="Светлана Блинова - психолог"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gold/20 hover:shadow-2xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-pointer group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Icon name="Heart" className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">Эмоциональное исцеление</h3>
                <p className="text-muted-foreground">Преодоление боли разрыва и обретение внутренней гармонии</p>
              </CardContent>
            </Card>
            <Card className="border-gold/20 hover:shadow-2xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-pointer group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Icon name="RefreshCcw" className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">Разрыв сценариев</h3>
                <p className="text-muted-foreground">Освобождение от повторяющихся деструктивных паттернов</p>
              </CardContent>
            </Card>
            <Card className="border-gold/20 hover:shadow-2xl hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-pointer group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Icon name="Sparkles" className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">Новые отношения</h3>
                <p className="text-muted-foreground">Построение здоровых, гармоничных и счастливых связей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Я — Светлана Блинова, практикующий психолог с более чем 15-летним опытом работы. 
              Моя специализация — помощь успешным женщинам в преодолении эмоциональных трудностей 
              после развода или расставания.
            </p>
            <p>
              За годы практики я помогла сотням женщин обрести внутреннюю гармонию, преодолеть 
              страх новых отношений и построить счастливую личную жизнь. Моя работа основана на 
              глубоком понимании женской психологии и современных терапевтических методиках.
            </p>
            <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-lg mt-8">
              <p className="text-primary font-medium italic">
                "Каждая женщина заслуживает быть счастливой и любимой. Моя задача — помочь вам 
                освободиться от прошлого и открыть сердце для новых, здоровых отношений."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Услуги</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gold/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="UserCheck" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Индивидуальная терапия</h3>
                    <p className="text-muted-foreground mb-4">
                      Глубокая проработка эмоциональных травм, страхов и деструктивных паттернов. 
                      Работа с самооценкой и внутренними конфликтами.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Когнитивно-поведенческая терапия (КПТ)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Схема-терапия
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Гештальт-подход
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HeartHandshake" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Работа с отношениями</h3>
                    <p className="text-muted-foreground mb-4">
                      Анализ повторяющихся сценариев, работа со страхом близости, 
                      построение здоровых границ в отношениях.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Транзактный анализ
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Системная семейная терапия
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Эмоционально-фокусированная терапия
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Compass" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Кризисная поддержка</h3>
                    <p className="text-muted-foreground mb-4">
                      Помощь в острый период после развода или расставания. 
                      Экстренная психологическая поддержка и стабилизация состояния.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Кризисная интервенция
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        EMDR-терапия
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Майндфулнес практики
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Программы трансформации</h3>
                    <p className="text-muted-foreground mb-4">
                      Комплексные программы по проработке глубинных причин неудач в отношениях 
                      и создание фундамента для счастливого будущего.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Психодинамическая терапия
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Нарративная терапия
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        Интегративный подход
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 42 года",
                text: "После развода я была уверена, что счастливые отношения — это не для меня. Работа со Светланой помогла мне понять корни моих проблем и научиться строить здоровые отношения. Сейчас я в счастливом браке!",
                rating: 5
              },
              {
                name: "Анна, 38 лет",
                text: "Светлана — профессионал высочайшего уровня. Она помогла мне избавиться от деструктивных паттернов, которые преследовали меня всю жизнь. Я наконец-то чувствую себя свободной и готовой к новым отношениям.",
                rating: 5
              },
              {
                name: "Мария, 45 лет",
                text: "Благодарю Светлану за чуткость, профессионализм и терпение. После двух разводов я боялась даже думать о новых отношениях. Теперь я понимаю свои ошибки и знаю, как строить счастливую жизнь.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-gold/20">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-gold" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Блог</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
            <p className="text-muted-foreground mt-4">Полезные статьи о психологии отношений</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 признаков деструктивных отношений",
                excerpt: "Как распознать токсичные паттерны в отношениях и что с ними делать.",
                date: "15 января 2024"
              },
              {
                title: "Как преодолеть страх новых отношений",
                excerpt: "Практические рекомендации по работе со страхом близости после развода.",
                date: "8 января 2024"
              },
              {
                title: "Почему мы выбираем не тех партнеров",
                excerpt: "Глубинные причины повторяющихся сценариев в личной жизни.",
                date: "2 января 2024"
              }
            ].map((post, idx) => (
              <Card key={idx} className="border-gold/20 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-8">
                  <div className="text-sm text-gold mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-gold p-0 h-auto">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Запись на консультацию</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
            <p className="text-muted-foreground mt-4">Сделайте первый шаг к счастливым отношениям</p>
          </div>
          <Card className="border-gold/20">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о вашей ситуации</label>
                  <Textarea 
                    placeholder="Опишите, с чем вы хотели бы поработать..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-white">
                  Отправить заявку
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Я свяжусь с вами в течение 24 часов для согласования времени консультации
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-gold" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-gold" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@blinova-psy.ru</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-gold" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Тверская, 15</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Светлана Блинова. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-gold">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;