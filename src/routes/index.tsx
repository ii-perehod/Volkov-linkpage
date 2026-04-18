import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Send, Music2, Globe, Mail } from "lucide-react";
import { SocialButton } from "@/components/SocialButton";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Роман Волков — все мои соцсети в одном месте" },
      {
        name: "description",
        content: "Подписывайся на меня в Telegram, Instagram, YouTube, TikTok и других платформах.",
      },
      { property: "og:title", content: "Роман Волков — все мои соцсети" },
      {
        property: "og:description",
        content: "Все ссылки на мои соцсети в одном месте.",
      },
    ],
  }),
});

// 👇 Замени href и handle на свои данные. Telegram уже подставлен.
const links = [
  { href: "https://t.me/govoritvolkov", icon: Send, label: "Telegram", handle: "@govoritvolkov" },
  { href: "https://instagram.com/", icon: Instagram, label: "Instagram", handle: "@твой_ник" },
  { href: "https://youtube.com/@", icon: Youtube, label: "YouTube", handle: "Roman Volkov" },
  { href: "https://tiktok.com/@", icon: Music2, label: "TikTok", handle: "@твой_ник" },
  { href: "https://x.com/", icon: Twitter, label: "Twitter / X", handle: "@твой_ник" },
  { href: "https://example.com", icon: Globe, label: "Мой сайт", handle: "romanvolkov.com" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Сотрудничество", handle: "hello@example.com" },
];

function Index() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center px-5 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-between font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>// rv_links</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            online
          </span>
        </div>

        <header className="flex flex-col items-center text-center">
          <div className="relative animate-float">
            <img
              src={avatar}
              alt="Роман Волков"
              width={144}
              height={144}
              className="avatar-glow relative h-36 w-36 rounded-full object-cover"
            />
          </div>

          <span className="tag-chip mt-6">Журналист · Подкастер</span>

          <h1 className="mt-4 font-mono-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Роман <span className="gradient-text">Волков</span>
          </h1>

          <div className="mt-3 flex w-full max-w-xs items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-primary">
              ch.001
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          <p className="mt-4 max-w-xs text-sm text-muted-foreground sm:text-base">
            Говорю громко о том, что важно. Все каналы связи — ниже.
          </p>
        </header>

        <section className="mt-10 flex flex-col gap-3" aria-label="Ссылки на соцсети">
          {links.map((link, i) => (
            <SocialButton key={link.label} {...link} delay={i * 80} index={i} />
          ))}
        </section>

        <footer className="mt-12 flex items-center justify-between font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} R.V.</span>
          <span>v.1.0 — built loud</span>
        </footer>
      </div>
    </main>
  );
}
