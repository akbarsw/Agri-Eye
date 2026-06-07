import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const MIMO_API_KEY = process.env.MIMO_API_KEY;
    const MIMO_BASE_URL = process.env.MIMO_BASE_URL;
    const MIMO_MODEL = process.env.MIMO_MODEL || "mimo-v2.5";

    if (!MIMO_API_KEY || !MIMO_BASE_URL) {
      return NextResponse.json(
        {
          reply:
            "Asisten AGRI-EYE belum aktif. Konfigurasi API belum dipasang di environment variable.",
        },
        { status: 200 }
      );
    }

    const systemMessage = {
      role: "system",
      content: `Kamu adalah asisten chat AGRI-EYE. Jawab SINGKAT dan PADAT.

Aturan WAJIB:
- Maksimal 2-3 kalimat saja per jawaban
- Langsung ke inti, jangan bertele-tele
- Jangan buka dengan sapaan panjang
- Jangan list fitur yang tidak ditanya
- Gunakan bahasa Indonesia casual
- Emoji 1-2 saja, jangan berlebihan
- JANGAN PERNAH sebut nomor WhatsApp, nomor telepon, atau suruh hubungi kontak manapun
- JANGAN gunakan markdown (**, ***, _, __, \`) — tulis biasa saja tanpa formatting
- Jika tidak tahu jawabannya: "Maaf, saya belum punya info itu. Coba tanya hal lain ya 😊"

Contoh jawaban bagus:
Q: "Apa itu QR Produk?"
A: "QR Produk itu kode unik di setiap produk AGRI-EYE. Scan QR-nya buat lihat asal produk, tanggal panen, dan grade kualitasnya 🌱"

Q: "Cara daftar?"
A: "Klik 'Mulai sebagai Petani' di halaman utama, isi data diri, dan tunggu verifikasi dari admin kami ✅"`,
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
        max_tokens: 256,
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
    let reply =
      data.choices?.[0]?.message?.content ||
      "Maaf, saya tidak bisa memproses pesan itu.";

    // Strip markdown bold/italic artifacts
    reply = reply
      .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/_(.*?)_/g, "$1")
      .replace(/`(.*?)`/g, "$1")
      .trim();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Terjadi kesalahan internal. Silakan coba lagi." },
      { status: 200 }
    );
  }
}
