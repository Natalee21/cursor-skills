import Link from "next/link";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-700">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16">
                Статьи и материалы
            </h1>

            <div className="space-y-6">
                {articles.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/articles/${item.slug}`}
                        className="block p-8 rounded-3xl border border-neutral-200 bg-white/60 hover:bg-white hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3">
                                    {item.type}
                                </span>

                                <h2 className="text-2xl font-bold mb-3 transition-colors">
                                    {item.title}
                                </h2>

                                <p className="text-neutral-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="text-sm font-bold text-neutral-400 group-hover:text-blue-600 transition-colors flex items-center gap-2 flex-shrink-0">
                                Читать <span className="transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-32 p-12 md:p-16 rounded-[3rem] bg-neutral-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] -translate-y-32 translate-x-32 group-hover:scale-125 transition duration-1000" />

                <div className="relative">
                    <h3 className="text-3xl font-bold mb-6">Нужны материалы под вашу нишу?</h3>

                    <p className="text-neutral-400 mb-10 text-lg max-w-2xl leading-relaxed">
                        У меня также есть наработки по нишам ЗОЖ, Туризм и Fashion.
                        Напишите мне, и я подберу примеры и разборы под вашу задачу.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-neutral-900 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-xl shadow-black/20"
                    >
                        Написать мне
                    </Link>
                </div>
            </div>
        </div>
    );
}