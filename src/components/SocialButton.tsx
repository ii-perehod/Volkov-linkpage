import type { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  handle: string;
  delay?: number;
  index?: number;
}

export function SocialButton({ href, icon: Icon, label, handle, delay = 0, index = 0 }: SocialButtonProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button group flex items-center gap-4 px-5 py-4 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono-display text-[10px] tracking-widest text-muted-foreground/70 group-hover:text-primary transition-colors">
        {num}
      </span>

      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-black/30 transition-colors group-hover:border-primary/60 group-hover:bg-primary/10">
        <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.75} />
      </div>

      <div className="flex flex-1 flex-col items-start min-w-0">
        <span className="font-mono-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="text-base font-semibold text-foreground truncate w-full">
          {handle}
        </span>
      </div>

      <svg
        className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
