import ProjectCard from "../components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
    const featured = projects.filter((p) => p.isFeatured);
    const rest = projects.filter((p) => !p.isFeatured);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700">
            <div className="max-w-3xl mb-16">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4">
                    КАТАЛОГ
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Проекты и кейсы
                </h1>

                <p className="text-xl text-neutral-600 leading-relaxed">
                    Полный каталог проектов: от стратегий монетизации до системных запусков в разных нишах.
                    Нажмите на кейс, чтобы увидеть детали работы и результаты.
                </p>
            </div>

            {featured.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
                        Избранные кейсы
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featured.map((project) => (
                            <ProjectCard key={project.slug} project={project} variant="small" />
                        ))}
                    </div>
                </section>
            )}

            {rest.length > 0 && (
                <section>
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
                        Все проекты
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((project) => (
                            <ProjectCard key={project.slug} project={project} variant="small" />
                        ))}
                    </div>
                </section>
            )}

            <div className="mt-28 p-12 md:p-16 rounded-[3rem] bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/10 blur-[100px] -translate-y-32 translate-x-32" />

                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Специализация по рынкам
                </h2>

                <div className="flex flex-wrap gap-4">
                    {[
                        "EdTech",
                        "Beauty",
                        "Lifestyle",
                        "E commerce",
                        "Спорт",
                        "Психология",
                        "Маркетплейсы",
                    ].map((niche) => (
                        <span
                            key={niche}
                            className="px-6 py-3 bg-white/10 backdrop-blur rounded-2xl font-bold border border-white/10 hover:bg-white/20 transition-colors"
                        >
                            {niche}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}