import { Article } from "@/lib/articles";
import Link from "next/link";

interface ArticleLayoutProps {
    article: Article;
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700">
            <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-blue-600 transition-colors mb-12 group"
            >
                <span className="transition-transform group-hover:-translate-x-1">←</span> Back to articles
            </Link>

            <header className="mb-16">
                <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-6">
                    {article.type}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl text-neutral-500 leading-relaxed max-w-3xl italic border-l-4 border-blue-600 pl-6 py-2">
                    {article.desc}
                </p>
            </header>

            <div className="space-y-16">
                {article.sections.map((section, idx) => (
                    <section key={idx} className="group">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 group-hover:text-blue-600 transition-colors">
                            {section.title}
                        </h2>
                        <div className="text-lg text-neutral-600 leading-relaxed space-y-4">
                            <p>{section.content}</p>
                            {section.list && (
                                <ul className="space-y-4 mt-6">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                                {i + 1}
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>
                ))}

                {article.sections.length === 0 && (
                    <div className="py-20 text-center border-2 border-dashed border-neutral-200 rounded-[2rem]">
                        <p className="text-neutral-400 text-lg">
                            Полный текст этой статьи сейчас находится в разработке или доступен по запросу в формате PDF.
                        </p>
                    </div>
                )}
            </div>

            <footer className="mt-32 pt-16 border-t border-neutral-100">
                <div className="p-12 rounded-[2.5rem] bg-neutral-50 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold mb-4">Понравился материал?</h3>
                    <p className="text-neutral-500 mb-8 max-w-xl">
                        Я помогаю внедрять эти инструменты в реальные проекты, чтобы продажи становились системными и предсказуемыми.
                    </p>
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-neutral-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-neutral-200 active:scale-95"
                    >
                        Обсудить ваш проект →
                    </Link>
                </div>
            </footer>
        </div>
    );
}
