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
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-blue-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] xl:grid xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-10 xl:px-6">
        <div className="min-w-0">
          <section className="mx-auto max-w-5xl px-4 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 md:pb-16 md:pt-28 lg:px-8">
            <div className="max-w-4xl">
              <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:mb-6 sm:text-xs">
                Стратегия бренда
              </span>

              <h1 className="mb-6 text-[clamp(2rem,7vw,4.4rem)] font-extrabold leading-[0.94] tracking-tight sm:mb-8">
                Личный бренд и лицо бренда:
                <span className="text-blue-600"> в чём разница</span>
              </h1>

              <p className="mb-4 text-[clamp(1.05rem,2.8vw,1.5rem)] leading-relaxed text-neutral-500 sm:mb-6">
                Путаница между этими двумя понятиями, одна из самых распространённых
                среди тех, кто только начинает выстраивать своё присутствие в публичном
                пространстве.
              </p>

              <p className="max-w-3xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed text-neutral-400">
                На первый взгляд кажется, что если вы появляетесь в соцсетях от своего
                имени и с живым лицом, то личный бренд у вас уже есть. На самом деле
                лицо бренда и личный бренд, это разные уровни одной системы, и
                понимание этой разницы меняет подход к продвижению целиком.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 sm:pb-12 md:pb-14 lg:px-8">
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_16px_50px_rgba(0,0,0,0.05)] sm:p-6 md:p-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                Оглавление
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {articleNav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:text-[15px]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section
            id="brand-vs-person"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Ключевое различие</SectionLabel>

            <h2 className="mb-8 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-tight sm:mb-10 md:mb-12">
              Лицо бренда, это видимость,
              <br className="hidden md:block" />
              личный бренд, это система
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-[#f8faff] to-[#eef3ff] p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:mb-5">
                  01
                </div>

                <h3 className="mb-3 text-lg font-bold sm:text-xl">Лицо бренда</h3>

                <p className="text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
                  Человек, которого аудитория ассоциирует с компанией или проектом. Его
                  видят, ему доверяют на уровне первого впечатления, через него
                  складывается образ. Это может быть основатель, эксперт или
                  приглашённый амбассадор, главное, что именно он стоит в точке
                  контакта между брендом и его аудиторией.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white sm:mb-5">
                  02
                </div>

                <h3 className="mb-3 text-lg font-bold sm:text-xl">Личный бренд</h3>

                <p className="text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
                  То, что стоит за этим человеком: его ценности, позиционирование,
                  голос, история, репутация и то, как всё это воспринимается рынком.
                  Сильный личный бренд строится годами и держится на глубоко
                  проработанной основе. Смотреть на них как на одно и то же, значит
                  работать вполсилы.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          <section
            id="brand-foundation"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Часть 1</SectionLabel>

            <h2 className="mb-3 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-tight sm:mb-4">
              Из чего складывается основа личного бренда
            </h2>

            <p className="mb-8 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed text-neutral-500 sm:mb-10 md:mb-12">
              В основании бренда всегда находятся несколько взаимосвязанных элементов.
              Ни один из них не работает в отрыве от остальных, именно там, где они
              пересекаются, формируется то, что аудитория считывает как целостный
              образ.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {brandFoundations.map((item, i) => (
                <FoundationCard key={item.title} index={i} {...item} />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-600/20 bg-gradient-to-br from-[#f0f4ff] to-[#fafbff] p-6 text-center shadow-lg sm:mt-10 sm:rounded-3xl sm:p-7 md:p-8">
              <p className="mb-3 text-sm font-semibold text-blue-600">
                Ключевой принцип
              </p>

              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
                Все шесть элементов пересекаются в одной точке, и именно там
                рождается основа бренда. Миссия определяет направление, ценности
                задают правила, позиционирование объясняет отличие, голос делает
                бренд узнаваемым, история добавляет человечность, а личность
                удерживает доверие.
              </p>
            </div>
          </section>

          <Divider />

          <section
            id="byredo-case"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Кейс</SectionLabel>

            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold tracking-tight sm:mb-3">
                  Пример: Byredo
                </h2>

                <p className="max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Наглядный пример того, как личность основателя становится несущей
                  конструкцией всего бренда.
                </p>
              </div>

              <div className="hidden text-5xl font-bold text-neutral-200 md:block lg:text-6xl">
                ↗
              </div>
            </div>

            <div className="mb-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-lg sm:mb-6 sm:rounded-3xl sm:p-6 md:p-8">
              <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                Бен Горхэм, бывший баскетболист со шведско-индийскими корнями,
                человек из арт-среды с нестандартной биографией. Именно его история
                легла в основу концепции: каждый аромат создаётся как воспоминание
                или культурная сцена, а не просто как парфюм. Личный бренд Горхэма
                не существует отдельно от Byredo, он и есть его суть.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {byredoCaseCards.map((card) => (
                <CaseCard key={card.tag} {...card} />
              ))}
            </div>
          </section>

          <Divider />

          <section
            id="growth-mechanics"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Механика роста</SectionLabel>

            <h2 className="mb-6 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-tight sm:mb-8">
              Почему личный бренд ускоряет рост компании
            </h2>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Пока блог агентства, Telegram-канал, сайт и личная страница
                  существуют отдельно, аудитория не видит за ними живого человека.
                  Как только владелец начинает транслировать свои ценности и делиться
                  тем, как он думает о своём деле, отношение меняется.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-600 p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
                  Люди приходят на людей, а не на логотипы, и это не метафора, а
                  измеримая реальность. Когда аудитория считывает ценности, голос и
                  позицию человека, доверие к компании растёт органически, без
                  дополнительных вложений в рекламу.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-600/15 bg-gradient-to-br from-[#f0f4ff] to-[#fafbff] p-6 shadow-lg sm:rounded-3xl sm:p-7 md:p-10">
              <div className="mb-5 flex items-start gap-4 sm:mb-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-base font-bold text-white sm:h-12 sm:w-12">
                  ★
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                    Кейс из практики
                  </p>

                  <h3 className="text-lg font-bold sm:text-xl">
                    С нуля до роста за месяц
                  </h3>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Эксперт по личному бренду, имиджу и архетипам, специалист в нише
                стиля. По итогам анализа первых 48 часов картина была однозначной:
                человека на его площадках попросту не было видно. Ни личности, ни
                голоса, ни понятного ответа на вопрос, почему именно здесь стоит
                остаться и довериться. Блог стагнировал три года подряд, без
                запросов, без консультаций, без движения в продажах.
              </p>

              <p className="mb-6 text-sm leading-relaxed text-neutral-600 sm:mb-8 sm:text-base">
                Работу начали с фундамента: стали раскрывать ценности эксперта, его
                мироощущение и то, как он рассуждает о своей теме. Аудитория получила
                возможность задавать вопросы и получать ответы, сформировалось
                доверительное пространство, в котором стало комфортно покупать.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {caseMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm sm:p-5"
                  >
                    <div className="mb-1 text-2xl font-bold text-blue-600">
                      {m.value}
                    </div>

                    <div className="text-xs leading-tight text-neutral-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-xs leading-relaxed text-neutral-400 sm:mt-6 sm:text-sm">
                Холодная аудитория · без вложений в рекламу · органический трафик
              </p>
            </div>
          </section>

          <Divider />

          <section
            id="brand-promotion"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Часть 2</SectionLabel>

            <h2 className="mb-3 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-tight sm:mb-4">
              Продвижение бренда: двигаться поэтапно
            </h2>

            <p className="mb-10 max-w-xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed text-neutral-500 sm:mb-12 md:mb-16">
              После того как основа проработана, начинается следующий уровень. Здесь
              тоже важна последовательность, каждый этап опирается на предыдущий.
            </p>

            <div className="relative">
              <div className="absolute bottom-5 left-[21px] top-5 hidden w-px bg-neutral-200 sm:block" />

              <div className="flex flex-col gap-4 sm:gap-5">
                {roadmapSteps.map((step, index) => (
                  <RoadmapCard key={step.title} step={index + 1} {...step} />
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section
            id="glossier-case"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8"
          >
            <SectionLabel>Кейс</SectionLabel>

            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold tracking-tight sm:mb-3">
                  Пример: Glossier
                </h2>

                <p className="max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Как простая идея стала системой продвижения, разбор по семи этапам.
                </p>
              </div>
            </div>

            <div className="mb-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-lg sm:mb-6 sm:rounded-3xl sm:p-6 md:p-8">
              <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                Эмили Вайс запустила бренд с идеи, которую можно сформулировать одной
                фразой: не скрывать лицо косметикой, а подчёркивать естественную
                красоту. Бренд одним из первых начал репостить своих клиентов и
                строить продукт вместе с аудиторией.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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

          <section
            id="conclusion"
            className="scroll-mt-28 mx-auto max-w-5xl px-4 py-14 pb-24 sm:px-6 sm:py-16 sm:pb-28 md:py-20 md:pb-32 lg:px-8"
          >
            <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
              <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-blue-600 sm:mb-10" />

              <SectionLabel>Вывод</SectionLabel>

              <h2 className="mb-5 text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-snug tracking-tight sm:mb-6">
                Лицо бренда и личный бренд, не синонимы, но они неразрывно связаны
              </h2>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                  Лицо бренда
                </p>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  Точка входа, первый контакт, видимость. Без живого человека за
                  брендом даже самая выверенная стратегия работает в половину своего
                  потенциала.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                  Личный бренд
                </p>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  То, что удерживает, формирует доверие и превращает случайного
                  читателя в лояльного клиента. Без проработанной основы лицо бренда
                  остаётся просто картинкой.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-center shadow-lg sm:rounded-3xl sm:p-8 md:p-10">
              <p className="mx-auto max-w-2xl text-[clamp(1rem,2.5vw,1.25rem)] font-medium leading-relaxed text-white">
                Именно поэтому выстраивать личный бренд стоит не тогда, когда уже
                есть аудитория, а с самого начала, как фундамент, на котором
                строится всё остальное.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50 sm:text-base"
              >
                Задать вопрос
              </a>
            </div>
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-28">
            <div className="rounded-3xl border border-neutral-200 bg-white/90 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-md">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
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
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </aside>
      </div>
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
      "Определяют, как вы работаете и с кем. Именно ценности проявляются в моментах выбора, от тона публикации до реакции на критику в комментариях.",
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
      "Тон, язык и характер коммуникации, который должен быть узнаваемым независимо от площадки и формата, в сторис, в лонгриде, в ответе на сообщение.",
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
    body: "Жители крупных городов, уставшие от массового люксового рынка. Люди, которые читают между строк и замечают детали, в упаковке, в тексте, в концепции.",
  },
  {
    tag: "Продукт",
    title: "Запах как культурная сцена",
    body: "Каждый аромат, это воспоминание или эмоция, а не просто парфюм. Такой подход превращает покупку в акт идентификации, а не просто потребления.",
  },
  {
    tag: "История",
    title: "Аутсайдер без профильного образования",
    body: "Бен Горхэм, бывший баскетболист со шведско-индийскими корнями. Отсутствие традиционного парфюмерного бэкграунда стало частью позиционирования: свежий взгляд вместо академической закостенелости.",
  },
  {
    tag: "Личность",
    title: "Молчаливая уверенность",
    body: "Минималистичная упаковка, редкие интервью, дистрибуция через избранные бутики. Бренд почти не объясняет себя, и именно это говорит об уверенности, которой не нужна громкая реклама.",
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
    body: "Редакторы вместо продавцов, сотрудники, которые рекомендовали, а не продавали. Это полностью изменило тон коммуникации во всех точках контакта.",
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
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="border-t border-neutral-100" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
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
      className={`rounded-2xl border border-neutral-200 p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6 md:p-7 ${
        index % 2 === 0 ? "bg-white" : "bg-neutral-50"
      }`}
    >
      <div className="mb-4 text-xl text-blue-600">{icon}</div>

      <h3 className="mb-3 text-lg font-bold tracking-tight">{title}</h3>

      <p className="text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
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
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:p-6 md:p-8">
      <span className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
        {tag}
      </span>

      <h3 className="mb-4 text-lg font-bold leading-snug tracking-tight">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
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
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-sm font-bold text-blue-600 shadow-md sm:h-11 sm:w-11">
        {step}
      </div>

      <div className="flex-1 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg sm:p-5 md:p-6">
        <h3 className="mb-2 text-base font-bold tracking-tight">{title}</h3>

        <p className="text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
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
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-lg sm:p-6 md:p-7 ${className}`}
    >
      <span className="mb-4 block text-[11px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
        {tag}
      </span>

      <p className="text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
        {body}
      </p>
    </div>
  );
}