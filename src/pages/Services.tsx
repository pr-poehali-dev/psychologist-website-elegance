import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Услуги психолога | Консультации после развода - Blinova-psy.ru"
        description="Профессиональные психологические консультации для женщин после развода. Онлайн и очно в Москве. Индивидуальный подход, проверенные методики."
        keywords="психолог консультации, психолог онлайн, психолог москва, консультация психолога цена, помощь после развода"
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-primary">Blinova-psy.ru</Link>
            <ul className="hidden md:flex items-center gap-8">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-sm text-accent font-medium">Услуги</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-sm hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contacts">Записаться</Link>
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Услуги</h1>
            <p className="text-lg text-muted-foreground">Профессиональная психологическая поддержка</p>
          </div>

          <div className="space-y-12">
            <Card className="border-muted">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Video" className="text-accent" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Онлайн-консультации</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Полноценная психологическая помощь из любой точки мира. Работаем через Zoom или Skype 
                      в удобное для вас время. Такая же эффективность, как при очной встрече.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>Удобный формат — консультация из дома в комфортной обстановке</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>Экономия времени — не нужно тратить время на дорогу</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>Конфиденциальность — работаем в защищённых платформах</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" className="text-accent" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Очные консультации в Москве</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Личные встречи в уютном кабинете в центре Москвы. Создаю безопасное пространство, 
                      где вы можете открыто говорить о своих переживаниях.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="MapPin" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="font-medium text-primary">Адрес кабинета:</p>
                          <p>Москва, ул. Усачева, д. 3, этаж 1</p>
                          <p className="text-sm mt-1">Удобная транспортная доступность, 5 минут от метро</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>Уютная атмосфера — располагающий к откровенности интерьер</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>Личный контакт — возможность работы с телом и невербальными сигналами</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-accent" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Что входит в консультацию</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Каждая встреча — это глубокая проработка ваших запросов с использованием проверенных 
                      терапевтических методов.
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-accent">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Диагностика и анализ ситуации</p>
                          <p className="text-sm">Выявление глубинных причин повторяющихся сценариев</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-accent">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Работа с эмоциями</p>
                          <p className="text-sm">Проработка боли, страхов, гнева и обид после развода</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-accent">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Изменение паттернов</p>
                          <p className="text-sm">Формирование новых здоровых моделей поведения в отношениях</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-accent">4</span>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Практические инструменты</p>
                          <p className="text-sm">Техники и упражнения для самостоятельной работы между сессиями</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-primary mb-8">Стоимость консультаций</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-muted hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="text-accent text-sm font-medium mb-2">ПЕРВАЯ ВСТРЕЧА</div>
                  <div className="text-4xl font-bold text-primary mb-2">4 500 ₽</div>
                  <div className="text-muted-foreground text-sm mb-6">50 минут</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Знакомство и диагностика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Определение запроса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>План работы</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contacts">Записаться</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent shadow-md scale-105">
                <CardContent className="pt-8 text-center">
                  <div className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-3">ПОПУЛЯРНОЕ</div>
                  <div className="text-accent text-sm font-medium mb-2">ПОЛНАЯ КОНСУЛЬТАЦИЯ</div>
                  <div className="text-4xl font-bold text-primary mb-2">8 000 ₽</div>
                  <div className="text-muted-foreground text-sm mb-6">60 минут</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Глубокая проработка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Все методики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Домашние задания</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link to="/contacts">Записаться</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-muted hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="text-accent text-sm font-medium mb-2">ПАКЕТ 10 ВСТРЕЧ</div>
                  <div className="text-4xl font-bold text-primary mb-2">72 000 ₽</div>
                  <div className="text-muted-foreground text-sm mb-1">по 60 минут</div>
                  <div className="text-accent text-xs mb-6">Выгода 8 000 ₽</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Полная трансформация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Системная работа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Поддержка в чате</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/contacts">Записаться</Link>
                  </Button>
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

export default Services;
