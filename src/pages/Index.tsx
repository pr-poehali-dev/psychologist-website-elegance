import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Психолог после развода | Трансформация отношений без повторения ошибок - Blinova-psy.ru"
        description="Психолог Светлана Блинова помогает успешным женщинам 35-55 лет преодолеть эмоциональные трудности после развода, разорвать повторяющиеся сценарии и построить здоровые отношения."
        keywords="психолог после развода, трансформация отношений, повторяющиеся сценарии в отношениях, страх новых отношений после развода, одиночество после развода, как построить отношения после развода"
        ogImage="https://cdn.poehali.dev/projects/abe81de9-9ffe-4a68-819c-780381a732fd/files/17993705-9d9d-4f37-86d0-c19c7d211b68.jpg"
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-primary">Blinova-psy.ru</Link>
            <ul className="hidden md:flex items-center gap-8">
              <li><Link to="/" className="text-sm text-accent font-medium">Главная</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Услуги</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-sm hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contacts">Записаться</Link>
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Психолог после развода | Трансформация отношений без повторения ошибок
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Помогаю строить отношения, которые не повторяют ошибок прошлого
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contacts">Записаться на первую встречу</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <a href="https://wa.me/79951952858" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/abe81de9-9ffe-4a68-819c-780381a732fd/files/17993705-9d9d-4f37-86d0-c19c7d211b68.jpg"
                alt="Психолог Светлана Блинова"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Если ты сейчас чувствуешь это…
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "HeartCrack", text: "Пустота и потерянность после развода" },
              { icon: "RefreshCcw", text: "Повторяешь одни и те же ошибки в отношениях" },
              { icon: "ShieldAlert", text: "Страх открыться новому человеку" },
              { icon: "UserX", text: "Утратила доверие к мужчинам и к себе" }
            ].map((item, idx) => (
              <Card key={idx} className="border-muted hover:border-accent/50 transition-all group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon as any} className="text-accent" size={24} />
                    </div>
                    <p className="text-lg text-muted-foreground pt-2">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Ты не одна. И это можно изменить.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            В чём я могу тебе помочь?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "После развода",
                description: "Проработаем боль расставания, восстановим эмоциональное равновесие и вернём веру в себя",
                icon: "Heart"
              },
              {
                title: "Повторяющиеся сценарии",
                description: "Выявим глубинные причины деструктивных паттернов и разорвём замкнутый круг",
                icon: "Repeat"
              },
              {
                title: "Страх новых отношений",
                description: "Освободимся от страха близости и создадим здоровую основу для новой любви",
                icon: "Shield"
              },
              {
                title: "Эмоциональное восстановление",
                description: "Вернём внутреннюю гармонию, самоуважение и способность доверять",
                icon: "Sparkles"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-muted hover:shadow-lg hover:border-accent/50 transition-all group">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Icon name={item.icon as any} className="text-accent" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Меня зовут Светлана Блинова. Я практикующий психолог с более чем 15-летним опытом работы. 
              Моя специализация — помощь успешным женщинам 35–55 лет в преодолении эмоциональных трудностей 
              после развода или расставания.
            </p>
            <p>
              За годы практики я помогла сотням женщин разорвать замкнутый круг повторяющихся сценариев, 
              преодолеть страх новых отношений и построить здоровые, гармоничные отношения. 
              Моя работа основана на глубоком понимании женской психологии и проверенных терапевтических методах.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-primary font-medium italic">
                «Я верю, что каждая женщина заслуживает быть счастливой и любимой. 
                Моя задача — помочь вам освободиться от прошлого и создать отношения, 
                о которых вы всегда мечтали.»
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">Методы, которые я использую</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "ДПДГ (EMDR)", desc: "Проработка травматического опыта" },
                { name: "Гештальт-терапия", desc: "Работа с незавершёнными ситуациями" },
                { name: "КПТ", desc: "Изменение деструктивных убеждений" },
                { name: "Эриксоновский гипноз", desc: "Глубинная трансформация" }
              ].map((method, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Icon name="CheckCircle" className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-primary">{method.name}</p>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Истории трансформации</h2>
          <p className="text-center text-muted-foreground mb-12">Реальные результаты моих клиенток</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена, 42 года",
                before: "После двух разводов боялась новых отношений",
                after: "Вышла замуж за любящего мужчину, чувствую себя счастливой"
              },
              {
                name: "Анна, 38 лет",
                before: "Постоянно выбирала эмоционально недоступных мужчин",
                after: "Разорвала деструктивный паттерн, строю здоровые отношения"
              },
              {
                name: "Мария, 45 лет",
                before: "Теряла себя в каждых отношениях",
                after: "Научилась сохранять границы и уважать свои потребности"
              }
            ].map((story, idx) => (
              <Card key={idx} className="border-muted">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                      ))}
                    </div>
                    <p className="font-semibold text-primary mb-2">{story.name}</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground font-medium mb-1">Было:</p>
                      <p className="text-muted-foreground italic">{story.before}</p>
                    </div>
                    <div>
                      <p className="text-accent font-medium mb-1">Стало:</p>
                      <p className="text-muted-foreground">{story.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Стоимость</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-muted hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 text-center">
                <div className="text-accent text-sm font-medium mb-2">ПЕРВАЯ ВСТРЕЧА</div>
                <div className="text-4xl font-bold text-primary mb-2">4 500 ₽</div>
                <div className="text-muted-foreground text-sm mb-6">50 минут</div>
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
                <Button asChild className="w-full" variant="outline">
                  <Link to="/contacts">Записаться</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-accent">
                Как понять, что мне нужна помощь психолога?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Если после развода прошло время, но боль не утихает, вы чувствуете пустоту, не можете начать новые отношения 
                или замечаете, что повторяете одни и те же ошибки — это сигнал обратиться за помощью. Психолог поможет 
                проработать травму и двигаться дальше.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-accent">
                Сколько нужно сессий, чтобы увидеть результат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Первые изменения клиентки замечают уже после 3-4 встреч. Для глубокой проработки и устойчивых изменений 
                рекомендую курс из 10-15 сессий. Всё индивидуально и зависит от вашего запроса и готовности к изменениям.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-accent">
                Чем онлайн-консультация отличается от очной?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                По эффективности онлайн-формат ничем не уступает очным встречам. Разница только в том, что вы находитесь 
                в комфортной домашней обстановке. Многие клиентки выбирают онлайн из-за удобства и экономии времени на дорогу.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-accent">
                Гарантируете ли вы результат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Результат терапии зависит от двух факторов: профессионализма психолога и готовности клиента к изменениям. 
                Я гарантирую профессиональную поддержку, проверенные методики и индивидуальный подход. Ваша часть — 
                быть честной с собой и выполнять рекомендации.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-accent bg-accent/5">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Готова начать новую главу своей жизни?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Запишись на первую встречу и сделай первый шаг к здоровым, счастливым отношениям без повторения ошибок прошлого
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contacts">Записаться на консультацию</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary">
                  <a href="https://wa.me/79951952858" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
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
              <a href="https://instagram.com/blinova_psy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
