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
    <main className="flex min-h-screen flex-col items-center px-5 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <header className="flex flex-col items-center text-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.72_0.22_350)] to-[oklch(0.78_0.18_50)] blur-2xl opacity-50" />
            <img
              src={avatar}
              alt="Роман Волков"
              width={128}
              height={128}
              className="avatar-glow relative h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            <span className="gradient-text">Роман Волков</span>
          </h1>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground sm:text-base">
            🎙 Говорю о важном. Все мои соцсети — здесь.
          </p>
        </header>

        <section className="mt-10 flex flex-col gap-3" aria-label="Ссылки на соцсети">
          {links.map((link, i) => (
            <SocialButton key={link.label} {...link} delay={i * 80} />
          ))}
        </section>

        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Роман Волков</p>
        </footer>
      </div>
    </main>
  );
}
