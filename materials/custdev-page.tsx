"use client";

// app/articles/custdev/page.tsx

export default function CustDevPage() {
  return (
    <main
      className="bg-white min-h-screen text-neutral-900"
      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif" }}
    >
      {/* ─── HERO ─── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Исследования и продукт
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            Почему важно делать{" "}
            <span style={{ color: "#2b6cff" }}>CustDev</span>{" "}
            при создании любого продукта
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed mb-6">
            Как один метод помогает избежать дорогостоящих ошибок, выстроить точную
            монетизацию и ускорить рост.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            CustDev — это не просто интервью с пользователями. Это системный способ
            проверять предположения до того, как вы потратили бюджет на их реализацию.
            Разберём, из чего он состоит, почему работает и как внедрить его в свой процесс.
          </p>
        </div>
      </section>

      <Divider />

      {/* ─── 1. ДВА ПУТИ К ПРОДУКТУ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 1</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Два пути к продукту
        </h2>
        <p
          className="text-neutral-500 mb-10 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Прежде чем говорить о CustDev, стоит понять, какие альтернативы существуют
          и в чём их ограничения.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "22%" }}>
                  Подход
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "26%" }}>
                  Что делаем
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "26%" }}>
                  Когда работает
                </th>
                <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "26%" }}>
                  Риски
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">
                  Длительная подготовка
                </td>
                <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Анализ рынка, конкурентов, аудитории — собираем вторичные данные, строим гипотезы «за столом»
                </td>
                <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Когда ресурсы позволяют вложить время в desk-research, рынок стабилен, конкуренция прозрачна
                </td>
                <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Можем упустить скрытые боли, построить продукт на устаревших предположениях
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">
                  Сразу тестировать гипотезы
                </td>
                <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Запускаем MVP, A/B-тесты, опросы — быстро проверяем идею в реальном мире
                </td>
                <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Когда бюджет ограничен, нужен быстрый feedback-loop, рынок неопределён
                </td>
                <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Риск получить шумные данные, не понять почему пользователь реагирует именно так
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="mt-8 rounded-3xl p-8 border shadow-lg"
          style={{ borderColor: "#2b6cff33", background: "linear-gradient(135deg, #f0f4ff 0%, #fafbff 100%)" }}
        >
          <p
            className="text-neutral-700 leading-relaxed"
            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
          >
            Оба подхода работают, но <strong>эффективность зависит от вашей стратегии
            и доступных ресурсов</strong>. CustDev — это гибрид: он сочетает глубину
            качественного исследования с практической проверкой гипотез, позволяя
            принимать решения, основанные на реальном поведении и эмоциях пользователей.
          </p>
        </div>
      </section>

      <Divider />

      {/* ─── 2. ЧТО ТАКОЕ CUSTDEV ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 2</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Что такое CustDev и чем он отличается от обычного исследования
        </h2>
        <p
          className="text-neutral-500 mb-10 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Customer Development — это не просто метод сбора данных. Это способ мышления,
          при котором каждое предположение о продукте нужно проверять с реальными людьми.
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "22%" }}>
                  Понятие
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "39%" }}>
                  Определение
                </th>
                <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "39%" }}>
                  Основное отличие
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  term: "CustDev",
                  def: "Системный процесс выявления проблем клиента, проверки ценностного предложения и построения повторяемой модели продаж (Steve Blank, 2005).",
                  diff: "Фокус на связке «проблема — решение — монетизация»: ищем не просто «что нравится», а «за что готовы платить».",
                },
                {
                  term: "User Research",
                  def: "Широкий набор методов — количественных, качественных, этнографических — для понимания поведения и мотивации пользователей.",
                  diff: "Может быть ориентирован только на улучшение UX без прямой привязки к бизнес-модели.",
                },
                {
                  term: "Обычное интервью",
                  def: "Структурированная беседа по заранее подготовленному списку вопросов.",
                  diff: "Ограничено фиксированным набором тем — легко упустить неочевидные боли.",
                },
              ].map((row) => (
                <tr key={row.term} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">{row.term}</td>
                  <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.def}</td>
                  <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Цитата */}
        <blockquote
          className="border-l-4 pl-6 py-2"
          style={{ borderColor: "#2b6cff" }}
        >
          <p className="text-xl text-neutral-700 italic leading-relaxed mb-2">
            «Если вы не вышли из здания и не поговорили с реальными клиентами,
            вы просто гадаете.»
          </p>
          <cite
            className="text-sm not-italic"
            style={{ color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontWeight: 600 }}
          >
            — Стив Бланк
          </cite>
        </blockquote>
      </section>

      <Divider />

      {/* ─── 3. ПОЧЕМУ CUSTDEV ВАЖЕН ДЛЯ МОНЕТИЗАЦИИ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 3</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Почему CustDev критически важен для монетизации
        </h2>
        <p
          className="text-neutral-500 mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Без понимания того, за что люди реально готовы платить, любая
          ценовая модель строится на догадках.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {monetizationPoints.map((point, i) => (
            <div
              key={point.title}
              className="rounded-2xl border border-neutral-200 shadow-lg p-7 bg-white"
            >
              <div
                className="text-sm font-bold mb-3"
                style={{ color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                0{i + 1}
              </div>
              <h3 className="font-bold text-base mb-3 tracking-tight">{point.title}</h3>
              <p
                className="text-neutral-500 text-sm leading-relaxed"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ─── 4. ЭТАПЫ CUSTDEV ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 4</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Этапы CustDev: от подготовки к рекомендациям
        </h2>
        <p
          className="text-neutral-500 mb-14 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          CustDev — не разовое событие, а последовательность шагов, каждый из которых
          опирается на результаты предыдущего.
        </p>

        {/* 4.1 Подготовка */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 tracking-tight">4.1 Подготовка</h3>
          <div className="relative">
            <div className="absolute left-[21px] top-4 bottom-4 w-px bg-neutral-200 hidden sm:block" />
            <div className="flex flex-col gap-4">
              {prepSteps.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 shadow-md bg-white font-bold text-sm"
                    style={{ borderColor: "#2b6cff", color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 border border-neutral-200 rounded-2xl p-5 shadow-lg bg-white">
                    <p className="font-bold text-sm mb-1">{step.title}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4.2 Проведение и запись */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 tracking-tight">4.2 Проведение и запись</h3>
          <div className="rounded-3xl border border-neutral-200 shadow-lg p-8 bg-neutral-50">
            <ul className="space-y-3">
              {[
                "Интервью длится 30–60 минут — лично, по видеосвязи или по телефону.",
                "Записываем аудио или видео и параллельно ведём краткие заметки.",
                "Следим за главным правилом: говорим меньше, слушаем больше.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                    ✓
                  </span>
                  <span className="text-neutral-600 text-sm leading-relaxed" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4.3 Анализ */}
        <div>
          <h3 className="text-xl font-bold mb-6 tracking-tight">4.3 Анализ и формирование рекомендаций</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "24%" }}>
                    Направление
                  </th>
                  <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "30%" }}>
                    Что смотрим
                  </th>
                  <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                    Пример вывода
                  </th>
                </tr>
              </thead>
              <tbody>
                {analysisRows.map((row) => (
                  <tr key={row.dir} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">{row.dir}</td>
                    <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.what}</td>
                    <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── 5. ЧЕК-ЛИСТ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 5</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Чек-лист для успешного глубинного интервью
        </h2>
        <p
          className="text-neutral-500 mb-10 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Три момента, в которых чаще всего теряется качество исследования.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "18%" }}>
                  Этап
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "41%" }}>
                  Что проверить
                </th>
                <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Почему важно
                </th>
              </tr>
            </thead>
            <tbody>
              {checklistRows.map((row) => (
                <tr key={row.stage} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">{row.stage}</td>
                  <td className="py-4 pr-6 align-top">
                    <ul className="space-y-1">
                      {row.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-500" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                          <span className="text-neutral-300 mt-0.5">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* ─── 6. ЧАСТЫЕ ОШИБКИ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 6</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Частые ошибки и как их избегать
        </h2>
        <p
          className="text-neutral-500 mb-10 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Большинство проблем в CustDev повторяются из проекта в проект — и все
          они решаются простыми изменениями в процессе.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "30%" }}>
                  Ошибка
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "30%" }}>
                  Почему вредно
                </th>
                <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Как исправить
                </th>
              </tr>
            </thead>
            <tbody>
              {mistakeRows.map((row) => (
                <tr key={row.mistake} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td className="py-4 pr-6 text-neutral-800 align-top font-medium">{row.mistake}</td>
                  <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.why}</td>
                  <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* ─── 7. ПЛАН ВНЕДРЕНИЯ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Часть 7</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Практический план внедрения CustDev
        </h2>
        <p
          className="text-neutral-500 mb-12 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Десятинедельный цикл, который переводит методологию в конкретные действия
          с измеримым результатом на каждом этапе.
        </p>

        <div className="relative">
          <div className="absolute left-[21px] top-5 bottom-5 w-px bg-neutral-200 hidden sm:block" />
          <div className="flex flex-col gap-5">
            {planRows.map((row, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center z-10 shadow-md bg-white text-xs font-bold"
                  style={{ borderColor: "#2b6cff", color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                >
                  {row.week}
                </div>
                <div className="flex-1 border border-neutral-200 rounded-2xl p-6 shadow-lg bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm tracking-tight">{row.action}</h3>
                    <span
                      className="flex-shrink-0 text-xs px-3 py-1 rounded-full border"
                      style={{ borderColor: "#2b6cff33", color: "#2b6cff", background: "#f0f4ff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
                    >
                      {row.kpi}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                    {row.owner}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── ИНСТРУМЕНТЫ ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionLabel>Справочник</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Инструменты для проведения CustDev
        </h2>
        <p
          className="text-neutral-500 mb-10 max-w-2xl text-lg leading-relaxed"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          Каждый этап исследования требует своего набора инструментов — от поиска
          респондентов до анализа данных.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "25%" }}>
                  Цель
                </th>
                <th className="text-left py-3 pr-6 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", width: "25%" }}>
                  Тип инструментов
                </th>
                <th className="text-left py-3 font-semibold text-neutral-700" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                  Что даёт
                </th>
              </tr>
            </thead>
            <tbody>
              {toolRows.map((row) => (
                <tr key={row.goal} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td className="py-4 pr-6 font-semibold text-neutral-800 align-top">{row.goal}</td>
                  <td className="py-4 pr-6 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.type}</td>
                  <td className="py-4 text-neutral-500 align-top" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* ─── ВЫВОД ─── */}
      <section className="max-w-5xl mx-auto px-6 py-20 pb-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-12 h-1 mx-auto mb-10 rounded-full" style={{ background: "#2b6cff" }} />
          <SectionLabel>Вывод</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-snug">
            CustDev — ваш компас в условиях неопределённости
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {conclusionCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-neutral-200 shadow-lg p-7 bg-white">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                {card.title}
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl shadow-lg p-10 text-center" style={{ background: "#2b6cff" }}>
          <p className="text-white text-xl leading-relaxed font-medium max-w-2xl mx-auto" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
            Если вы хотите, чтобы ваш продукт не просто «выстрелил», а устойчиво
            генерировал прибыль — сделайте CustDev обязательной частью этапа
            обнаружения. Данные, а не предположения, должны вести ваш продукт к успеху.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */

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
    body: "CustDev выявляет ложные предположения на ранней стадии — например, что пользователи готовы платить за функцию, которую они никогда не будут использовать.",
  },
  {
    title: "Оптимизация маркетинг-микса",
    body: "Инсайты о каналах, где целевая аудитория ищет решения, позволяют сосредоточить бюджет на наиболее эффективных точках контакта.",
  },
  {
    title: "База для цикла «строим — измеряем — учимся»",
    body: "После каждого интервью у вас есть конкретные гипотезы, которые можно проверить в A/B-тестах, на лендингах или в прототипах.",
  },
];

const prepSteps = [
  {
    title: "Чёткая формулировка целей и задач",
    body: "Определите, какие ответы вам нужны. Например: «Какую сумму пользователи готовы ежемесячно платить за решение этой проблемы?»",
  },
  {
    title: "Сегментация респондентов",
    body: "Определите основную и дополнительную целевую аудиторию. Чем точнее сегмент, тем более применимыми окажутся инсайты.",
  },
  {
    title: "Скринер",
    body: "Короткая анкета для отбора релевантных участников. Отсеивает людей, чей опыт не соответствует задачам исследования.",
  },
  {
    title: "Опросник (гайд)",
    body: "Список открытых вопросов, уточняющих и альтернативных, построенный вокруг метода «5 почему». Он направляет беседу, а не ограничивает её.",
  },
];

const analysisRows = [
  {
    dir: "Продукт",
    what: "Интерес к функциям, ценовая чувствительность, пробелы в функционале",
    example: "70 % респондентов считают, что отсутствие одной ключевой интеграции делает продукт непригодным для их рабочего процесса.",
  },
  {
    dir: "Коммуникация",
    what: "Позиционирование, УТП, тон голоса",
    example: "Клиенты ассоциируют продукт с надёжностью, а не со скоростью — акцент в коммуникации нужно перенести на безопасность.",
  },
  {
    dir: "Продвижение",
    what: "Каналы, где ищут решение, путь клиента, воронка",
    example: "Основной источник информации — профессиональные форумы и тематические сообщества; стоимость лида там значительно ниже, чем в контекстной рекламе.",
  },
];

const checklistRows = [
  {
    stage: "Перед началом",
    items: [
      "Выбран чёткий сегмент целевой аудитории",
      "Сформулированы 3–5 главных целей",
      "Подготовлены скринер и опросник",
      "Участник предупреждён о записи",
    ],
    why: "Уменьшаем шум, фокусируемся на релевантных инсайтах",
  },
  {
    stage: "Во время",
    items: [
      "Тема чётко сформулирована",
      "Используем открытые вопросы",
      "Применяем метод «5 почему»",
      "Фиксируем эмоции, а не только слова",
      "Не навязываем своё мнение",
    ],
    why: "Получаем глубинные, нефильтрованные ответы",
  },
  {
    stage: "После",
    items: [
      "Сразу просматриваем заметки",
      "Собираем команду для совместного анализа",
      "Выделяем 3–5 ключевых инсайтов",
      "Формируем гипотезы для следующего спринта",
    ],
    why: "Быстро превращаем сырые данные в конкретные действия",
  },
];

const mistakeRows = [
  {
    mistake: "Интервью только с друзьями или коллегами",
    why: "Смещение в сторону позитивного фидбэка, реальных болей не видно",
    fix: "Используйте скринеры и платформы рекрутмента для поиска незнакомых респондентов",
  },
  {
    mistake: "Слишком много закрытых вопросов",
    why: "Получаем «да/нет» — теряем контекст и эмоции",
    fix: "70–80 % вопросов делайте открытыми; уточняющие задавайте только после того, как человек высказался",
  },
  {
    mistake: "Не записываем интервью",
    why: "Нюансы теряются, перепроверить данные невозможно",
    fix: "Всегда записывайте аудио или видео, предупреждая участника заранее",
  },
  {
    mistake: "Анализ в одиночку",
    why: "Субъективные выводы, паттерны остаются незамеченными",
    fix: "Проводите дебриф с командой из 2–3 человек и используйте аффинити-диаграммы",
  },
  {
    mistake: "Сразу переходим к построению функции",
    why: "Инсайты не проверяются — риск построить ненужное",
    fix: "Сначала сформулируйте гипотезу, затем запустите MVP или лендинг и измерьте конверсию",
  },
];

const planRows = [
  { week: "1", action: "Определить целевой сегмент и сформулировать 3–5 бизнес-вопросов", owner: "PM + маркетолог", kpi: "Чёткие гипотезы" },
  { week: "2", action: "Подготовить скринер и опросник (5–7 открытых вопросов)", owner: "Research lead", kpi: "Готовый гайд" },
  { week: "3–4", action: "Рекрутмент и проведение 15–20 глубинных интервью по 30–40 минут", owner: "Interviewer", kpi: "≥ 15 интервью" },
  { week: "5", action: "Транскрибация и первичное кодирование — выделение тем", owner: "Analyst", kpi: "Темы с частотой" },
  { week: "6", action: "Совместный анализ команды: аффинити-диаграмма, топ-3 инсайта", owner: "PM + маркетолог + UX", kpi: "Принятые решения" },
  { week: "7", action: "Формулировка гипотез для тестирования", owner: "PM", kpi: "Список гипотез" },
  { week: "8–9", action: "Запуск MVP или лендинга, A/B-тест или опрос в масштабе", owner: "Growth-маркетолог", kpi: "Конверсия / NPS" },
  { week: "10", action: "Ревью результатов, корректировка продукт-роадмэпа, следующий спринт", owner: "Вся команда", kpi: "Обновлённый бэклог" },
];

const toolRows = [
  {
    goal: "Рекрутмент респондентов",
    type: "Платформы найма участников",
    benefit: "Быстрый доступ к профилированной аудитории, гарантированное соответствие скринеру",
  },
  {
    goal: "Собственная база",
    type: "Email-рассылки + Google Forms",
    benefit: "Нулевая стоимость, полный контроль над данными и отбором",
  },
  {
    goal: "Проведение интервью",
    type: "Видео-звонки с записью в облаке",
    benefit: "Удобство для удалённых участников, возможность вернуться к записи",
  },
  {
    goal: "Транскрибация",
    type: "Сервисы автоматического распознавания речи",
    benefit: "Быстрое преобразование в текст, поиск по ключевым словам",
  },
  {
    goal: "Анализ качественных данных",
    type: "Инструменты тегирования и визуализации тем",
    benefit: "Командная работа над инсайтами, наглядная структура паттернов",
  },
  {
    goal: "Тестирование гипотез",
    type: "A/B-тесты, опросы в масштабе",
    benefit: "Быстрая проверка гипотез на реальной аудитории с измеримым результатом",
  },
];

const conclusionCards = [
  {
    title: "Снижает риск",
    body: "Позволяет обнаружить ложные предположения до того, как вы потратили бюджет на их реализацию.",
  },
  {
    title: "Даёт точное понимание",
    body: "Показывает, за что именно пользователи готовы платить — это фундамент для монетизации.",
  },
  {
    title: "Позволяет быстро итерироваться",
    body: "После каждого интервью вы получаете чёткие гипотезы, проверяемые в реальном мире.",
  },
  {
    title: "Интегрируется в любой процесс",
    body: "Подходит для стартапа на ранней стадии и для корпоративной команды, запускающей новый продукт.",
  },
];

/* ═══════════════════════════════════════
   UI COMPONENTS
═══════════════════════════════════════ */

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="border-t border-neutral-100" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3"
      style={{ color: "#2b6cff", fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
    >
      {children}
    </span>
  );
}
