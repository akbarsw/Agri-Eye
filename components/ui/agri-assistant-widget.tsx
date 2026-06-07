'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const quickQuestions = [
  'Cara input Data Panen?',
  'Apa itu QR Produk?',
  'Cara ajukan sertifikat?',
  'Bagaimana pembeli B2B memesan?',
];

const initialMessages: ChatMessage[] = [
  {
    role: 'assistant',
    content: 'Halo! Aku Asisten AGRI-EYE 👋 Ada yang bisa aku bantu?',
  },
];

export default function AgriAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  async function sendMessage(text: string) {
    const trimmedText = text.trim();
    if (!trimmedText || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmedText }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/agri-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: data.reply || 'Maaf, aku belum bisa menjawab pertanyaan itu.',
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: 'Maaf, koneksi Asisten AGRI-EYE sedang bermasalah. Coba lagi sebentar ya.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-4 w-[calc(100vw-2.5rem)] overflow-hidden rounded-[1.8rem] border border-[#D7EBDD] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:w-[430px]"
          >
            <div className="flex items-center justify-between bg-[#21A36A] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/18 text-white shadow-inner">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-bold">Asisten AGRI-EYE</p>
                  <p className="text-sm font-medium text-white/75">Online · Siap membantu</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/16 transition-colors hover:bg-white/25"
                aria-label="Tutup Asisten AGRI-EYE"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[430px] overflow-y-auto bg-[#FBFEFC] px-5 py-5">
              <div className="grid gap-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[86%] rounded-[1.25rem] px-4 py-3 text-sm leading-6 shadow-sm ${
                      message.role === 'assistant'
                        ? 'justify-self-start border border-[#DDEFE4] bg-white text-slate-700'
                        : 'justify-self-end bg-[#21A36A] text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {loading ? (
                  <div className="w-fit rounded-[1.25rem] border border-[#DDEFE4] bg-white px-4 py-3 text-sm font-medium text-slate-500 shadow-sm">
                    Asisten sedang mengetik...
                  </div>
                ) : null}
                <div ref={bottomRef} />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="rounded-full border border-[#CFEBDC] bg-white px-4 py-2.5 text-sm font-bold text-[#197A55] transition-all hover:border-[#21A36A] hover:bg-[#EAF8F0]"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-3 border-t border-[#DDEFE4] bg-white p-4">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ketik pertanyaan..."
                className="min-w-0 flex-1 rounded-[1.2rem] border border-[#DDEFE4] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#21A36A] focus:ring-4 focus:ring-[#21A36A]/10"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-[#21A36A] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#188A58] disabled:cursor-not-allowed disabled:opacity-45"
              >
                Kirim
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#21A36A] text-white shadow-[0_18px_50px_rgba(33,163,106,0.42)] transition-all hover:scale-105 hover:bg-[#188A58]"
        aria-label="Buka Asisten AGRI-EYE"
      >
        {open ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
      </button>
    </div>
  );
}
