// src/app/components/CaseLayout.tsx
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectMetric = {
    value: string;
    label: string;
};

type ExtendedProject = Project & {
    strategy?: string[];
    metrics?: ProjectMetric[];
};

function Pill({ children }: { children: string }) {
    return (
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-800">
            {children}
        </span>
    );
}

function MetricPill({ value, label }: { value: string; label: string }) {
    return (
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
            <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">
                {value}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                {label}
            </div>
        </div>
    );
}

function sanitizeText(input: string) {
    if (!input) return "";

    return input
        .replace(/\[oai_citation:[^\]]+\]\([^)]+\)/gi, "")
        .replace(/\[oai_citation:[^\]]+\]/gi, "")
        .replace(/sediment:\/\/\S+/gi, "")
        .replace(/[ \t]{2,}/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function mapNicheToken(token: string) {
    const t = token.trim();

    const dict: Record<string, string> = {
        Education: "Образование",
        Premium: "Премиум",
        B2B: "B2B",
        Sports: "Спорт",
        Psychology: "Психология",
        "Language Learning": "Языки",
        Ecommerce: "E commerce",
        Lifestyle: "Lifestyle",
        Beauty: "Beauty",
        "Personal Branding": "Личный бренд",
        "Content Strategy": "Контент-стратегия",
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
        EdTech: "EdTech",
        Strategy: "Стратегия",
        Growth: "Рост",
        Content: "Контент",
        "Organic Growth": "Органический рост",
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
        GetCourse: "GetCourse",
        PBX: "PBX",
        Telegram: "Telegram",
        Instagram: "Instagram",
        YouTube: "YouTube",
        Pinterest: "Pinterest",
        WhatsApp: "WhatsApp",
        Zoom: "Zoom",
        CRM: "CRM",
        SaleBot: "SaleBot",
        "Content Series": "Контент-серии",
        "Video Scripts": "Видео-сценарии",
        "Story-based marketing": "Story based маркетинг",
    };

    return dict[t] ?? t;
}

export default function CaseLayout({ project }: { project: Project }) {
    const extendedProject = project as ExtendedProject;

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

    const role = project.role ? sanitizeText(project.role) : "";
    const strategy = (extendedProject.strategy ?? []).map(sanitizeText);
    const metrics = extendedProject.metrics ?? [];

    return (
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-24">
            <div className="mb-10">
                <Link
                    href="/projects"
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                    ← Вернуться ко всем проектам
                </Link>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2">
                {nicheLabel && (
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                        {nicheLabel}
                    </span>
                )}

                {tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                ))}
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.05] md:text-6xl">
                {title}
            </h1>

            <p className="mt-6 max-w-3xl border-l-2 border-orange-400 py-1 pl-4 text-lg italic text-neutral-700 md:text-xl">
                {shortDesc}
            </p>

            {metrics.length > 0 && (
                <section className="mt-14">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Ключевые метрики
                    </p>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {metrics.map((metric, idx) => (
                            <MetricPill
                                key={idx}
                                value={metric.value}
                                label={metric.label}
                            />
                        ))}
                    </div>
                </section>
            )}

            <section className="mt-14 grid gap-10 md:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Контекст
                    </p>
                    <p className="mt-4 leading-relaxed text-neutral-700">
                        {context}
                    </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Цель
                    </p>
                    <p className="mt-4 leading-relaxed text-white">{goal}</p>
                </div>
            </section>

            {role && (
                <section className="mt-16">
                    <div className="rounded-3xl border border-orange-200 bg-orange-50/50 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                            Моя роль в проекте
                        </p>
                        <p className="mt-4 font-medium leading-relaxed text-neutral-800">
                            {role}
                        </p>
                    </div>
                </section>
            )}

            {strategy.length > 0 && (
                <section className="mt-16">
                    <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-neutral-900">
                        Стратегия
                    </p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {strategy.map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                            >
                                <div className="flex gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-xs font-extrabold text-blue-600">
                                        {idx + 1}
                                    </div>
                                    <p className="leading-relaxed text-neutral-800">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className="mt-16">
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-neutral-900">
                    Что сделано
                </p>

                <div className="mt-6 space-y-6">
                    {workDone.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex gap-6 rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-8"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-sm font-extrabold text-blue-700">
                                {idx + 1}
                            </div>

                            <p className="leading-relaxed text-neutral-800">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <div className="rounded-[2.5rem] border border-orange-100 bg-orange-50/60 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-12">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-600">
                        Результат
                    </p>

                    <div className="mt-5 whitespace-pre-line text-xl font-extrabold leading-snug tracking-tight text-neutral-900 md:text-2xl">
                        {outcome}
                    </div>

                    <p className="mt-6 max-w-4xl leading-relaxed text-neutral-700">
                        {fullDesc}
                    </p>
                </div>
            </section>

            <section className="mt-16 grid gap-10 md:grid-cols-2">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Инструменты
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <Pill key={tool}>{tool}</Pill>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Выводы
                    </p>

                    <div className="space-y-4">
                        {insights.map((insight, i) => (
                            <div key={i} className="flex gap-3">
                                <span className="font-extrabold text-orange-500">
                                    →
                                </span>
                                <p className="leading-relaxed text-neutral-700">
                                    {insight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-20 rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-[0_22px_70px_rgba(0,0,0,0.08)] md:p-14">
                <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl">
                    Хотите похожий результат?
                </h3>

                <p className="mx-auto mt-4 max-w-3xl italic leading-relaxed text-neutral-600">
                    Вам нужна системность, которая превращает интуитивные решения в архитектуру роста и монетизации.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/contact"
                        className="rounded-2xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700 active:scale-95"
                    >
                        Написать мне →
                    </Link>
                </div>
            </section>
        </div>
    );
}