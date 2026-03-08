"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    niche: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.niche || !form.contact || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          niche: "",
          contact: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-start">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <img
              src="/avatar.png"
              alt="Натали Борисова"
              className="w-full h-full object-cover object-[50%_30%] scale-[1.06]"
            />
          </div>
          <p className="text-sm sm:text-base text-neutral-500">
            Обычно отвечаю в течение 24 часов
          </p>
        </div>

        <h1 className="text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold tracking-tight leading-[0.98] lg:whitespace-nowrap">
          Обсудим ваш проект
        </h1>

        <p className="mt-6 md:mt-8 text-[clamp(1rem,2.6vw,1.2rem)] text-neutral-700 leading-relaxed max-w-xl">
          Я открыта к новым проектам в сфере продуктового маркетинга,
          масштабирования и монетизации. Если вы хотите превратить
          разрозненные продажи в системную архитектуру и устойчивую
          воронку, расскажите мне о своем проекте.
        </p>

        <div className="mt-10 md:mt-12 space-y-8 md:space-y-10 max-w-sm">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.12em]">
              Связаться в Telegram
            </p>
            <a
              href="https://t.me/natalee_borisova"
              className="flex items-center justify-between px-5 sm:px-6 py-4 rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] transition"
            >
              <span className="font-extrabold text-base sm:text-lg text-neutral-900">
                @natalee_borisova
              </span>
              <span className="text-neutral-400 text-xl">→</span>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-[0.12em]">
              Все социальные сети
            </p>
            <a
              href="https://t.me/borisovanatalii"
              className="flex items-center justify-between px-5 sm:px-6 py-4 rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] hover:border-neutral-300 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] transition"
            >
              <span className="font-extrabold text-base sm:text-lg text-neutral-900">
                Открыть
              </span>
              <span className="text-neutral-400 text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:mt-8 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-neutral-200 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10 h-fit relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 blur-[90px] -translate-y-24 translate-x-24" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50/60 blur-[90px] translate-y-24 -translate-x-24" />

        {status === "success" ? (
          <div className="relative flex flex-col items-center justify-center text-center py-12 gap-4">
            <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-2xl">
              ✓
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Заявка отправлена!
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Получила вашу заявку и отвечу в течение 24 часов.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm text-neutral-400 underline underline-offset-4 hover:text-neutral-600 transition"
            >
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <div className="relative space-y-4 md:space-y-5">
            <div>
              <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Как к вам обращаться"
                className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                Ниша или проект
              </label>
              <input
                type="text"
                name="niche"
                value={form.niche}
                onChange={handleChange}
                placeholder="Например: онлайн школа или экспертный блог"
                className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                Как с вами связаться
              </label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Telegram, email или телефон"
                className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-extrabold mb-2 uppercase tracking-[0.12em] text-neutral-500">
                Кратко опишите задачу
              </label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Что сейчас не работает и какой результат хотите получить"
                className="w-full bg-white border border-neutral-200 rounded-2xl p-4 focus:border-neutral-400 outline-none resize-none transition min-h-[140px]"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Что-то пошло не так, попробуйте ещё раз или напишите в Telegram.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                status === "loading" ||
                !form.name ||
                !form.niche ||
                !form.contact ||
                !form.message
              }
              className="w-full py-4 md:py-5 rounded-2xl bg-neutral-900 text-white font-extrabold text-base md:text-lg transition hover:bg-blue-600 hover:shadow-xl active:scale-95 shadow-lg shadow-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Отправляю…" : "Отправить сообщение"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}