import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, Send, Music2, Globe, Mail } from "lucide-react";
import { SocialButton } from "@/components/SocialButton";
import avatar from "@/assets/avatar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Алина Стар — все мои соцсети в одном месте" },
      {
        name: "description",
        content: "Подписывайся на меня в Instagram, YouTube, TikTok, Telegram и других платформах.",
      },
      { property: "og:title", content: "Алина Стар — все мои соцсети" },
      {
        property: "og:description",
        content: "Все ссылки на мои соцсети в одном месте.",
      },
    ],
  }),
});

const links = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram", handle: "@alina.star" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube", handle: "Alina Star" },
  { href: "https://tiktok.com", icon: Music2, label: "TikTok", handle: "@alina.star" },
  { href: "https://t.me", icon: Send, label: "Telegram", handle: "@alinastar" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter / X", handle: "@alinastar" },
  { href: "https://example.com", icon: Globe, label: "Мой сайт", handle: "alinastar.com" },
  { href: "mailto:hello@alinastar.com", icon: Mail, label: "Сотрудничество", handle: "hello@alinastar.com" },
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
              alt="Алина Стар"
              width={128}
              height={128}
              className="avatar-glow relative h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            <span className="gradient-text">Алина Стар</span>
          </h1>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground sm:text-base">
            ✨ Блогер о стиле, путешествиях и жизни. Все мои ссылки — здесь.
          </p>
        </header>

        <section className="mt-10 flex flex-col gap-3" aria-label="Ссылки на соцсети">
          {links.map((link, i) => (
            <SocialButton key={link.label} {...link} delay={i * 80} />
          ))}
        </section>

        <footer className="mt-12 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Алина Стар</p>
        </footer>
      </div>
    </main>
  );
}
