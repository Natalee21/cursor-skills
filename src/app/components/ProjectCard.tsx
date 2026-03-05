import Link from "next/link";
import type { Project } from "@/lib/projects";

type Props = {
    project: Project;
    variant?: "small" | "large";
};

function Pill({ children }: { children: string }) {
    return (
        <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800">
            {children}
        </span>
    );
}

export default function ProjectCard({ project, variant = "large" }: Props) {
    const tags = project.tags?.slice(0, variant === "small" ? 3 : 6) ?? [];

    return (
        <article
            className={[
                "rounded-[2.25rem] border border-neutral-200 bg-white/90 backdrop-blur-sm",
                "shadow-[0_24px_60px_rgba(0,0,0,0.06)]",
                "hover:shadow-[0_35px_90px_rgba(0,0,0,0.10)] hover:-translate-y-1",
                "transition-all duration-300",
                "flex flex-col h-full",
                variant === "small" ? "p-8" : "p-10 md:p-12",
            ].join(" ")}
        >

            {/* Контент карточки */}
            <div className="flex flex-col gap-6 flex-grow">

                {/* Ниша */}
                {project.niche && (
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400 font-bold">
                        {project.niche}
                    </p>
                )}

                {/* Заголовок */}
                <h3
                    className={
                        variant === "small"
                            ? "text-lg md:text-xl font-extrabold tracking-tight"
                            : "text-2xl md:text-3xl font-extrabold tracking-tight"
                    }
                >
                    {project.title}
                </h3>

                {/* Короткое описание */}
                {project.shortDesc && (
                    <p className="text-neutral-600 leading-relaxed">
                        {project.shortDesc}
                    </p>
                )}

                {/* Теги */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((tag) => (
                            <Pill key={tag}>{tag}</Pill>
                        ))}
                    </div>
                )}

                {/* Результат */}
                {variant === "large" && project.outcome && (
                    <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                        <p className="text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wider">
                            Результат
                        </p>

                        <p className="text-neutral-800 leading-relaxed whitespace-pre-line">
                            {project.outcome}
                        </p>
                    </div>
                )}
            </div>

            {/* Кнопка */}
            <div className="mt-auto pt-6">
                <Link
                    href={`/case/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-neutral-900 text-white hover:bg-blue-600 transition-colors active:scale-95"
                >
                    Смотреть кейс →
                </Link>
            </div>

        </article>
    );
}