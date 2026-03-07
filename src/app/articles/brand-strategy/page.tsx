"use client";

import { useEffect, useState } from "react";

const articleNav = [
  { id: "brand-vs-person", label: "Лицо бренда и личный бренд" },
  { id: "brand-foundation", label: "Основа личного бренда" },
  { id: "byredo-case", label: "Кейс Byredo" },
  { id: "growth-mechanics", label: "Почему личный бренд ускоряет рост" },
  { id: "brand-promotion", label: "Продвижение бренда" },
  { id: "glossier-case", label: "Кейс Glossier" },
  { id: "conclusion", label: "Вывод" },
];

export default function BrandStrategyPage() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(articleNav[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      let current = articleNav[0].id;

      for (const item of articleNav) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          current = item.id;
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen text-neutral-900">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-blue-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Sticky navigation desktop */}
      <aside className="hidden xl:block fixed right-6 top-28 z-40 w-64">
        <div className="rounded-3xl border border-neutral-200 bg-white/90 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.06)] p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-4">
            Навигация по статье
          </p>

          <nav className="space-y-2">
            {articleNav.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block rounded-2xl px-3 py-2 text-sm leading-snug transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16">
        <div className="max-w-4xl">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-5 sm:mb-6 text-blue-600">
            Стратегия бренда
          </span>

          <h1 className="text-[clamp(2rem,7vw,4.4rem)] font-extrabold leading-[0.94] tracking-tight mb-6 sm:mb-8">
            Личный бренд и лицо бренда:
            <span className="text-blue-600"> в чём разница</span>
          </h1>

          <p className="text-[clamp(1.05rem,2.8vw,1.5rem)] text-neutral-500 leading-relaxed mb-4 sm:mb-6">
            Путаница между этими двумя понятиями — одна из самых распространённых
            среди тех, кто только начинает выстраивать своё присутствие в публичном
            пространстве.
          </p>

          <p className="text-[clamp(1rem,2.3vw,1.125rem)] text-neutral-400 leading-relaxed max-w-3xl">
            На первый взгляд кажется, что если вы появляетесь в соцсетях от своего
            имени и с живым лицом, то личный бренд у вас уже есть. На самом деле
            лицо бренда и личный бренд — это разные уровни одной системы, и
            понимание этой разницы меняет подход к продвижению целиком.
          </p>
        </div>
      </section>

      {/* Оглавление */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 md:pb-14">
        <div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.05)] p-5 sm:p-6 md:p-8">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 mb-4">
            Оглавление
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {articleNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm sm:text-[15px] text-neutral-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ЛИЦО vs ЛИЧНЫЙ БРЕНД */}
      <section
        id="brand-vs-person"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Ключевое различие</SectionLabel>

        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight">
          Лицо бренда — это видимость,
          <br className="hidden md:block" />
          личный бренд — это система
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-neutral-200 shadow-lg bg-gradient-to-br from-[#f8faff] to-[#eef3ff]">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 sm:mb-5 text-white text-sm font-bold bg-blue-600">
              01
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3">Лицо бренда</h3>

            <p className="text-neutral-500 leading-relaxed text-sm sm:text-[15px]">
              Человек, которого аудитория ассоциирует с компанией или проектом. Его
              видят, ему доверяют на уровне первого впечатления, через него
              складывается образ. Это может быть основатель, эксперт или
              приглашённый амбассадор, главное, что именно он стоит в точке
              контакта между брендом и его аудиторией.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-neutral-200 shadow-lg bg-white">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 sm:mb-5 text-white text-sm font-bold bg-neutral-900">
              02
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3">Личный бренд</h3>

            <p className="text-neutral-500 leading-relaxed text-sm sm:text-[15px]">
              То, что стоит за этим человеком: его ценности, позиционирование,
              голос, история, репутация и то, как всё это воспринимается рынком.
              Сильный личный бренд строится годами и держится на глубоко
              проработанной основе. Смотреть на них как на одно и то же — значит
              работать вполсилы.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ОСНОВА ЛИЧНОГО БРЕНДА */}
      <section
        id="brand-foundation"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 1</SectionLabel>

        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight">
          Из чего складывается основа личного бренда
        </h2>

        <p className="text-neutral-500 mb-8 sm:mb-10 md:mb-12 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          В основании бренда всегда находятся несколько взаимосвязанных элементов.
          Ни один из них не работает в отрыве от остальных — именно там, где они
          пересекаются, формируется то, что аудитория считывает как целостный
          образ.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {brandFoundations.map((item, i) => (
            <FoundationCard key={item.title} index={i} {...item} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border shadow-lg text-center border-blue-600/20 bg-gradient-to-br from-[#f0f4ff] to-[#fafbff]">
          <p className="text-sm font-semibold mb-3 text-blue-600">
            Ключевой принцип
          </p>

          <p className="text-neutral-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            Все шесть элементов пересекаются в одной точке — и именно там
            рождается основа бренда. Миссия определяет направление, ценности
            задают правила, позиционирование объясняет отличие, голос делает
            бренд узнаваемым, история добавляет человечность, а личность
            удерживает доверие.
          </p>
        </div>
      </section>

      <Divider />

      {/* КЕЙС BYREDO */}
      <section
        id="byredo-case"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Кейс</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12 gap-3 sm:gap-4">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold tracking-tight mb-2 sm:mb-3">
              Пример: Byredo
            </h2>

            <p className="text-neutral-500 max-w-lg leading-relaxed text-sm sm:text-base">
              Наглядный пример того, как личность основателя становится несущей
              конструкцией всего бренда.
            </p>
          </div>

          <div className="text-neutral-200 text-5xl lg:text-6xl font-bold hidden md:block">
            ↗
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-lg p-5 sm:p-6 md:p-8 mb-5 sm:mb-6 bg-neutral-50">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
            Бен Горхэм — бывший баскетболист со шведско-индийскими корнями,
            человек из арт-среды с нестандартной биографией. Именно его история
            легла в основу концепции: каждый аромат создаётся как воспоминание
            или культурная сцена, а не просто как парфюм. Личный бренд Горхэма
            не существует отдельно от Byredo — он и есть его суть.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {byredoCaseCards.map((card) => (
            <CaseCard key={card.tag} {...card} />
          ))}
        </div>
      </section>

      <Divider />

      {/* МЕХАНИКА РОСТА */}
      <section
        id="growth-mechanics"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Механика роста</SectionLabel>

        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold mb-6 sm:mb-8 tracking-tight leading-tight">
          Почему личный бренд ускоряет рост компании
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-lg p-5 sm:p-6 md:p-8 bg-white">
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Пока блог агентства, Telegram-канал, сайт и личная страница
              существуют отдельно, аудитория не видит за ними живого человека.
              Как только владелец начинает транслировать свои ценности и делиться
              тем, как он думает о своём деле, отношение меняется.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 bg-blue-600">
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
              Люди приходят на людей, а не на логотипы — и это не метафора, а
              измеримая реальность. Когда аудитория считывает ценности, голос и
              позицию человека, доверие к компании растёт органически, без
              дополнительных вложений в рекламу.
            </p>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border shadow-lg p-6 sm:p-7 md:p-10 border-blue-600/15 bg-gradient-to-br from-[#f0f4ff] to-[#fafbff]">
          <div className="flex items-start gap-4 mb-5 sm:mb-6">
            <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white font-bold text-base bg-blue-600">
              ★
            </div>

            <div>
              <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-1 text-blue-600">
                Кейс из практики
              </p>

              <h3 className="text-lg sm:text-xl font-bold">
                С нуля до роста за месяц
              </h3>
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed mb-4 text-sm sm:text-base">
            Эксперт по личному бренду, имиджу и архетипам — специалист в нише
            стиля. По итогам анализа первых 48 часов картина была однозначной:
            человека на его площадках попросту не было видно. Ни личности, ни
            голоса, ни понятного ответа на вопрос, почему именно здесь стоит
            остаться и довериться. Блог стагнировал три года подряд — без
            запросов, без консультаций, без движения в продажах.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            Работу начали с фундамента: стали раскрывать ценности эксперта, его
            мироощущение и то, как он рассуждает о своей теме. Аудитория получила
            возможность задавать вопросы и получать ответы — сформировалось
            доверительное пространство, в котором стало комфортно покупать.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {caseMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-white border border-neutral-200 p-4 sm:p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-bold mb-1 text-blue-600">
                  {m.value}
                </div>

                <div className="text-xs text-neutral-400 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm mt-5 sm:mt-6 text-center leading-relaxed">
            Холодная аудитория · без вложений в рекламу · органический трафик
          </p>
        </div>
      </section>

      <Divider />

      {/* ПРОДВИЖЕНИЕ */}
      <section
        id="brand-promotion"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 2</SectionLabel>

        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight">
          Продвижение бренда: двигаться поэтапно
        </h2>

        <p className="text-neutral-500 mb-10 sm:mb-12 md:mb-16 max-w-xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          После того как основа проработана, начинается следующий уровень. Здесь
          тоже важна последовательность — каждый этап опирается на предыдущий.
        </p>

        <div className="relative">
          <div className="absolute left-[21px] top-5 bottom-5 w-px bg-neutral-200 hidden sm:block" />

          <div className="flex flex-col gap-4 sm:gap-5">
            {roadmapSteps.map((step, index) => (
              <RoadmapCard key={step.title} step={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* КЕЙС GLOSSIER */}
      <section
        id="glossier-case"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Кейс</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 md:mb-12 gap-3 sm:gap-4">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold tracking-tight mb-2 sm:mb-3">
              Пример: Glossier
            </h2>

            <p className="text-neutral-500 max-w-lg leading-relaxed text-sm sm:text-base">
              Как простая идея стала системой продвижения — разбор по семи этапам.
            </p>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-lg p-5 sm:p-6 md:p-8 mb-5 sm:mb-6 bg-neutral-50">
          <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
            Эмили Вайс запустила бренд с идеи, которую можно сформулировать одной
            фразой: не скрывать лицо косметикой, а подчёркивать естественную
            красоту. Бренд одним из первых начал репостить своих клиентов и
            строить продукт вместе с аудиторией.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {glossierCaseCards.map((card, index) => (
            <GlossierCard
              key={card.tag}
              {...card}
              className={
                index === glossierCaseCards.length - 1
                  ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }
            />
          ))}
        </div>
      </section>

      <Divider />

      {/* ФИНАЛЬНЫЙ ВЫВОД */}
      <section
        id="conclusion"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 pb-24 sm:pb-28 md:pb-32"
      >
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <div className="w-12 h-1 mx-auto mb-8 sm:mb-10 rounded-full bg-blue-600" />

          <SectionLabel>Вывод</SectionLabel>

          <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold mb-5 sm:mb-6 tracking-tight leading-snug">
            Лицо бренда и личный бренд — не синонимы, но они неразрывно связаны
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-lg p-5 sm:p-6 md:p-8 bg-white">
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 text-blue-600">
              Лицо бренда
            </p>

            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Точка входа, первый контакт, видимость. Без живого человека за
              брендом даже самая выверенная стратегия работает в половину своего
              потенциала.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 shadow-lg p-5 sm:p-6 md:p-8 bg-white">
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 text-blue-600">
              Личный бренд
            </p>

            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              То, что удерживает, формирует доверие и превращает случайного
              читателя в лояльного клиента. Без проработанной основы лицо бренда
              остаётся просто картинкой.
            </p>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 text-center bg-blue-600">
          <p className="text-white text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed font-medium max-w-2xl mx-auto">
            Именно поэтому выстраивать личный бренд стоит не тогда, когда уже
            есть аудитория, а с самого начала — как фундамент, на котором
            строится всё остальное.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-6 px-6 py-3 rounded-2xl bg-white text-blue-600 font-bold text-sm sm:text-base hover:bg-blue-50 transition"
          >
            Задать вопрос
          </a>
        </div>
      </section>
    </main>
  );
}

const brandFoundations = [
  {
    icon: "◎",
    title: "Миссия",
    description:
      "Отвечает на вопрос, зачем вы вообще делаете то, что делаете. Без чёткого ответа остальные элементы теряют направление и превращаются в набор разрозненных тезисов.",
  },
  {
    icon: "◈",
    title: "Ценности",
    description:
      "Определяют, как вы работаете и с кем. Именно ценности проявляются в моментах выбора — от тона публикации до реакции на критику в комментариях.",
  },
  {
    icon: "◇",
    title: "Позиционирование",
    description:
      "Объясняет, чем вы отличаетесь от других в своей нише и почему это важно для конкретной аудитории, а не для рынка в целом.",
  },
  {
    icon: "◆",
    title: "Голос бренда",
    description:
      "Тон, язык и характер коммуникации, который должен быть узнаваемым независимо от площадки и формата — в сторис, в лонгриде, в ответе на сообщение.",
  },
  {
    icon: "◑",
    title: "История",
    description:
      "Откуда вы пришли, через что прошли и почему этот путь важен для вашей аудитории. История добавляет человеческое измерение, которое нельзя придумать.",
  },
  {
    icon: "◐",
    title: "Личность",
    description:
      "Совокупность черт, которые делают бренд живым и последовательным. Именно личность удерживает доверие на длинной дистанции, когда интерес к контенту временно падает.",
  },
];

const byredoCaseCards = [
  {
    tag: "Аудитория",
    title: "Креативный класс 25–45 лет",
    body: "Жители крупных городов, уставшие от массового люксового рынка. Люди, которые читают между строк и замечают детали — в упаковке, в тексте, в концепции.",
  },
  {
    tag: "Продукт",
    title: "Запах как культурная сцена",
    body: "Каждый аромат — это воспоминание или эмоция, а не просто парфюм. Такой подход превращает покупку в акт идентификации, а не просто потребления.",
  },
  {
    tag: "История",
    title: "Аутсайдер без профильного образования",
    body: "Бен Горхэм — бывший баскетболист со шведско-индийскими корнями. Отсутствие традиционного парфюмерного бэкграунда стало частью позиционирования: свежий взгляд вместо академической закостенелости.",
  },
  {
    tag: "Личность",
    title: "Молчаливая уверенность",
    body: "Минималистичная упаковка, редкие интервью, дистрибуция через избранные бутики. Бренд почти не объясняет себя — и именно это говорит об уверенности, которой не нужна громкая реклама.",
  },
];

const caseMetrics = [
  { value: "+8 000", label: "подписчиков за первый месяц" },
  { value: "5 × 25K", label: "консультации на холодной аудитории" },
  { value: "20 продаж", label: "MVP-продукта за две недели" },
];

const roadmapSteps = [
  {
    title: "Идея кампаний",
    description:
      "Поиск центральной темы, которая честно отражает позиционирование бренда и резонирует с аудиторией в нужный момент времени.",
  },
  {
    title: "Выбор ключевых каналов",
    description:
      "Не все каналы одинаково важны. Приоритет отдаётся площадкам, где аудитория уже находится в нужном контексте и готова воспринимать сообщение.",
  },
  {
    title: "Команда или агентства",
    description:
      "Распределение ролей между теми, кто создаёт контент, управляет бюджетом, анализирует данные и отвечает за коммуникацию с аудиторией.",
  },
  {
    title: "Контент-стратегия",
    description:
      "Система решений о форматах, частоте и темах, которая удерживает единый голос бренда вне зависимости от того, кто пишет конкретный пост.",
  },
  {
    title: "Метрики",
    description:
      "Заранее определённые числа, по которым команда оценивает успех: охват, вовлечённость, конверсия, стоимость привлечения и удержания.",
  },
  {
    title: "Этапы продаж",
    description:
      "Путь человека от первого контакта с брендом до повторной покупки, с чёткими действиями на каждом переходе и ответственным за каждый шаг.",
  },
  {
    title: "Оптимизация показателей",
    description:
      "Регулярный анализ данных, снижение CAC, работа с retention и повторными покупками. Хорошая стратегия всегда находится в процессе уточнения.",
  },
];

const glossierCaseCards = [
  {
    tag: "Идея бренда",
    body: "Не скрывать лицо косметикой, а подчёркивать естественную красоту. Одна фраза, которая задала всё: продукт, тон коммуникации и выбор аудитории.",
  },
  {
    tag: "Каналы",
    body: "Instagram и email-рассылки с первого дня. Намеренный отказ от традиционной рекламы в пользу органического контента и пользовательских публикаций.",
  },
  {
    tag: "Команда",
    body: "Редакторы вместо продавцов — сотрудники, которые рекомендовали, а не продавали. Это полностью изменило тон коммуникации во всех точках контакта.",
  },
  {
    tag: "Контент",
    body: "Пользовательский контент был встроен в стратегию с первого дня. Красивая упаковка с наклейками превращала каждого покупателя в точку распространения бренда.",
  },
  {
    tag: "Метрики",
    body: "Ключевым показателем долгое время была не выручка, а повторные покупки и объём сарафанного радио. Именно эти цифры определяли, какие продукты запускались следующими.",
  },
  {
    tag: "Воронка продаж",
    body: "Контент → комьюнити → доверие → покупка. Предельно простая схема, в которой каждый этап был намеренно спроектирован под конкретное действие аудитории.",
  },
  {
    tag: "Оптимизация",
    body: "Когда бренд вырос, сосредоточились на снижении CAC и работе с retention. Повторные покупки стали главным двигателем роста на следующем этапе.",
  },
];

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-neutral-100" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-600">
      {children}
    </span>
  );
}

function FoundationCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 md:p-7 border border-neutral-200 shadow-lg transition-shadow duration-300 hover:shadow-xl ${
        index % 2 === 0 ? "bg-white" : "bg-neutral-50"
      }`}
    >
      <div className="text-xl mb-4 text-blue-600">{icon}</div>

      <h3 className="font-bold text-lg mb-3 tracking-tight">{title}</h3>

      <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function CaseCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl p-5 sm:p-6 md:p-8 border border-neutral-200 shadow-lg bg-white">
      <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 block text-blue-600">
        {tag}
      </span>

      <h3 className="font-bold text-lg mb-4 tracking-tight leading-snug">
        {title}
      </h3>

      <p className="text-neutral-500 leading-relaxed text-sm sm:text-[15px]">
        {body}
      </p>
    </div>
  );
}

function RoadmapCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 sm:gap-5 items-start">
      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center z-10 shadow-md bg-white font-bold text-sm border-blue-600 text-blue-600">
        {step}
      </div>

      <div className="flex-1 border border-neutral-200 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg bg-white">
        <h3 className="font-bold text-base mb-2 tracking-tight">{title}</h3>

        <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function GlossierCard({
  tag,
  body,
  className = "",
}: {
  tag: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl p-5 sm:p-6 md:p-7 border border-neutral-200 shadow-lg bg-white ${className}`}>
      <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 block text-blue-600">
        {tag}
      </span>

      <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
        {body}
      </p>
    </div>
  );
}