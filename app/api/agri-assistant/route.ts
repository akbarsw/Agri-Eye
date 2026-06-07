import { NextResponse } from 'next/server';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const systemPrompt = `Kamu adalah Asisten AGRI-EYE, customer service ramah untuk platform agribisnis AGRI-EYE.
Jawab dalam bahasa Indonesia yang natural, singkat, jelas, dan membantu.
Fokus bantuan: fitur petani, fitur pembeli B2B, Data Panen, QR Produk, marketplace, sertifikat mitra, pembayaran, pesanan, dan validasi admin.
Jika tidak tahu data spesifik pengguna, jangan mengarang. Arahkan pengguna menghubungi admin AGRI-EYE.`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Pesan tidak boleh kosong.' }, { status: 400 });
    }

    const apiKey = process.env.MIMO_API_KEY;
    const baseUrl = process.env.MIMO_BASE_URL;
    const model = process.env.MIMO_MODEL || 'mimo-v2.5';

    if (!apiKey || !baseUrl) {
      return NextResponse.json({
        reply: 'Asisten AGRI-EYE belum aktif karena konfigurasi Mimo belum dipasang di environment variable.',
      });
    }

    const safeMessages = messages
      .filter((message) => message.content?.trim())
      .slice(-10)
      .map((message) => ({ role: message.role, content: message.content.trim() }));

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemPrompt }, ...safeMessages],
        temperature: 0.45,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        reply: 'Maaf, Asisten AGRI-EYE sedang mengalami kendala koneksi. Silakan coba lagi sebentar.',
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || 'Maaf, aku belum bisa menjawab pertanyaan itu.';

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: 'Maaf, terjadi kendala pada Asisten AGRI-EYE. Silakan coba lagi atau hubungi tim AGRI-EYE.',
    });
  }
}
