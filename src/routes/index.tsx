import { createFileRoute } from "@tanstack/react-router";
import {
   Crosshair,
  Eye,
  Hammer,
  Snowflake,
  Apple,
  ArrowRight,
  BatteryCharging,
  Download,
  Facebook,
  Gamepad2,
  Gauge,
  Globe,
  Key,
  Mic,
  Send,
  ShieldCheck,
  Smartphone,
  Video,
  Wifi,
  Youtube,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Game Download Center — ទាញយកកម្មវិធីហ្គេម" },
      {
        name: "description",
        content: "ទាញយកកម្មវិធីសម្រាប់ Android និង iOS ដោយឥតគិតថ្លៃ — លឿន សុវត្ថិភាព និងងាយស្រួល។",
      },
      { property: "og:title", content: "Game Download Center" },
      {
        property: "og:description",
        content: "ទាញយកកម្មវិធីសម្រាប់ Android និង iOS ដោយឥតគិតថ្លៃ។",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Feature = { label: string; icon: LucideIcon; tone: string };

const features: Feature[] = [
  {
    label: "AIMPOINT",
    icon: Crosshair,
    tone: "text-neon-red border-neon-red/40",
  },
  {
    label: "AIMLOOK",
    icon: Eye,
    tone: "text-neon-yellow border-neon-yellow/40",
  },
  {
    label: "Maker",
    icon: Hammer,
    tone: "text-neon-violet border-neon-violet/40",
  },
  {
    label: "FREEZE",
    icon: Snowflake,
    tone: "text-neon-green border-neon-green/40",
  },
  {
    label: "ANTI-BAN",
    icon: ShieldCheck,
    tone: "text-neon-cyan border-neon-cyan/40",
  },
];

const badges = [
  { label: "100% SAFE", icon: ShieldCheck },
  { label: "STABLE & FAST", icon: Zap },
  { label: "GLOBAL SUPPORT", icon: Globe },
];

const links = [
  {
    title: "ទាក់ទងមកខ្ញុំផ្ទាល់",
    handle: "@SUSANOSEXX",
    note: "ឆាតតាម Telegram ផ្ទាល់ខ្លួន",
    icon: Send,
    cta: "CHAT",
    href: "https://t.me/SUSANOSEXX",
  },
  {
    title: "Group Telegram ផ្លូវការរបស់យើង",
    handle: "SUSA mod Ios ",
    note: "តាមដានព័ត៌មានថ្មីៗ",
     icon: Send,
    cta: "Group",
    href: "https://t.me/susamodios",
  },
{
  title: "បញ្ចូល Key",
  handle: "Key",
  note: "បញ្ចូលលេខកូដដំណើរការ",
  icon: Key,
  cta: "OPEN",
  href: "https://ph4nt0m.lol/",
},
];

function Index() {
  return (
    <main className="bg-grid min-h-screen px-4 py-8">
      <div className="mx-auto flex max-w-md flex-col gap-5">
        {/* Hero panel */}
        <section className="panel animate-float-in overflow-hidden p-5 shadow-glow">
          <div className="mb-5 flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-1 font-display text-[11px] tracking-[0.2em] text-neon-cyan">
              <Gamepad2 className="h-4 w-4" /> King MODE
            </span>
            <h1 className="font-display text-3xl font-black leading-tight text-gradient-hero">
              KING SUSA
            </h1>
            <p className="text-sm text-muted-foreground">
              មានម៉ូតគ្រប់ប្រភេទសម្រាប់ Android និង iOS 
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {features.map(({ label, icon: Icon, tone }) => (
              <div
                key={label}
                className={`flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border bg-card/60 transition-transform hover:-translate-y-0.5 ${tone}`}
              >
                <Icon className="h-6 w-6" />
                <span className="font-display text-[10px] font-bold tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {badges.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-md border border-neon-blue/40 bg-neon-blue/10 px-3 py-1.5 font-display text-[10px] font-bold tracking-wider text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-neon-cyan" /> {label}
              </span>
            ))}
          </div>
        </section>

        {/* Download cards */}
        <DownloadCard
          title="ANDROID DOWNLOAD"
          note="ចុចទីនេះដើម្បីទាញយក APK (Free)"
          icon={Smartphone}
          iconTone="text-android border-android/40 bg-android/10"
          buttonTone="bg-android text-android-foreground"
          href="https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk"
          delay="0.1s"
        />
        <DownloadCard
          title="iOS / IPHONE DOWNLOAD"
          note="ចុចទីនេះដើម្បីទាញយក iOS (Free)"
          icon={Apple}
          iconTone="text-ios border-ios/40 bg-ios/10"
          buttonTone="bg-ios text-ios-foreground"
          href="https://apps.apple.com/kh/app/happ-proxy-utility/id6504287215"
          delay="0.2s"
        />

        {/* Links */}
        <section
          className="panel animate-float-in p-5"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="mb-4 flex items-start gap-3 border-b border-border pb-4">
            <Download className="mt-1 h-6 w-6 shrink-0 text-neon-cyan" />
            <div>
              <h2 className="font-display text-lg font-bold leading-snug text-neon-cyan">
                បញ្ជីតំណភ្ជាប់ទាំងអស់
              </h2>
              <p className="text-xs text-muted-foreground">(DOWNLOAD LINKS) — ចុចលើ Link ដើម្បីបើក</p>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {links.map(({ title, handle, note, icon: Icon, cta, href }) => (
              <li
                key={handle}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neon-cyan/40 text-neon-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="truncate font-display text-xs font-bold text-foreground">{handle}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{note}</p>
                </div>
                <a
                  href={href}
                  className="inline-flex items-center gap-1 rounded-md border border-neon-cyan/50 px-3 py-1.5 font-display text-[10px] font-bold tracking-wider text-neon-cyan transition-colors hover:bg-neon-cyan/10"
                >
                  {cta} <ArrowRight className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="pb-4 text-center text-xs text-muted-foreground">
          © 2026 KING SUSA · MODE FREE FIRE
        </footer>
      </div>
    </main>
  );
}

function DownloadCard({
  title,
  note,
  icon: Icon,
  iconTone,
  buttonTone,
  href,
  delay,
}: {
  title: string;
  note: string;
  icon: LucideIcon;
  iconTone: string;
  buttonTone: string;
  href: string;
  delay: string;
}) {
  return (
    <section
      className="panel animate-float-in flex items-center gap-4 p-4"
      style={{ animationDelay: delay }}
    >
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${iconTone}`}>
        <Icon className="h-7 w-7" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-sm font-bold leading-snug">{title}</h2>
        <p className="mt-1 text-xs text-muted-foreground">📥 {note}</p>
      </div>
      <a
        href={href}
        className={`animate-pulse-glow inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-transform hover:scale-105 ${buttonTone}`}
      >
        <Download className="h-4 w-4" /> ទាញយក
      </a>
    </section>
  );
}
