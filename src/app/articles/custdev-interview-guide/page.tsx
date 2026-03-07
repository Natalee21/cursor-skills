"use client";

import { useEffect, useState } from "react";

const articleNav = [
  { id: "two-paths", label: "Два пути к продукту" },
  { id: "what-is-custdev", label: "Что такое CustDev" },
  { id: "monetization", label: "Почему CustDev важен для монетизации" },
  { id: "stages", label: "Этапы CustDev" },
  { id: "checklist", label: "Чек лист интервью" },
  { id: "mistakes", label: "Частые ошибки" },
  { id: "implementation", label: "План внедрения" },
  { id: "tools", label: "Инструменты" },
  { id: "conclusion", label: "Вывод" },
];

export default function CustDevPage() {
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
      {/* progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-blue-600 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* sticky navigation desktop */}
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
            Исследования и продукт
          </span>

          <h1 className="text-[clamp(2rem,7vw,4.6rem)] font-extrabold leading-[0.94] tracking-tight mb-6 sm:mb-8">
            Почему важно делать
            <span className="text-blue-600"> CustDev </span>
            при создании любого продукта
          </h1>

          <p className="text-[clamp(1.05rem,2.8vw,1.45rem)] text-neutral-500 leading-relaxed mb-4 sm:mb-6">
            Как один метод помогает избежать дорогостоящих ошибок, выстроить
            точную монетизацию и ускорить рост.
          </p>

          <p className="text-[clamp(1rem,2.3vw,1.125rem)] text-neutral-400 leading-relaxed max-w-3xl">
            CustDev, это не просто интервью с пользователями. Это системный способ
            проверять предположения до того, как вы потратили бюджет на их
            реализацию. Разберём, из чего он состоит, почему работает и как
            внедрить его в свой процесс.
          </p>
        </div>
      </section>

      {/* оглавление */}
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

      {/* 1 */}
      <section
        id="two-paths"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 1</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Два пути к продукту
        </h2>

        <p className="text-neutral-500 mb-10 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Прежде чем говорить о CustDev, стоит понять, какие альтернативы
          существуют и в чём их ограничения.
        </p>

        <ResponsiveTable
          headers={["Подход", "Что делаем", "Когда работает", "Риски"]}
          rows={[
            [
              "Длительная подготовка",
              "Анализ рынка, конкурентов, аудитории, собираем вторичные данные, строим гипотезы за столом.",
              "Когда ресурсы позволяют вложить время в desk research, рынок стабилен, конкуренция прозрачна.",
              "Можно упустить скрытые боли и построить продукт на устаревших предположениях.",
            ],
            [
              "Сразу тестировать гипотезы",
              "Запускаем MVP, A/B тесты, опросы, быстро проверяем идею в реальном мире.",
              "Когда бюджет ограничен, нужен быстрый feedback loop, рынок неопределён.",
              "Есть риск получить шумные данные и не понять, почему пользователь реагирует именно так.",
            ],
          ]}
        />

        <div className="mt-8 rounded-3xl p-6 sm:p-7 md:p-8 border shadow-lg border-blue-600/20 bg-gradient-to-br from-[#f0f4ff] to-[#fafbff]">
          <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
            Оба подхода работают, но эффективность зависит от вашей стратегии и
            доступных ресурсов. CustDev соединяет глубину качественного
            исследования с практической проверкой гипотез и помогает принимать
            решения на основе реального поведения и эмоций пользователей.
          </p>
        </div>
      </section>

      <Divider />

      {/* 2 */}
      <section
        id="what-is-custdev"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 2</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Что такое CustDev и чем он отличается от обычного исследования
        </h2>

        <p className="text-neutral-500 mb-10 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Customer Development, это не просто метод сбора данных. Это способ
          мышления, при котором каждое предположение о продукте нужно проверять
          с реальными людьми.
        </p>

        <ResponsiveTable
          headers={["Понятие", "Определение", "Основное отличие"]}
          rows={[
            [
              "CustDev",
              "Системный процесс выявления проблем клиента, проверки ценностного предложения и построения повторяемой модели продаж.",
              "Фокус на связке проблема, решение, монетизация. Ищем не просто что нравится, а за что готовы платить.",
            ],
            [
              "User Research",
              "Широкий набор методов, количественных, качественных и этнографических, для понимания поведения и мотивации пользователей.",
              "Может быть ориентирован только на улучшение UX без прямой привязки к бизнес модели.",
            ],
            [
              "Обычное интервью",
              "Структурированная беседа по заранее подготовленному списку вопросов.",
              "Ограничено фиксированным набором тем, поэтому легко упустить неочевидные боли.",
            ],
          ]}
        />

        <blockquote className="mt-10 border-l-4 border-blue-600 pl-5 sm:pl-6 py-2">
          <p className="text-[clamp(1.05rem,2.5vw,1.35rem)] text-neutral-700 italic leading-relaxed mb-2">
            Если вы не вышли из здания и не поговорили с реальными клиентами,
            вы просто гадаете.
          </p>

          <cite className="text-sm not-italic text-blue-600 font-semibold">
            Стив Бланк
          </cite>
        </blockquote>
      </section>

      <Divider />

      {/* 3 */}
      <section
        id="monetization"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 3</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Почему CustDev критически важен для монетизации
        </h2>

        <p className="text-neutral-500 mb-12 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Без понимания того, за что люди реально готовы платить, любая ценовая
          модель строится на догадках.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {monetizationPoints.map((point, i) => (
            <div
              key={point.title}
              className="rounded-2xl border border-neutral-200 shadow-lg p-6 sm:p-7 bg-white"
            >
              <div className="text-sm font-bold mb-3 text-blue-600">
                0{i + 1}
              </div>

              <h3 className="font-bold text-base mb-3 tracking-tight">
                {point.title}
              </h3>

              <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 4 */}
      <section
        id="stages"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 4</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Этапы CustDev, от подготовки к рекомендациям
        </h2>

        <p className="text-neutral-500 mb-14 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          CustDev, это не разовое событие, а последовательность шагов, каждый из
          которых опирается на результаты предыдущего.
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 tracking-tight">4.1 Подготовка</h3>

          <Timeline
            items={prepSteps.map((step, i) => ({
              badge: String(i + 1),
              title: step.title,
              body: step.body,
            }))}
          />
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 tracking-tight">
            4.2 Проведение и запись
          </h3>

          <div className="rounded-3xl border border-neutral-200 shadow-lg p-6 sm:p-8 bg-neutral-50">
            <ul className="space-y-3">
              {[
                "Интервью длится 30–60 минут, лично, по видеосвязи или по телефону.",
                "Записываем аудио или видео и параллельно ведём краткие заметки.",
                "Следим за главным правилом, говорим меньше, слушаем больше.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold bg-blue-600">
                    ✓
                  </span>
                  <span className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 tracking-tight">
            4.3 Анализ и формирование рекомендаций
          </h3>

          <ResponsiveTable
            headers={["Направление", "Что смотрим", "Пример вывода"]}
            rows={[
              [
                "Продукт",
                "Интерес к функциям, ценовая чувствительность, пробелы в функционале.",
                "Большая часть респондентов считает отсутствие одной ключевой интеграции критичной для рабочего процесса.",
              ],
              [
                "Коммуникация",
                "Позиционирование, УТП, тон голоса.",
                "Клиенты ассоциируют продукт с надёжностью, а не со скоростью, значит акцент в коммуникации нужно перенести на безопасность.",
              ],
              [
                "Продвижение",
                "Каналы, где ищут решение, путь клиента, воронка.",
                "Основной источник информации, профильные сообщества и профессиональные форумы.",
              ],
            ]}
          />
        </div>
      </section>

      <Divider />

      {/* 5 */}
      <section
        id="checklist"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 5</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Чек лист для успешного глубинного интервью
        </h2>

        <p className="text-neutral-500 mb-10 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Три момента, в которых чаще всего теряется качество исследования.
        </p>

        <ResponsiveTable
          headers={["Этап", "Что проверить", "Почему важно"]}
          rows={checklistRows.map((row) => [
            row.stage,
            row.items.join(" • "),
            row.why,
          ])}
        />
      </section>

      <Divider />

      {/* 6 */}
      <section
        id="mistakes"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 6</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Частые ошибки и как их избегать
        </h2>

        <p className="text-neutral-500 mb-10 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Большинство проблем в CustDev повторяются из проекта в проект, и все
          они решаются простыми изменениями в процессе.
        </p>

        <ResponsiveTable
          headers={["Ошибка", "Почему вредно", "Как исправить"]}
          rows={mistakeRows.map((row) => [row.mistake, row.why, row.fix])}
        />
      </section>

      <Divider />

      {/* 7 */}
      <section
        id="implementation"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Часть 7</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Практический план внедрения CustDev
        </h2>

        <p className="text-neutral-500 mb-12 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Десятинедельный цикл, который переводит методологию в конкретные
          действия с измеримым результатом на каждом этапе.
        </p>

        <Timeline
          items={planRows.map((row) => ({
            badge: row.week,
            title: row.action,
            body: `${row.owner} · ${row.kpi}`,
          }))}
        />
      </section>

      <Divider />

      {/* 8 */}
      <section
        id="tools"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20"
      >
        <SectionLabel>Справочник</SectionLabel>

        <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-4 tracking-tight">
          Инструменты для проведения CustDev
        </h2>

        <p className="text-neutral-500 mb-10 max-w-2xl text-[clamp(1rem,2.3vw,1.125rem)] leading-relaxed">
          Каждый этап исследования требует своего набора инструментов, от поиска
          респондентов до анализа данных.
        </p>

        <ResponsiveTable
          headers={["Цель", "Тип инструментов", "Что даёт"]}
          rows={toolRows.map((row) => [row.goal, row.type, row.benefit])}
        />
      </section>

      <Divider />

      {/* 9 */}
      <section
        id="conclusion"
        className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 pb-24 sm:pb-28 md:pb-32"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-12 h-1 mx-auto mb-10 rounded-full bg-blue-600" />
          <SectionLabel>Вывод</SectionLabel>

          <h2 className="text-[clamp(1.75rem,4.8vw,2.6rem)] font-extrabold mb-6 tracking-tight leading-snug">
            CustDev, ваш компас в условиях неопределённости
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {conclusionCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-neutral-200 shadow-lg p-6 sm:p-7 bg-white"
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                {card.title}
              </p>

              <p className="text-neutral-600 leading-relaxed text-sm sm:text-[15px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl shadow-lg p-8 sm:p-10 text-center bg-blue-600">
          <p className="text-white text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed font-medium max-w-2xl mx-auto">
            Если вы хотите, чтобы ваш продукт не просто выстрелил, а устойчиво
            генерировал прибыль, сделайте CustDev обязательной частью этапа
            обнаружения. Данные, а не предположения, должны вести продукт к
            успеху.
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

const monetizationPoints = [
  {
    title: "Выявление реальной готовности платить",
    body: "Открытые вопросы о прошлом опыте решения проблемы показывают, какие суммы пользователь уже тратил и что он считает справедливой ценой.",
  },
  {
    title: "Формирование точного ценностного предложения",
    body: "Понимание того, какая боль наиболее остра, позволяет сформулировать УТП, которое резонирует с целевой аудиторией и повышает конверсию в платёж.",
  },
  {
    title: "Снижение риска построить неправильный продукт",
    body: "CustDev выявляет ложные предположения на ранней стадии, например, что пользователи готовы платить за функцию, которой не будут пользоваться.",
  },
  {
    title: "Оптимизация маркетинг микса",
    body: "Инсайты о каналах, где аудитория ищет решения, позволяют сосредоточить бюджет на наиболее эффективных точках контакта.",
  },
  {
    title: "База для цикла строим, измеряем, учимся",
    body: "После каждого интервью у вас остаются конкретные гипотезы, которые можно проверить в A/B тестах, на лендингах или в прототипах.",
  },
];

const prepSteps = [
  {
    title: "Чёткая формулировка целей и задач",
    body: "Определите, какие ответы вам нужны. Например, какую сумму пользователи готовы ежемесячно платить за решение этой проблемы.",
  },
  {
    title: "Сегментация респондентов",
    body: "Определите основную и дополнительную целевую аудиторию. Чем точнее сегмент, тем применимее инсайты.",
  },
  {
    title: "Скринер",
    body: "Короткая анкета для отбора релевантных участников. Она отсеивает людей, чей опыт не соответствует задачам исследования.",
  },
  {
    title: "Опросник, гайд",
    body: "Список открытых вопросов, уточняющих и альтернативных, построенный вокруг метода пяти почему.",
  },
];

const checklistRows = [
  {
    stage: "Перед началом",
    items: [
      "выбран чёткий сегмент целевой аудитории",
      "сформулированы 3–5 главных целей",
      "подготовлены скринер и опросник",
      "участник предупреждён о записи",
    ],
    why: "Уменьшаем шум и фокусируемся на релевантных инсайтах.",
  },
  {
    stage: "Во время",
    items: [
      "тема чётко сформулирована",
      "используем открытые вопросы",
      "применяем метод пяти почему",
      "фиксируем эмоции, а не только слова",
      "не навязываем своё мнение",
    ],
    why: "Получаем глубинные и нефильтрованные ответы.",
  },
  {
    stage: "После",
    items: [
      "сразу просматриваем заметки",
      "собираем команду для совместного анализа",
      "выделяем 3–5 ключевых инсайтов",
      "формируем гипотезы для следующего спринта",
    ],
    why: "Быстро превращаем сырые данные в конкретные действия.",
  },
];

const mistakeRows = [
  {
    mistake: "Интервью только с друзьями или коллегами",
    why: "Появляется смещение в сторону позитивного фидбэка, реальные боли не видны.",
    fix: "Используйте скринеры и внешние каналы рекрутмента для поиска незнакомых респондентов.",
  },
  {
    mistake: "Слишком много закрытых вопросов",
    why: "Получаем только да и нет, теряем контекст и эмоции.",
    fix: "Делайте большую часть вопросов открытыми, уточняющие задавайте после того, как человек выговорился.",
  },
  {
    mistake: "Не записываем интервью",
    why: "Нюансы теряются, перепроверить данные невозможно.",
    fix: "Всегда записывайте аудио или видео, предупредив участника заранее.",
  },
  {
    mistake: "Анализ в одиночку",
    why: "Появляются субъективные выводы, паттерны остаются незамеченными.",
    fix: "Проводите дебриф с командой из 2–3 человек и собирайте инсайты вместе.",
  },
  {
    mistake: "Сразу переходим к построению функции",
    why: "Инсайты не проверяются, растёт риск построить ненужное.",
    fix: "Сначала формулируйте гипотезу, потом тестируйте её через MVP, лендинг или сценарий.",
  },
];

const planRows = [
  {
    week: "1",
    action: "Определить целевой сегмент и сформулировать 3–5 бизнес вопросов",
    owner: "PM + маркетолог",
    kpi: "чёткие гипотезы",
  },
  {
    week: "2",
    action: "Подготовить скринер и опросник, 5–7 открытых вопросов",
    owner: "Research lead",
    kpi: "готовый гайд",
  },
  {
    week: "3–4",
    action: "Рекрутмент и проведение 15–20 глубинных интервью по 30–40 минут",
    owner: "Interviewer",
    kpi: "не менее 15 интервью",
  },
  {
    week: "5",
    action: "Транскрибация и первичное кодирование, выделение тем",
    owner: "Analyst",
    kpi: "темы с частотой",
  },
  {
    week: "6",
    action: "Совместный анализ команды, топ 3 инсайта",
    owner: "PM + маркетолог + UX",
    kpi: "принятые решения",
  },
  {
    week: "7",
    action: "Формулировка гипотез для тестирования",
    owner: "PM",
    kpi: "список гипотез",
  },
  {
    week: "8–9",
    action: "Запуск MVP или лендинга, A/B тест или опрос в масштабе",
    owner: "Growth маркетолог",
    kpi: "конверсия / NPS",
  },
  {
    week: "10",
    action: "Ревью результатов, корректировка роадмэпа, следующий спринт",
    owner: "Вся команда",
    kpi: "обновлённый бэклог",
  },
];

const toolRows = [
  {
    goal: "Рекрутмент респондентов",
    type: "Платформы найма участников",
    benefit: "Быстрый доступ к профилированной аудитории и соответствию скринеру.",
  },
  {
    goal: "Собственная база",
    type: "Email рассылки и простые формы",
    benefit: "Нулевая стоимость и полный контроль над отбором.",
  },
  {
    goal: "Проведение интервью",
    type: "Видео звонки с записью",
    benefit: "Удобство для удалённых участников и возможность вернуться к записи.",
  },
  {
    goal: "Транскрибация",
    type: "Сервисы автоматического распознавания речи",
    benefit: "Быстрое преобразование разговора в текст и поиск по ключевым словам.",
  },
  {
    goal: "Анализ качественных данных",
    type: "Инструменты тегирования и визуализации тем",
    benefit: "Командная работа над инсайтами и наглядная структура паттернов.",
  },
  {
    goal: "Тестирование гипотез",
    type: "A/B тесты и масштабные опросы",
    benefit: "Быстрая проверка гипотез на реальной аудитории с измеримым результатом.",
  },
];

const conclusionCards = [
  {
    title: "Снижает риск",
    body: "Позволяет обнаружить ложные предположения до того, как вы потратили бюджет на реализацию.",
  },
  {
    title: "Даёт точное понимание",
    body: "Показывает, за что именно пользователи готовы платить, это фундамент для монетизации.",
  },
  {
    title: "Позволяет быстро итерироваться",
    body: "После каждого интервью остаются чёткие гипотезы, которые можно проверить в реальном мире.",
  },
  {
    title: "Интегрируется в любой процесс",
    body: "Подходит и для стартапа на ранней стадии, и для команды, запускающей новый продукт.",
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

function ResponsiveTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-neutral-200 shadow-lg bg-white">
      <table className="w-full min-w-[780px] text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-neutral-200">
            {headers.map((header) => (
              <th
                key={header}
                className="text-left py-4 px-4 sm:px-5 md:px-6 font-semibold text-neutral-700 bg-neutral-50"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex !== rows.length - 1 ? "border-b border-neutral-100" : ""}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-4 px-4 sm:px-5 md:px-6 align-top leading-relaxed ${
                    cellIndex === 0
                      ? "font-semibold text-neutral-800"
                      : "text-neutral-500"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Timeline({
  items,
}: {
  items: { badge: string; title: string; body: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-[21px] top-4 bottom-4 w-px bg-neutral-200 hidden sm:block" />

      <div className="flex flex-col gap-4 sm:gap-5">
        {items.map((item, i) => (
          <div key={i} className="flex gap-5 items-start">
            <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 shadow-md bg-white font-bold text-sm border-blue-600 text-blue-600">
              {item.badge}
            </div>

            <div className="flex-1 border border-neutral-200 rounded-2xl p-5 sm:p-6 shadow-lg bg-white">
              <p className="font-bold text-sm sm:text-base mb-1">{item.title}</p>
              <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}