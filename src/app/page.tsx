import ProjectCard from "./components/ProjectCard";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-24">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] text-neutral-500 font-bold mb-3 md:mb-4">
            ПРОДУКТОВЫЙ МАРКЕТИНГ И МОНЕТИЗАЦИЯ
          </p>

          <h1 className="text-[clamp(1.875rem,5vw,3rem)] font-extrabold tracking-tight mt-3 md:mt-4 leading-tight">
            Натали Борисова
          </h1>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
            <span className="px-4 md:px-5 py-2 text-sm font-semibold rounded-full border border-neutral-200 bg-white shadow-sm">
              CustDev
            </span>

            <span className="px-4 md:px-5 py-2 text-sm font-semibold rounded-full border border-neutral-200 bg-white shadow-sm">
              GTM Strategy
            </span>

            <span className="px-4 md:px-5 py-2 text-sm font-semibold rounded-full border border-neutral-200 bg-white shadow-sm">
              Monetization
            </span>
          </div>

          <p className="mt-6 md:mt-8 text-[clamp(1rem,2.8vw,1.25rem)] text-neutral-700 leading-relaxed font-medium max-w-2xl">
            Помогаю экспертам и онлайн проектам превращать интуитивные продажи
            в системную архитектуру роста, монетизации и масштабирования.
          </p>

          <p className="mt-5 md:mt-6 text-neutral-500 italic max-w-lg border-l-2 border-orange-400 pl-4 py-1 text-[clamp(0.95rem,2.6vw,1.25rem)] leading-relaxed">
            Продуктовый маркетолог и архитектор систем роста для экспертных проектов.
          </p>

          <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 items-center">
            <a
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-blue-600 text-white text-sm md:text-base font-bold transition hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95"
            >
              Написать мне
            </a>

            <a
              href="/projects"
              className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-neutral-300 text-sm md:text-base font-bold transition hover:border-neutral-900 hover:bg-neutral-50 active:scale-95"
            >
              Смотреть проекты
            </a>
          </div>
        </div>

        {/* AVATAR */}
        <div className="flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000 mt-2 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-8 md:-inset-10 rounded-full blur-3xl opacity-70 bg-[radial-gradient(circle,rgba(255,168,64,0.35)_0%,rgba(255,168,64,0.10)_35%,rgba(255,168,64,0)_70%)]" />

            <div className="absolute -inset-10 md:-inset-12 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle,rgba(43,108,255,0.22)_0%,rgba(43,108,255,0.08)_35%,rgba(43,108,255,0)_70%)]" />

            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-neutral-200 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
              <img
                src="/avatar.png"
                alt="Натали Борисова"
                className="w-full h-full object-cover object-[50%_28%] scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="mt-24 md:mt-36 space-y-14 md:space-y-20">
        <div className="flex items-end justify-between gap-6 flex-wrap border-b border-neutral-100 pb-10 md:pb-12">
          <div>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-neutral-400 font-bold mb-3 md:mb-4">
              ИЗБРАННЫЕ ПРОЕКТЫ
            </p>

            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-extrabold tracking-tight mt-2 md:mt-3 leading-tight">
              Кейсы, где видно систему
            </h2>

            <p className="text-neutral-500 mt-4 md:mt-6 max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed">
              Подборка проектов, где можно увидеть архитектуру запусков,
              системную монетизацию и рост экспертных продуктов.
            </p>
          </div>

          <a
            href="/projects"
            className="group flex items-center gap-3 px-5 md:px-6 py-3 rounded-xl border border-neutral-200 font-bold text-sm transition hover:border-blue-600 hover:text-blue-600 active:scale-95"
          >
            Все проекты
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid gap-8 md:gap-12 max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="large" />
          ))}
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="mt-14 md:mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.08)] p-5 sm:p-7 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 blur-[90px] -translate-y-24 translate-x-24" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50/60 blur-[90px] translate-y-24 -translate-x-24" />

            <div className="relative text-center">
              {/* METRICS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-6 md:mb-7 text-sm sm:text-base md:text-lg font-semibold text-neutral-700 max-w-2xl mx-auto">
                <span className="whitespace-nowrap">+18 запусков</span>
                <span className="whitespace-nowrap">+69 млн ₽ оборота</span>
                <span className="whitespace-nowrap">+15 рынков</span>
              </div>

              <h3 className="text-[clamp(1.5rem,4.2vw,2.5rem)] font-extrabold tracking-tight leading-tight">
                Нужна система роста, а не хаос задач?
              </h3>

              <p className="text-neutral-600 mt-4 text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed max-w-2xl mx-auto">
                Напишите, и разберём, где у проекта проседает монетизация, и какой
                следующий шаг даст самый быстрый эффект.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="px-8 md:px-10 py-4 rounded-2xl bg-neutral-900 text-white font-bold text-sm md:text-base transition hover:bg-blue-600 hover:shadow-xl active:scale-95 shadow-lg shadow-neutral-200"
                >
                  Написать мне →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}