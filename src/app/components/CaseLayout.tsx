// src/app/components/CaseLayout.tsx
import Link from "next/link";
import type { Project } from "@/lib/projects";

function Pill({ children }: { children: string }) {
    return (
        <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800">
            {children}
        </span>
    );
}

function sanitizeText(input: string) {
    if (!input) return "";

    return (
        input
            // Убираем конструкции вида: [oai_citation:...](sediment://...)
            .replace(/\[oai_citation:[^\]]+\]\([^)]+\)/gi, "")
            // Убираем одинокие [oai_citation:...]
            .replace(/\[oai_citation:[^\]]+\]/gi, "")
            // Убираем хвосты sediment://... если вдруг остались
            .replace(/sediment:\/\/\S+/gi, "")
            // Чистим двойные пробелы и лишние переносы
            .replace(/[ \t]{2,}/g, " ")
            .replace(/\n{3,}/g, "\n\n")
            .trim()
    );
}

function mapNicheToken(token: string) {
    const t = token.trim();

    const dict: Record<string, string> = {
        Education: "Образование",
        Premium: "Премиум",
        "B2B": "B2B",
        Sports: "Спорт",
        Psychology: "Психология",
        "Language Learning": "Языки",
        "E-commerce": "E commerce",
        "Ecommerce": "E commerce",
        Lifestyle: "Lifestyle",
        Beauty: "Beauty",
    };

    return dict[t] ?? t;
}

function mapTag(tag: string) {
    const t = tag.trim();

    const dict: Record<string, string> = {
        CustDev: "CustDev",
        MVP: "MVP",
        Funnel: "Воронка",
        Offer: "Оффер",
        Launch: "Запуск",
        Conversion: "Конверсия",
        Sales: "Продажи",
        CRM: "CRM",
        Scripts: "Скрипты",
        "Messenger Sales": "Продажи в мессенджерах",
        "WhatsApp Sales": "Продажи в WhatsApp",
        "High Ticket": "Высокий чек",
        Messaging: "Мессенджеры",
        EdTech: "EdTech",
    };

    return dict[t] ?? t;
}

function mapTool(tool: string) {
    const t = tool.trim();

    const dict: Record<string, string> = {
        "Master-class": "Мастер-класс",
        "Chat-bot": "Чат-бот",
        Telephony: "Телефония",
        "Product Research": "Продуктовое исследование",
        Landing: "Лендинг",
        "GetCourse": "GetCourse",
        PBX: "PBX",
        Telegram: "Telegram",
        Instagram: "Instagram",
        YouTube: "YouTube",
        Pinterest: "Pinterest",
        WhatsApp: "WhatsApp",
        Zoom: "Zoom",
        CRM: "CRM",
        SaleBot: "SaleBot",
    };

    return dict[t] ?? t;
}

export default function CaseLayout({ project }: { project: Project }) {
    const nicheParts = project.niche
        .split("/")
        .map((s) => s.trim())
        .filter(Boolean)
        .map(mapNicheToken);

    const nicheLabel = nicheParts.length ? nicheParts.join(" / ") : "";

    const tags = (project.tags ?? []).map(mapTag);
    const tools = (project.tools ?? []).map(mapTool);

    const title = sanitizeText(project.title);
    const shortDesc = sanitizeText(project.shortDesc);
    const context = sanitizeText(project.context);
    const goal = sanitizeText(project.goal);
    const fullDesc = sanitizeText(project.fullDesc);
    const outcome = sanitizeText(project.outcome);
    const workDone = (project.workDone ?? []).map(sanitizeText);
    const insights = (project.insights ?? []).map(sanitizeText);

    return (
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-24">
            <div className="mb-10">
                <Link
                    href="/projects"
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                    ← Вернуться ко всем проектам
                </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
                {nicheLabel ? (
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-[0.18em]">
                        {nicheLabel}
                    </span>
                ) : null}

                {tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                {title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-700 italic border-l-2 border-orange-400 pl-4 py-1 max-w-3xl">
                {shortDesc}
            </p>

            <section className="mt-14 grid md:grid-cols-2 gap-10">
                <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-bold">
                        Контекст
                    </p>
                    <p className="mt-4 text-neutral-700 leading-relaxed">{context}</p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-bold">
                        Цель
                    </p>
                    <p className="mt-4 text-white leading-relaxed">{goal}</p>
                </div>
            </section>

            <section className="mt-16">
                <p className="text-sm font-extrabold tracking-[0.22em] text-neutral-900 uppercase">
                    Что сделано
                </p>

                <div className="mt-6 space-y-6">
                    {workDone.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl border border-neutral-200 bg-white p-7 md:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] flex gap-6"
                        >
                            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-sm font-extrabold text-blue-700">
                                {idx + 1}
                            </div>

                            <p className="text-neutral-800 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <div className="rounded-[2.5rem] border border-orange-100 bg-orange-50/60 p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                    <p className="text-xs uppercase tracking-[0.22em] font-extrabold text-orange-600">
                        Результат
                    </p>

                    <h2 className="mt-5 text-xl md:text-2xl font-extrabold tracking-tight leading-snug text-neutral-900">
                        {outcome}
                    </h2>

                    <p className="mt-6 text-neutral-700 leading-relaxed max-w-4xl">
                        {fullDesc}
                    </p>
                </div>
            </section>

            <section className="mt-16 grid md:grid-cols-2 gap-10">
                <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-bold mb-4">
                        Инструменты
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <Pill key={tool}>{tool}</Pill>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-bold mb-4">
                        Выводы
                    </p>

                    <div className="space-y-4">
                        {insights.map((insight, i) => (
                            <div key={i} className="flex gap-3">
                                <span className="text-orange-500 font-extrabold">→</span>
                                <p className="text-neutral-700 leading-relaxed">{insight}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-20 rounded-3xl border border-neutral-200 bg-white p-10 md:p-14 text-center shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
                    Хотите похожий результат?
                </h3>

                <p className="mt-4 text-neutral-600 italic max-w-3xl mx-auto leading-relaxed">
                    Вам нужна системность, которая превращает интуитивные решения в архитектуру роста и монетизации.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/contact"
                        className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-extrabold text-base transition hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95"
                    >
                        Написать мне →
                    </Link>
                </div>
            </section>
        </div>
    );
}