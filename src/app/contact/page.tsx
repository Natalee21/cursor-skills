export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid lg:grid-cols-2 gap-20">

            {/* Левая колонка */}
            <div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
                        <img
                            src="/natali.jpg"
                            alt="Натали Борисова"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="text-sm text-neutral-500">
                        Обычно отвечаю в течение 24 часов
                    </p>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
                    Обсудим ваш проект
                </h1>

                <p className="mt-8 text-lg text-neutral-700 leading-relaxed max-w-xl">
                    Я открыта к новым проектам в сфере продуктового маркетинга,
                    масштабирования и монетизации. Если вы хотите превратить разрозненные
                    продажи в системную архитектуру и устойчивую воронку, расскажите мне
                    о своем проекте.
                </p>


                {/* Контакты */}
                <div className="mt-12 space-y-10 max-w-sm">

                    {/* Telegram */}
                    <div className="flex flex-col gap-3">

                        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.12em]">
                            Связаться в Telegram
                        </p>

                        <a
                            href="https://t.me/natalee_borisova"
                            className="flex items-center justify-between px-6 py-4 rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] transition"
                        >
                            <span className="font-extrabold text-lg text-neutral-900">
                                @natalee_borisova
                            </span>

                            <span className="text-neutral-400 text-xl">
                                →
                            </span>
                        </a>

                    </div>


                    {/* Соцсети */}
                    <div className="flex flex-col gap-3">

                        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.12em]">
                            Все социальные сети
                        </p>

                        <a
                            href="https://t.me/borisovanatalii"
                            className="flex items-center justify-between px-6 py-4 rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] transition"
                        >
                            <span className="font-extrabold text-lg text-neutral-900">
                                Открыть
                            </span>

                            <span className="text-neutral-400 text-xl">
                                →
                            </span>
                        </a>

                    </div>

                </div>

            </div>



            {/* Правая колонка — форма */}
            <div className="rounded-[3.5rem] border border-neutral-200 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.08)] p-10 md:p-12 h-fit relative overflow-hidden">

                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 blur-[90px] -translate-y-24 translate-x-24" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50/60 blur-[90px] translate-y-24 -translate-x-24" />

                <form className="relative space-y-6">

                    <div>
                        <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                            Ваше имя
                        </label>

                        <input
                            type="text"
                            placeholder="Как к вам обращаться"
                            className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-300 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                            Ниша или проект
                        </label>

                        <input
                            type="text"
                            placeholder="Например: онлайн школа или экспертный блог"
                            className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-300 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                            Кратко опишите задачу
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Что сейчас не работает и какой результат хотите получить"
                            className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-300 outline-none resize-none"
                        />
                    </div>


                    <button
                        type="button"
                        className="w-full py-5 rounded-2xl bg-neutral-900 text-white font-extrabold text-lg transition hover:bg-blue-600 hover:shadow-xl active:scale-95 shadow-lg shadow-neutral-200"
                    >
                        Отправить сообщение
                    </button>

                </form>

            </div>

        </div>
    );
}