// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, niche, message } = body;

    if (!name || !niche || !message) {
      return NextResponse.json(
        { error: "Заполните все поля" },
        { status: 400 }
      );
    }

    // Вставьте сюда ссылку из Google Apps Script (шаг 2 инструкции)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, niche, message }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке в Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Что-то пошло не так, попробуйте ещё раз" },
      { status: 500 }
    );
  }
}