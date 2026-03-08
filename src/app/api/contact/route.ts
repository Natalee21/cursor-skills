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

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is missing");
      return NextResponse.json(
        { error: "Не настроена переменная GOOGLE_SCRIPT_URL" },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        niche,
        message,
      }),
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    console.log("Google Script status:", googleResponse.status);
    console.log("Google Script response:", responseText);

    if (!googleResponse.ok) {
      return NextResponse.json(
        {
          error: "Google Script вернул ошибку",
          status: googleResponse.status,
          response: responseText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      googleStatus: googleResponse.status,
      googleResponse: responseText,
    });
  } catch (error) {
    console.error("API /api/contact error:", error);

    return NextResponse.json(
      {
        error: "Что-то пошло не так, попробуйте ещё раз",
      },
      { status: 500 }
    );
  }
}