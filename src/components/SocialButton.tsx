import type { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  handle: string;
  delay?: number;
}

export function SocialButton({ href, icon: Icon, label, handle, delay = 0 }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button group flex items-center gap-4 rounded-2xl px-5 py-4 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-white/10">
        <Icon className="h-6 w-6 text-foreground" strokeWidth={2} />
      </div>
      <div className="flex flex-1 flex-col items-start">
        <span className="text-base font-semibold text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{handle}</span>
      </div>
      <svg
        className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
