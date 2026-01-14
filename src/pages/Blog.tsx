import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      title: "Почему мы повторяем одни и те же ошибки в отношениях",
      excerpt: "Разбираемся, почему снова и снова выбираем не тех партнёров и попадаем в знакомые деструктивные сценарии.",
      date: "12 января 2024",
      readTime: "8 мин",
      content: `
        <p>После каждого разрыва мы клянёмся себе: «Больше никогда». Но проходит время, и мы снова оказываемся в похожей ситуации. Почему так происходит?</p>
        
        <h3>Что такое повторяющиеся сценарии</h3>
        <p>Это неосознаваемые паттерны поведения, которые мы воспроизводим в отношениях раз за разом. Например:</p>
        <ul>
          <li>Вы всегда выбираете эмоционально недоступных мужчин</li>
          <li>В отношениях берёте на себя роль спасателя</li>
          <li>Повторяется сценарий измен или предательства</li>
          <li>Вы снова и снова теряете себя в отношениях</li>
        </ul>
        
        <h3>Откуда берутся эти сценарии</h3>
        <p>Корни повторяющихся паттернов уходят в детство. Мы усваиваем модели отношений, которые видели в родительской семье, и неосознанно переносим их во взрослую жизнь.</p>
        
        <h3>Как разорвать круг</h3>
        <ol>
          <li><strong>Осознание.</strong> Первый шаг — увидеть повторяющийся паттерн</li>
          <li><strong>Понимание причин.</strong> Найти источник сценария в прошлом опыте</li>
          <li><strong>Проработка.</strong> Освободиться от старых убеждений и моделей</li>
          <li><strong>Новый опыт.</strong> Создать здоровые отношения на новой основе</li>
        </ol>
      `
    },
    {
      title: "Страх новых отношений после развода: что делать",
      excerpt: "Развод закончился, но вы не можете открыться новому человеку? Это нормально. Разбираем, как преодолеть страх.",
      date: "5 января 2024",
      readTime: "10 мин",
      content: `
        <p>«Я больше никому не доверю», «Все мужчины одинаковые», «Я не готова открывать сердце снова» — знакомо? После болезненного развода страх новых отношений абсолютно естественен.</p>
        
        <h3>Почему возникает страх</h3>
        <p>Страх новых отношений — это защитная реакция психики. После травмы развода мы инстинктивно закрываемся, чтобы не испытать боль снова. Основные причины:</p>
        <ul>
          <li><strong>Страх повторения.</strong> «А вдруг снова будет так же больно?»</li>
          <li><strong>Недоверие.</strong> Способность доверять серьёзно пострадала</li>
          <li><strong>Низкая самооценка.</strong> «Я недостаточно хороша для здоровых отношений»</li>
          <li><strong>Страх уязвимости.</strong> Открыться — значит стать беззащитной</li>
        </ul>
        
        <h3>Как работать со страхом</h3>
        <p>Важно понимать: страх не исчезнет сам по себе. С ним нужно работать:</p>
        <ol>
          <li><strong>Признать страх.</strong> Не отрицать его, а принять как данность</li>
          <li><strong>Проработать прошлое.</strong> Завершить незакрытые гештальты</li>
          <li><strong>Восстановить доверие к себе.</strong> Научиться прислушиваться к своим чувствам</li>
          <li><strong>Двигаться постепенно.</strong> Не торопиться с новыми отношениями</li>
        </ol>
        
        <p>Страх — это не приговор. Это сигнал, что ваша психика нуждается в проработке и исцелении.</p>
      `
    },
    {
      title: "Как пережить развод и начать заново",
      excerpt: "Пошаговое руководство по эмоциональному восстановлению после расставания и возвращению к полноценной жизни.",
      date: "28 декабря 2023",
      readTime: "12 мин",
      content: `
        <p>Развод — это всегда потеря. Потеря отношений, общих планов, привычного уклада жизни. Даже если решение было правильным, боль неизбежна.</p>
        
        <h3>Стадии переживания развода</h3>
        <p>Развод — это процесс горевания, который проходит несколько этапов:</p>
        <ol>
          <li><strong>Шок и отрицание.</strong> «Этого не может быть»</li>
          <li><strong>Гнев.</strong> На партнёра, на себя, на обстоятельства</li>
          <li><strong>Торг.</strong> «Может, всё ещё можно исправить?»</li>
          <li><strong>Депрессия.</strong> Острая боль и пустота</li>
          <li><strong>Принятие.</strong> «Это случилось, и я справлюсь»</li>
        </ol>
        
        <h3>Что помогает в процессе восстановления</h3>
        <ul>
          <li><strong>Позвольте себе грустить.</strong> Слёзы — это здоровая реакция на потерю</li>
          <li><strong>Не изолируйтесь.</strong> Поддержка близких критически важна</li>
          <li><strong>Заботьтесь о теле.</strong> Сон, еда, движение влияют на эмоции</li>
          <li><strong>Обратитесь к психологу.</strong> Профессиональная помощь ускоряет процесс</li>
        </ul>
        
        <h3>Когда пора начинать новую жизнь</h3>
        <p>Признаки готовности двигаться дальше:</p>
        <ul>
          <li>Вы можете думать о бывшем партнёре без острой боли</li>
          <li>Появляются новые интересы и планы</li>
          <li>Вы перестали винить себя или партнёра</li>
          <li>Есть интерес к знакомствам, но без отчаянной потребности</li>
        </ul>
        
        <p>Помните: время не лечит. Лечит проработка. Не ждите, что боль пройдёт сама — активно работайте над своим восстановлением.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Блог психолога | Статьи про отношения после развода - Blinova-psy.ru"
        description="Полезные статьи о восстановлении после развода, повторяющихся сценариях в отношениях, преодолении страхов. Практические советы психолога."
        keywords="психология отношений, развод советы, как пережить развод, страх новых отношений, повторяющиеся ошибки в отношениях"
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-primary">Blinova-psy.ru</Link>
            <ul className="hidden md:flex items-center gap-8">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Услуги</Link></li>
              <li><Link to="/blog" className="text-sm text-accent font-medium">Блог</Link></li>
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Блог</h1>
            <p className="text-lg text-muted-foreground">Статьи о психологии отношений и восстановлении после развода</p>
          </div>

          <div className="space-y-8">
            {articles.map((article, idx) => (
              <Card key={idx} className="border-muted hover:border-accent/50 transition-all group cursor-pointer">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="text-accent p-0 h-auto group-hover:gap-2 transition-all">
                    Читать статью <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">Нужна личная консультация?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Статьи дают понимание, но настоящие изменения происходят в терапии. 
              Запишитесь на первую встречу и начните путь к здоровым отношениям.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contacts">Записаться на консультацию</Link>
            </Button>
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

export default Blog;
