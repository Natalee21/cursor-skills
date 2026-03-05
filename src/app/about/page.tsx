export default function About() {
    const competencies = [
        "CustDev интервью",
        "JTBD",
        "сегментация аудитории",
        "анализ конкурентов",
        "гипотезы роста",
        "CJM и пользовательский путь",
        "MVP продукта",
        "продуктовая линейка",
        "воронка монетизации",
        "архитектура прогрева",
    ];

    const metrics = [
        "Unit экономика",
        "CAC",
        "LTV",
        "конверсия воронки",
        "ROI",
        "A/B тестирование",
        "экономика запуска",
        "точки монетизации",
        "продуктовые метрики",
    ];

    const environment = [
        "Екатерина Процик, запуски в Telegram",
        "Лада Попова, матрица прогревов",
        "Оксана Мыйнова, алгоритмы Reels",
        "Ильдар Бахтиярыч, системный блогинг",
        "Александр Турлаков, рекордные запуски",
        "Татьяна Маричева, образовательные проекты",
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gradient">
                Обо мне
            </h1>

            {/* QUICK FACTS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-neutral-500">лет в продажах</div>
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-neutral-500">лет в онлайн проектах</div>
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold">69+ млн ₽</div>
                    <div className="text-sm text-neutral-500">оборот проектов</div>
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-neutral-500">ниш и рынков</div>
                </div>
            </div>

            <div className="space-y-16">
                {/* BACKGROUND */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Бэкграунд</h2>

                    <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                        Путь в продажах начался в 2005 году, затем десять лет работы в оптовой компании «Медоса» дали сильную базу в переговорах, доверии и логике принятия решения о покупке. Личный оборот в тот период доходил до 20 миллионов рублей в месяц, поэтому хорошо понимаю, как устроены деньги в реальном бизнесе и почему клиент говорит да или нет.
                    </p>

                    <p className="text-lg text-foreground/70 leading-relaxed">
                        После декрета фокус сместился в онлайн проекты, где практический опыт продаж превратился в системный подход к росту и монетизации экспертных продуктов. Здесь важны не отдельные действия, а связка аудитория, продукт, контент и продажи, которая работает стабильно и без ручного героизма.
                    </p>
                </section>

                {/* FOCUS + EDUCATION */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="rounded-3xl border border-neutral-200 bg-white/60 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                        <h2 className="text-2xl font-bold mb-6">Фокус</h2>

                        <p className="text-foreground/70 leading-relaxed">
                            Работа строится на стыке продуктового маркетинга, архитектуры роста и системных запусков. Сначала разбираю аудиторию и продуктовую логику, затем собираю путь пользователя и воронку, чтобы монетизация не зависела от настроения и случайных продаж.
                        </p>

                        <p className="text-foreground/70 leading-relaxed mt-4">
                            В задачах чаще всего встречаются анализ спроса и сегментов, проектирование продуктовой линейки, упаковка оффера, построение воронок монетизации и сопровождение запуска. Люблю, когда система выглядит просто для человека и держит нагрузку по взрослому.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-200 bg-white/60 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                        <h2 className="text-2xl font-bold mb-6">Образование</h2>

                        <ul className="space-y-4 text-foreground/70">
                            <li>
                                <span className="font-bold text-foreground">2015:</span>{" "}
                                Высшее образование, менеджмент, ИМЭС
                            </li>

                            <li>
                                <span className="font-bold text-foreground">2022:</span>{" "}
                                Интернет маркетинг, школа Игоря Манна
                            </li>

                            <li>
                                <span className="font-bold text-foreground">2026:</span>{" "}
                                Product Manager, SkillFactory, в процессе
                            </li>
                        </ul>
                    </div>
                </section>

                {/* COMPETENCIES */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Компетенции и инструменты</h2>

                    <div className="flex flex-wrap gap-3">
                        {competencies.map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium bg-white/60"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                {/* METRICS */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Метрики и экономика продукта</h2>

                    <div className="flex flex-wrap gap-3">
                        {metrics.map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-blue-100 text-sm font-medium bg-blue-50/40"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                {/* PROFESSIONAL ENVIRONMENT */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Профессиональная среда</h2>

                    <p className="text-foreground/70 leading-relaxed mb-6">
                        Подход к работе сформировался на практике запусков и в среде сильных проектов, где ценят структуру, проверку гипотез и взрослую ответственность за результат.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {environment.map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium bg-white/60"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}