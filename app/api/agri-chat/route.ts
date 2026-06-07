import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const MIMO_API_KEY = process.env.MIMO_API_KEY || "tp-sjlmihy9k77uc94h9tqy5hzarx0e26fv2drbu9y3wx8jsrhi";
    const MIMO_BASE_URL =
      process.env.MIMO_BASE_URL || "https://token-plan-sgp.xiaomimimo.com/v1";
    const MIMO_MODEL = process.env.MIMO_MODEL || "mimo-v2.5";

    const systemMessage = {
      role: "system",
      content: `Kamu adalah asisten AI resmi AGRI-EYE, platform agritech keterlacakan pangan Indonesia.

Tugasmu:
- Bantu pengguna memahami cara kerja AGRI-EYE: QR keterlacakan, data panen, marketplace B2B
- Jawab pertanyaan tentang cara daftar sebagai petani atau pembeli B2B
- Jelaskan fitur platform: tracking produk dari lahan ke meja, validasi grade, transparansi rantai pasok
- Bantu arahkan ke kontak jika ada pertanyaan teknis mendalam

Aturan:
- Selalu ramah, profesional, gunakan bahasa Indonesia
- Jawaban singkat dan jelas (maksimal 3-4 paragraf)
- Jika tidak tahu jawaban pasti, arahkan ke WhatsApp atau email resmi
- Jangan mengarang data teknis yang tidak kamu ketika
- Gunakan emoji secukupnya untuk nada ramah

Kontak resmi AGRI-EYE:
- WhatsApp: +62 812-3456-7890
- Email: hello@agri-eye.id`,
    };

    const res = await fetch(`${MIMO_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MIMO_API_KEY}`,
      },
      body: JSON.stringify({
        model: MIMO_MODEL,
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("MiMo API error:", res.status, err);
      return NextResponse.json(
        {
          reply:
            "Maaf, asisten sedang mengalami gangguan. Silakan coba beberapa saat lagi.",
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "Maaf, saya tidak bisa memproses pesan itu.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Terjadi kesalahan internal. Silakan coba lagi." },
      { status: 200 }
    );
  }
}
